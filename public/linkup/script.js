// LinkUp Chat Application - Client Side Script
// This handles UI interactions and provides hooks for backend integration

class LinkUpChat {
    constructor() {
        this.currentUser = this.loadUserData();
        this.currentChat = 'general';
        this.messages = [];
        this.selectedFiles = [];
        this.isTyping = false;
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.attachEventListeners();
        this.updateUserDisplay();
        this.loadInitialMessages();
    }

    cacheElements() {
        // Input elements
        this.messageInput = document.getElementById('messageInput');
        this.fileInput = document.getElementById('fileInput');
        this.searchInput = document.getElementById('searchInput');
        this.usernameInput = document.getElementById('usernameInput');
        
        // Buttons
        this.sendBtn = document.getElementById('sendBtn');
        this.attachBtn = document.getElementById('attachBtn');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.closeSettingsBtn = document.getElementById('closeSettingsBtn');
        this.saveSettingsBtn = document.getElementById('saveSettingsBtn');
        this.statusBtn = document.getElementById('statusBtn');
        
        // Containers
        this.messagesContainer = document.getElementById('messagesContainer');
        this.filePreview = document.getElementById('filePreview');
        this.chatList = document.getElementById('chatList');
        this.typingIndicator = document.getElementById('typingIndicator');
        
        // Modal
        this.settingsModal = document.getElementById('settingsModal');
        
        // Display elements
        this.userName = document.getElementById('userName');
        this.userInitial = document.getElementById('userInitial');
        this.currentChatName = document.getElementById('currentChatName');
    }

