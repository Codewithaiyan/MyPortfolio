"use client";

import { useState } from "react";
import { Mail, Linkedin, Sparkles, Github } from "lucide-react";
import { motion } from "motion/react";

export default function ContactFooter() {
  const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "aiyanforsure54@gmail.com",
    href: "mailto:aiyanforsure54@gmail.com",
    description: "Drop me a line anytime"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aiyan Ahmed",
    href: "https://linkedin.com/in/aiyanahmed113",
    description: "Let's connect professionally"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Codewithaiyan",
    href: "https://github.com/Codewithaiyan",
    description: "Check out my code"
  }];


  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Check if we're in an iframe
    const isInIframe = window.self !== window.top;

    if (isInIframe) {
      // Send message to parent window to open the link
      window.parent.postMessage({
        type: "OPEN_EXTERNAL_URL",
        data: { url: href }
      }, "*");
    } else {
      // Open directly
      window.location.href = href;
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Enhanced Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/573ca110-310b-4a44-806c-67c597f176b9/generated_images/subtle-network-nodes-and-connections-bac-aa1830ee-20250824094134.jpg")'
        }} />


      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-black/10 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            y: [null, -50],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear"
          }} />

        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>

          {/* Enhanced Header */}
          <motion.div
            className="relative inline-block mb-6"
            whileHover={{ scale: 1.02 }}>

            <h2 className="text-5xl lg:text-6xl font-heading font-bold text-black mb-4 relative">
              Let's Connect
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
                className="absolute -top-2 -right-6">

                <Sparkles className="w-6 h-6 text-black/40" />
              </motion.div>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto" />

          </motion.div>
          
          <motion.p
            className="text-xl text-muted-foreground mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}>

            Feel free to reach out through any of the channels below
          </motion.p>

          {/* Enhanced Contact Methods */}
          <div className="flex justify-center">
            <div className="grid gap-8 max-w-lg">
              {contactMethods.map((method, index) =>
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group">

                  <a
                  href={method.href}
                  onClick={(e) => handleContactClick(e, method.href)}
                  className="block p-8 bg-white hover:bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">

                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-black/10 to-transparent group-hover:opacity-10 transition-opacity" />
                    
                    <div className="flex items-center space-x-6 relative z-10">
                      <motion.div
                      className="flex-shrink-0 w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{ rotate: 5 }}>

                        <method.icon className="h-8 w-8" />
                      </motion.div>
                      
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-gray-800 transition-colors">
                          {method.label}
                        </h3>
                        <p className="text-lg text-gray-800 font-medium mb-2 group-hover:text-black transition-colors !whitespace-pre-line">
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-gray-600 transition-colors">
                          {method.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover shine effect */}
                    <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }} />

                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.footer
          className="mt-20 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}>

              <p className="text-muted-foreground">
                © 2024 Aiyan Ahmed. Built with passion and precision.
              </p>
            </motion.div>
            
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}>

              {contactMethods.map((method, index) =>
              <motion.a
                key={method.label}
                href={method.href}
                onClick={(e) => handleContactClick(e, method.href)}
                className="text-muted-foreground hover:text-black transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}>

                  <method.icon className="h-5 w-5" />
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </section>);

}