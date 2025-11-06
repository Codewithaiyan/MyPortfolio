"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Code,
  Database,
  BarChart3,
  PieChart,
  Wrench,
  Github,
  Terminal,
  FileSpreadsheet,
  Monitor,
  Cloud,
  Sparkles,
  TrendingUp,
  Zap } from
'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{className?: string;}>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: React.ComponentType<{className?: string;}>;
}

const skillsData: SkillCategory[] = [
{
  title: "Programming & Databases",
  icon: Code,
  skills: [
  { name: "Python", level: 90, icon: Terminal },
  { name: "SQL", level: 85, icon: Database },
  { name: "JavaScript", level: 80, icon: Code }]

},
{
  title: "Data Analytics & Visualization",
  icon: PieChart,
  skills: [
  { name: "Power BI", level: 95, icon: BarChart3 },
  { name: "Tableau", level: 88, icon: PieChart },
  { name: "Excel", level: 92, icon: FileSpreadsheet },
  { name: "Matplotlib", level: 85, icon: BarChart3 },
  { name: "Plotly", level: 80, icon: PieChart },
  { name: "Seaborn", level: 83, icon: BarChart3 }]

},
{
  title: "Tools & Technologies",
  icon: Wrench,
  skills: [
  { name: "Git", level: 88, icon: Github },
  { name: "Docker", level: 75, icon: Monitor },
  { name: "AWS", level: 70, icon: Cloud },
  { name: "Terraform", level: 90, icon: Terminal },
  { name: "Kubernetes", level: 95, icon: Code },
  { name: "Linux", level: 82, icon: Terminal }]

}];


interface ProgressBarProps {
  skill: Skill;
  delay: number;
  inView: boolean;
}

function ProgressBar({ skill, delay, inView }: ProgressBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const IconComponent = skill.icon;

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="space-y-3 group">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="p-2 bg-black/10 rounded-lg group-hover:bg-black/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}>

            <IconComponent className="h-4 w-4 text-black" />
          </motion.div>
          <span className="text-sm font-semibold text-black group-hover:text-gray-800 transition-colors !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
            {skill.name}
          </span>
        </div>
        <motion.span
          className="text-xs font-bold text-black bg-gray-100 px-2 py-1 rounded-full"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: (delay + 500) / 1000, type: "spring" }}>

          {skill.level}%
        </motion.span>
      </div>
      <div className="relative h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-black via-gray-700 to-black rounded-full relative overflow-hidden shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${animatedLevel}%` : 0 }}
          transition={{
            duration: 1.5,
            delay: delay / 1000,
            ease: "easeOut"
          }}>

          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: [-100, 200] }}
            transition={{
              duration: 2,
              delay: (delay + 1000) / 1000,
              ease: "easeInOut"
            }} />

          
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

        </motion.div>
        
        {/* Skill level indicator dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full shadow-lg border border-white"
          initial={{ left: 0 }}
          animate={{ left: inView ? `${animatedLevel}%` : 0 }}
          transition={{
            duration: 1.5,
            delay: delay / 1000,
            ease: "easeOut"
          }}
          style={{ transform: 'translateX(-50%) translateY(-50%)' }} />

      </div>
    </motion.div>);

}

interface SkillCategoryCardProps {
  category: SkillCategory;
  delay: number;
}

function SkillCategoryCard({ category, delay }: SkillCategoryCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl hover:border-gray-300 transition-all duration-500 group relative overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,0,0,0.02)_49%,rgba(0,0,0,0.02)_51%,transparent_52%)]" style={{ backgroundSize: "20px 20px" }} />
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
        }}>

        <Zap className="w-8 h-8" />
      </motion.div>

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <motion.div
          className="p-4 bg-gradient-to-br from-black/10 to-black/20 rounded-2xl group-hover:from-black/20 group-hover:to-black/30 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={isInView ? { scale: [0.8, 1.1, 1] } : { scale: 0.8 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}>

          <IconComponent className="h-8 w-8 text-black" />
        </motion.div>
        <div>
          <motion.h3
            className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: delay + 0.1 }}>

            {category.title}
          </motion.h3>
          <motion.div
            className="flex items-center gap-2 mt-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.3 }}>

            <TrendingUp className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">Professional Level</span>
          </motion.div>
        </div>
      </div>
      
      <div className="space-y-6 relative z-10">
        {category.skills.map((skill, index) =>
        <ProgressBar
          key={skill.name}
          skill={skill}
          delay={delay * 1000 + index * 200}
          inView={isInView} />

        )}
      </div>

      {/* Hover shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8 }} />


      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-black/5 to-transparent rounded-bl-3xl" />
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-black/5 to-transparent rounded-tr-3xl" />
    </motion.div>);

}

export default function TechnicalSkills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/573ca110-310b-4a44-806c-67c597f176b9/generated_images/subtle-professional-background-pattern-f-455ed22d-20250824094114.jpg")'
        }} />

      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-black/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.4, 0],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }} />

        )}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6">

            <Code className="w-4 h-4" />
            <span className="text-sm font-medium text-black/70">Technical Expertise</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}>

            Technical Skills
            <motion.div
              className="absolute -top-2 -right-4"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}>

              <Sparkles className="w-8 h-8 text-black/30" />
            </motion.div>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}>

            A comprehensive overview of my technical expertise across programming, 
            data analytics, and modern development tools with years of hands-on experience.
          </motion.p>

          {/* Stats indicators */}
          <motion.div
            className="flex justify-center gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}>

            {[
            { label: "Technologies", value: "18+" },
            { label: "Years Experience", value: "3+" },
            { label: "Projects", value: "25+" }].
            map((stat, index) =>
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}>

                <div className="text-2xl font-bold text-black">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) =>
          <SkillCategoryCard
            key={category.title}
            category={category}
            delay={index * 0.2} />

          )}
        </div>
      </div>
    </section>);

}