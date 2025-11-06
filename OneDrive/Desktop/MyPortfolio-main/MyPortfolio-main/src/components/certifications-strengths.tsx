"use client"

import { motion } from "framer-motion"
import { Badge, Award, ExternalLink, CheckCircle, Sparkles, Trophy, Star, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certification {
  title: string
  provider: string
  badge: string
  link?: string
}

interface Strength {
  title: string
  description: string
  icon: React.ReactNode
}

interface CertificationsStrengthsProps {
  certifications?: Certification[]
  strengths?: Strength[]
  className?: string
}

const defaultCertifications: Certification[] = [
  {
    title: "Python Bootcamp",
    provider: "Complete Python Developer Course",
    badge: "Certified",
    link: "#"
  },
  {
    title: "Data Science",
    provider: "Advanced Analytics Program",
    badge: "Certified",
    link: "#"
  },
  {
    title: "Generative AI",
    provider: "Machine Learning Specialization",
    badge: "Certified",
    link: "#"
  },
  {
    title: "AWS with DevOps",
    provider: "Cloud Infrastructure & DevOps",
    badge: "Certified",
    link: "#"
  }
]

const defaultStrengths: Strength[] = [
  {
    title: "Attention to Detail",
    description: "Meticulous focus on accuracy and precision in all tasks",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Decision Making",
    description: "Quick and effective problem-solving under tight deadlines",
    icon: <Badge className="w-6 h-6" />
  },
  {
    title: "Working Under Pressure",
    description: "Thrives in high-stress environments with multiple priorities",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Process-Oriented Mindset",
    description: "Systematic approach to workflow optimization and efficiency",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    title: "Repetitive Tasks",
    description: "Excellence in maintaining quality through routine operations",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Screen-Time Focus",
    description: "Sustained concentration during extended digital work sessions",
    icon: <Trophy className="w-6 h-6" />
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function CertificationsStrengths({
  certifications = defaultCertifications,
  strengths = defaultStrengths,
  className = ""
}: CertificationsStrengthsProps) {
  return (
    <section className={`relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden ${className}`}>
      {/* Enhanced Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/573ca110-310b-4a44-806c-67c597f176b9/generated_images/subtle-network-nodes-and-connections-bac-aa1830ee-20250824094134.jpg")'
        }}
      />

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-black/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              y: [null, -120],
              opacity: [0, 0.5, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-24 space-y-24 relative z-10">
        {/* Enhanced Certifications Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6"
            >
              <Badge className="w-4 h-4" />
              <span className="text-sm font-medium text-black/70">Professional Certifications</span>
            </motion.div>

            <motion.h2 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Certifications
              <motion.div
                className="absolute -top-2 -right-4"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-black/30" />
              </motion.div>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Completed courses and professional certifications that enhance my expertise 
              and demonstrate commitment to continuous learning and skill development.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Zap className="w-8 h-8" />
                </motion.div>

                <div className="text-center space-y-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-black/10 to-black/20 rounded-3xl flex items-center justify-center group-hover:from-black/20 group-hover:to-black/30 transition-all duration-300 shadow-lg"
                  >
                    <Badge className="w-10 h-10 text-black" />
                  </motion.div>
                  
                  <div>
                    <motion.h3 
                      className="font-heading text-xl font-bold mb-3 text-black group-hover:text-gray-800 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {cert.provider}
                    </motion.p>
                    <motion.div 
                      className="inline-flex items-center gap-2 text-black text-sm font-bold bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full border border-gray-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      {cert.badge}
                    </motion.div>
                  </div>

                  {cert.link && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 font-medium"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Core Strengths Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium text-black/70">Core Competencies</span>
            </motion.div>

            <motion.h2 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Core Strengths
              <motion.div
                className="absolute -top-3 -right-6"
                animate={{ 
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Trophy className="w-10 h-10 text-black/30" />
              </motion.div>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Key competencies that drive excellence in every project and collaboration, 
              enabling consistent delivery of high-quality results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-black/10 to-black/20 rounded-2xl flex items-center justify-center group-hover:from-black/20 group-hover:to-black/30 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    >
                      <div className="text-black">
                        {strength.icon}
                      </div>
                    </motion.div>
                    <motion.h3 
                      className="font-heading text-lg font-bold text-black group-hover:text-gray-800 transition-colors flex-1"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {strength.title}
                    </motion.h3>
                  </div>
                  
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed hover:text-gray-800 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {strength.description}
                  </motion.p>
                </div>

                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-black/5 to-transparent rounded-tl-3xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}