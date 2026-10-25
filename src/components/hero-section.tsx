"use client";

import { useState, useEffect } from "react";
import { BarChart3, Database, Brain, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  const [displayedName, setDisplayedName] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const fullName = "Aiyan Ahmed";

  useEffect(() => {
    let currentIndex = 0;
    const typeWriter = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => setShowSubtitle(true), 200);
      }
    }, 80);

    return () => clearInterval(typeWriter);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-full" />


        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/3 right-20 w-24 h-24 bg-accent/20 rounded-lg rotate-12" />


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, rotate: [0, 45, 0] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary rounded-sm" />


        {/* Data visualization elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute top-1/2 left-16 flex space-x-1">

          {[...Array(5)].map((_, i) =>
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{
              height: [`${(i + 1) * 8}px`, `${(i + 1) * 12}px`, `${(i + 1) * 8}px`]
            }}
            transition={{
              duration: 2,
              delay: 1.2 + i * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-3 bg-accent rounded-sm opacity-60" />

          )}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[80vh]">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Name with Typewriter Effect */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold leading-tight text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>

                {displayedName}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-1 h-12 sm:h-16 lg:h-[98px] bg-accent ml-2 align-top" />

              </motion.h1>
              
              {/* Subtitle with Fade-in */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4">

                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium tracking-tight !whitespace-pre-line">Data Analyst & AI-ML, DevOps & Cloud Engineer

                </p>
                <motion.div
                  className="flex flex-wrap items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}>

                  {[
                  { icon: BarChart3, label: "Analytics" },
                  { icon: Database, label: "Data Science" },
                  { icon: Brain, label: "Machine Learning" },
                  { icon: Cloud, label: "Cloud" },
                  { icon: Server, label: "DevOps" }].
                  map((item, index) =>
                  <motion.div
                    key={item.label}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}>

                      <item.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}>

              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/90 hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg rounded-xl font-semibold"
                onClick={() => {
                  const experienceSection = document.getElementById('experience-projects');
                  if (experienceSection) {
                    experienceSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>

                View My Work
              </Button>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end w-full">

            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl shadow-2xl border-4 border-accent/20 overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/me-1762012470306.jpg?width=8000&height=8000&resize=contain"
                  alt="Aiyan Ahmed - Professional Headshot"
                  fill
                  className="object-cover object-center"
                  priority
                  unoptimized />

              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 border-3 border-accent rounded-full shadow-lg" />


              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/80 rounded-lg shadow-xl" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}