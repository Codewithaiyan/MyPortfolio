"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Cloud,
  Shield,
  Server,
  Database,
  Lock,
  Activity,
  Sparkles,
  ArrowRight,
  Zap,
  Award
} from 'lucide-react';

interface ProjectItemProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  icon: React.ReactNode;
}

function ProjectItem({
  index,
  title,
  subtitle,
  description,
  technologies,
  outcomes,
  icon
}: ProjectItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="relative">

      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-200 hover:shadow-3xl hover:border-gray-300 transition-all duration-500 relative overflow-hidden group"
        whileHover={{ y: -8, scale: 1.02 }}>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,0,0,0.02)_49%,rgba(0,0,0,0.02)_51%,transparent_52%)]" style={{ backgroundSize: "15px 15px" }} />
        </div>

        {/* Floating decoration */}
        <motion.div
          className="absolute top-6 right-6 opacity-10"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}>
          <Zap className="w-10 h-10" />
        </motion.div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-black/10 to-black/20 rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:from-black/20 group-hover:to-black/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={isInView ? { scale: [0.8, 1.1, 1] } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}>
            {icon}
          </motion.div>
          <div className="flex-1">
            <motion.span
              className="inline-block bg-gradient-to-r from-black to-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.15 + 0.2, type: "spring" }}>
              ☁️ Cloud & DevOps Project
            </motion.span>
            <motion.h3
              className="font-heading text-2xl font-bold text-black leading-tight group-hover:text-gray-800 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.15 + 0.4 }}>
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-600 font-semibold mt-1"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.15 + 0.5 }}>
              {subtitle}
            </motion.p>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-gray-700 mb-6 leading-relaxed text-lg relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 0.7 }}>
          {description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="mb-6 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 1 }}>
          <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) =>
              <motion.span
                key={idx}
                className="bg-gradient-to-r from-gray-100 to-gray-200 text-black text-xs font-medium px-3 py-1.5 rounded-full border border-gray-300 hover:from-black hover:to-gray-700 hover:text-white transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.15 + 1.1 + idx * 0.05, type: "spring" }}>
                {tech}
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 1.2 }}>
          <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {outcomes.map((outcome, idx) =>
              <motion.li
                key={idx}
                className="text-sm text-gray-700 flex items-start gap-3 hover:text-black transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.15 + 1.3 + idx * 0.1 }}>
                <ArrowRight className="text-black mt-0.5 w-3 h-3 flex-shrink-0" />
                <span className="flex-1">{outcome}</span>
              </motion.li>
            )}
          </ul>
        </motion.div>

        {/* Hover shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8 }} />

      </motion.div>
    </motion.div>
  );
}

export default function CloudDevOpsProjects() {
  const projects: ProjectItemProps[] = [
    {
      index: 0,
      title: 'Vulnerability Tracker',
      subtitle: 'Cloud-Native Security Platform',
      description: 'Developed full-stack vulnerability management system deployed on AWS, processing security tickets for development teams',
      technologies: ['Node.js', 'Express', 'DynamoDB', 'EC2', 'S3', 'ALB', 'JWT', 'PM2', 'CloudWatch'],
      outcomes: [
        'Implemented role-based authentication system (Manager/Member roles) with secure JWT token management and password hashing',
        'Architected scalable AWS infrastructure using EC2 instances behind Application Load Balancer with DynamoDB data storage',
        'Built file upload functionality using S3 preassigned URLs for screenshot evidence storage and retrieval',
        'Configured production environment with PM2 process management, CloudWatch monitoring, and automated health checks',
        'Applied security best practices including VPC network isolation, IAM roles, and encrypted data transmission'
      ],
      icon: <Shield className="w-8 h-8" />
    },
    {
      index: 1,
      title: 'SecurePipe',
      subtitle: 'Supply Chain Security Implementation',
      description: 'Architected and deployed secure software supply chain solution addressing vulnerabilities similar to SolarWinds and Log4j incidents',
      technologies: ['Sigstore Cosign', 'Kubernetes', 'OPA Gatekeeper', 'Docker', 'SBOM', 'Admission Webhooks', 'Cryptographic Signing'],
      outcomes: [
        'Implemented cryptographic signing and verification pipeline using Sigstore Cosign, ensuring tamper-proof container deployments',
        'Built Kubernetes admission webhooks with policy enforcement (OPA Gatekeeper) to validate image signatures at runtime before pod creation',
        'Generated comprehensive SBOMs and vulnerability reports, establishing audit trail for compliance requirements (SOC2, ISO 27001)',
        'Created production-ready security framework demonstrating enterprise-grade DevSecOps practices on self-managed infrastructure'
      ],
      icon: <Lock className="w-8 h-8" />
    }
  ];

  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: "-200px" });

  return (
    <section id="cloud-devops-projects" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) =>
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black/15 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -80],
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }} />
        )}
      </div>
      
      <div className="container max-w-6xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isContainerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6">
            <Cloud className="w-4 h-4" />
            <span className="text-sm font-medium text-black/70">Infrastructure & Security</span>
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Cloud & DevOps Projects
            <motion.div
              className="absolute -top-3 -right-6"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}>
              <Server className="w-10 h-10 text-black/30" />
            </motion.div>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            Full-stack cloud infrastructure projects showcasing AWS deployment, security implementation, and DevOps practices.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) =>
            <ProjectItem key={project.index} {...project} />
          )}
        </div>
      </div>
    </section>
  );
}