    attachEventListeners() {
        // Message sending
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Typing indicator
        this.messageInput.addEventListener('input', () => this.handleTyping());

        // File handling
        this.attachBtn.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));

        // Settings modal
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        this.closeSettingsBtn.addEventListener('click', () => this.closeSettings());
        this.saveSettingsBtn.addEventListener('click', () => this.saveSettings());
        
        // Close modal on outside click
        this.settingsModal.addEventListener('click', (e) => {
            if (e.target === this.settingsModal) {
                this.closeSettings();
            }
        });

        // Search functionality
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Chat selection
        this.chatList.addEventListener('click', (e) => {
            const chatItem = e.target.closest('.chat-item');
            if (chatItem) {
                this.selectChat(chatItem.dataset.chat);
            }
        });

        // Theme switching
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Status toggle
        this.statusBtn.addEventListener('click', () => this.toggleStatus());
    }

    // User Management
    loadUserData() {
        const savedUser = localStorage.getItem('linkup_user');
        return savedUser ? JSON.parse(savedUser) : {
            name: 'User',
            status: 'online',
            notifications: true
        };
    }

    saveUserData() {
        localStorage.setItem('linkup_user', JSON.stringify(this.currentUser));
    }

    updateUserDisplay() {
        this.userName.textContent = this.currentUser.name;
        this.userInitial.textContent = this.currentUser.name.charAt(0).toUpperCase();
        if (this.usernameInput) {
            this.usernameInput.value = this.currentUser.name;
        }
    }

    // Message Handling
    sendMessage() {
        const content = this.messageInput.value.trim();
        
        if (!content && this.selectedFiles.length === 0) return;

        const message = {
            id: Date.now(),
            author: this.currentUser.name,
            content: content,
            timestamp: new Date(),
            files: [...this.selectedFiles],
            type: 'sent'
        };

        // Add message to UI
        this.addMessageToUI(message);

        // BACKEND HOOK: Send message to server
        this.sendMessageToBackend(message);

        // Clear input and files
        this.messageInput.value = '';
        this.selectedFiles = [];
        this.filePreview.classList.remove('active');
        this.filePreview.innerHTML = '';
        
        // Scroll to bottom
        this.scrollToBottom();
    }

    addMessageToUI(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}`;
        
        const avatarColor = this.getGradientForUser(message.author);
        const initial = message.author.charAt(0).toUpperCase();
        
        messageDiv.innerHTML = `
            ${message.type === 'received' ? `
                <div class="message-avatar">
                    <div class="avatar-circle" style="background: ${avatarColor};">${initial}</div>
                </div>
            ` : ''}
            <div class="message-content">
                <div class="message-header">
                    <span class="message-author">${message.author}</span>
                    <span class="message-time">${this.formatTime(message.timestamp)}</span>
                </div>
                <div class="message-bubble">
                    ${message.content}
                    ${message.files.length > 0 ? this.renderFiles(message.files, message.type) : ''}
                </div>
            </div>
        `;
        
        this.messagesContainer.appendChild(messageDiv);
    }

    renderFiles(files, messageType) {
        return files.map(file => `
            <div class="file-attachment" onclick="linkUpChat.downloadFile('${file.name}', '${file.url || ''}')">
                <div class="file-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V7L11 2H6Z" stroke="${messageType === 'sent' ? 'white' : 'currentColor'}" stroke-width="2"/>
                        <path d="M11 2V7H16" stroke="${messageType === 'sent' ? 'white' : 'currentColor'}" stroke-width="2"/>
                    </svg>
                </div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${this.formatFileSize(file.size)}</div>
                </div>
            </div>
        `).join('');
    }

    // File Handling
    handleFileSelect(event) {
        const files = Array.from(event.target.files);
        
        files.forEach(file => {
            this.selectedFiles.push({
                name: file.name,
                size: file.size,
                type: file.type,
                file: file
            });
        });

        this.updateFilePreview();
        event.target.value = ''; // Reset input
    }

    updateFilePreview() {
        if (this.selectedFiles.length === 0) {
            this.filePreview.classList.remove('active');
            this.filePreview.innerHTML = '';
            return;
        }

        this.filePreview.classList.add('active');
        this.filePreview.innerHTML = this.selectedFiles.map((file, index) => `
            <div class="file-preview-item">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V7L11 2H6Z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>${file.name}</span>
                <button class="file-preview-remove" onclick="linkUpChat.removeFile(${index})">×</button>
            </div>
        `).join('');
    }

    removeFile(index) {
        this.selectedFiles.splice(index, 1);
        this.updateFilePreview();
    }

    downloadFile(fileName, fileUrl) {
        // BACKEND HOOK: Download file from server
        console.log('Download file:', fileName, fileUrl);
        // Implement your file download logic here
    }

    // Chat Management
    selectChat(chatId) {
        this.currentChat = chatId;
        
        // Update UI
        document.querySelectorAll('.chat-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-chat="${chatId}"]`).classList.add('active');
        
        // Update header
        const chatName = chatId.charAt(0).toUpperCase() + chatId.slice(1);
        this.currentChatName.textContent = chatName;
        
        // Load chat messages
        this.loadChatMessages(chatId);
    }

    loadChatMessages(chatId) {
        // BACKEND HOOK: Load messages for specific chat
        console.log('Loading messages for chat:', chatId);
        // Clear current messages
        this.messagesContainer.innerHTML = `
            <div class="date-divider">
                <span>Today</span>
            </div>
        `;
        // Load from backend
    }

    // Search
    handleSearch(query) {
        const chatItems = document.querySelectorAll('.chat-item');
        const searchLower = query.toLowerCase();
        
        chatItems.forEach(item => {
            const chatName = item.querySelector('h3').textContent.toLowerCase();
            const chatPreview = item.querySelector('.chat-preview').textContent.toLowerCase();
            
            if (chatName.includes(searchLower) || chatPreview.includes(searchLower)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Typing Indicator
    handleTyping() {
        if (!this.isTyping) {
            this.isTyping = true;
            // BACKEND HOOK: Notify server that user is typing
            this.notifyTyping(true);
        }

        clearTimeout(this.typingTimeout);
        this.typingTimeout = setTimeout(() => {
            this.isTyping = false;
            // BACKEND HOOK: Notify server that user stopped typing
            this.notifyTyping(false);
        }, 1000);
    }

    showTypingIndicator(show) {
        if (show) {
            this.typingIndicator.classList.add('active');
        } else {
            this.typingIndicator.classList.remove('active');
        }
        this.scrollToBottom();
    }

    // Settings
    openSettings() {
        this.settingsModal.classList.add('active');
    }

    closeSettings() {
        this.settingsModal.classList.remove('active');
    }

    saveSettings() {
        const newUsername = this.usernameInput.value.trim();
        if (newUsername) {
            this.currentUser.name = newUsername;
            this.saveUserData();
            this.updateUserDisplay();
        }
        
        this.currentUser.notifications = document.getElementById('notificationsToggle').checked;
        this.saveUserData();
        
        this.closeSettings();
        this.showNotification('Settings saved successfully!');
    }

    toggleStatus() {
        const statusIndicator = this.statusBtn.querySelector('.status-indicator');
        const statusText = this.statusBtn.querySelector('span:last-child');
        
        if (statusIndicator.classList.contains('online')) {
            statusIndicator.classList.remove('online');
            statusIndicator.style.background = '#ffd43b';
            statusText.textContent = 'Away';
            this.currentUser.status = 'away';
        } else {
            statusIndicator.classList.add('online');
            statusText.textContent = 'Online';
            this.currentUser.status = 'online';
        }
        
        this.saveUserData();
    }

    // Utility Functions
    formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    getGradientForUser(username) {
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        ];
        const index = username.length % gradients.length;
        return gradients[index];
    }

    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    showNotification(message) {
        // Simple notification - you can enhance this
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 2000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    loadInitialMessages() {
        // Load some initial messages for demo
        const welcomeMessage = {
            id: 1,
            author: 'Admin',
            content: 'Welcome to LinkUp! 🎉 Start chatting and share files seamlessly.',
            timestamp: new Date(),
            files: [],
            type: 'received'
        };
        
        this.addMessageToUI(welcomeMessage);
    }

    // ==========================================
    // BACKEND INTEGRATION HOOKS
    // ==========================================
    // Replace these with your actual backend calls

    sendMessageToBackend(message) {
        console.log('BACKEND: Send message', message);
        
        // Example WebSocket send:
        // if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        //     this.socket.send(JSON.stringify({
        //         type: 'message',
        //         chat: this.currentChat,
        //         content: message.content,
        //         files: message.files,
        //         timestamp: message.timestamp
        //     }));
        // }

        // Example HTTP request:
        // fetch('/api/messages', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(message)
        // });
    }

    notifyTyping(isTyping) {
        console.log('BACKEND: User typing status', isTyping);
        
        // Example WebSocket send:
        // if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        //     this.socket.send(JSON.stringify({
        //         type: 'typing',
        //         chat: this.currentChat,
        //         isTyping: isTyping
        //     }));
        // }
    }

    // Call this method when you receive a message from the backend
    receiveMessage(message) {
        // Add message with 'received' type
        message.type = 'received';
        this.addMessageToUI(message);
        this.scrollToBottom();
    }

    // Call this when someone else is typing
    onUserTyping(isTyping) {
        this.showTypingIndicator(isTyping);
    }

    // WebSocket connection example (uncomment and configure for your backend)
    /*
    connectWebSocket(url) {
        this.socket = new WebSocket(url);
        
        this.socket.onopen = () => {
            console.log('Connected to WebSocket');
            this.showNotification('Connected to server');
        };
        
        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            
            switch(data.type) {
                case 'message':
                    this.receiveMessage(data);
                    break;
                case 'typing':
                    this.onUserTyping(data.isTyping);
                    break;
                case 'user_joined':
                    this.showNotification(`${data.username} joined the chat`);
                    break;
                case 'user_left':
                    this.showNotification(`${data.username} left the chat`);
                    break;
            }
        };
        
        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.showNotification('Connection error');
        };
        
        this.socket.onclose = () => {
            console.log('WebSocket closed');
            this.showNotification('Disconnected from server');
            // Attempt to reconnect
            setTimeout(() => this.connectWebSocket(url), 3000);
        };
    }
    */
}

// Initialize the application
let linkUpChat;
document.addEventListener('DOMContentLoaded', () => {
    linkUpChat = new LinkUpChat();
    
    // Example: Connect to WebSocket (configure with your backend URL)
    // linkUpChat.connectWebSocket('ws://localhost:8080');
    
    console.log('LinkUp Chat initialized!');
    console.log('Backend integration hooks are ready.');
    console.log('Check the sendMessageToBackend() and other methods for integration points.');
});

// Make linkUpChat globally accessible for inline onclick handlers
window.linkUpChat = linkUpChat;