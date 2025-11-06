"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, Sparkles, BookOpen, Target } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  percentage: number;
}

const educationData: EducationItem[] = [
{
  institution: "Lords Institute of Engineering and Technology, Hyderabad",
  degree: "Bachelor of Engineering in Computer Science",
  duration: "2021 - 2025",
  score: "7.0 CGPA",
  percentage: 70
},
{
  institution: "S't Mary's Junior collage",
  degree: "Class XII - Science Stream",
  duration: "2020 - 2021",
  score: "56.0%",
  percentage: 56.0
},
{
  institution: "S't Marks Boys town high school",
  degree: "Class X",
  duration: "2018 - 2019",
  score: "6.8 GPA",
  percentage: 68.0
}];


const ProgressBar = ({ percentage, inView }: {percentage: number;inView: boolean;}) =>
<div className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
    <motion.div
    className="bg-gradient-to-r from-black via-gray-800 to-black h-3 rounded-full relative overflow-hidden shadow-lg"
    initial={{ width: 0 }}
    animate={{ width: inView ? `${percentage}%` : 0 }}
    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}>

      {/* Shimmer effect */}
      <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{ x: [-100, 200] }}
      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }} />

    </motion.div>
    {/* Percentage indicator */}
    <motion.div
    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-black/70"
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ delay: 2.5 }}>

      {percentage}%
    </motion.div>
  </div>;


const AnimatedText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const text = "I'm passionate about transforming raw data into actionable insights that drive strategic decision-making. With expertise in data analytics, machine learning, and AI-driven solutions, I thrive on uncovering patterns and trends that help businesses make informed choices. Other than that i am also an AWS Cloud Engineer with hands-on experience designing and deploying production-ready applications on AWS infrastructure. Demonstrated proficiency in core AWS services through real-world project implementation. Strong foundation in cloud architecture, security best practices, and DevOps principles with expertise in Linux administration, and infrastructure automation. Passionate about building scalable, secure cloud solutions and eager to contribute to enterprise cloud transformation initiatives.";

  const words = text.split(" ");

  return (
    <div ref={ref} className="space-y-1 relative">
      {/* Decorative quote marks */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-4 -left-4 text-6xl font-serif text-black/20">

        "
      </motion.div>
      
      <div className="relative z-10">
        {words.map((word, index) =>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: index * 0.03,
            ease: "easeOut"
          }}
          className="inline-block mr-1 hover:text-black transition-colors duration-200">

            {word}
          </motion.span>
        )}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -bottom-4 -right-4 text-6xl font-serif text-black/20">

        "
      </motion.div>
    </div>);

};

const EducationCard = ({ item, index }: {item: EducationItem;index: number;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="relative pl-8">

      {/* Enhanced Timeline connector */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <motion.div
          className="w-6 h-6 bg-gradient-to-br from-black to-gray-700 rounded-full border-4 border-white shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.2 }}
          animate={isInView ? { scale: [0.8, 1.1, 1] } : { scale: 0.8 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}>

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />

        </motion.div>
        {index < educationData.length - 1 &&
        <motion.div
          className="w-1 bg-gradient-to-b from-black to-gray-400 h-32 mt-2 rounded-full shadow-sm"
          initial={{ height: 0 }}
          animate={isInView ? { height: 128 } : { height: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }} />

        }
      </div>

      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-gray-300 ml-4 relative overflow-hidden group transition-all duration-300"
        whileHover={{ y: -5, scale: 1.02 }}>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
        </div>
        
        {/* Floating decoration */}
        <motion.div
          className="absolute top-4 right-4 opacity-10"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}>

          <BookOpen className="w-8 h-8" />
        </motion.div>

        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className="flex-1">
            <motion.h3
              className="font-heading text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}>

              {item.institution}
            </motion.h3>
            <motion.p
              className="text-gray-600 text-sm mb-3 font-medium !whitespace-pre-line"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 0.4 }}>

              {item.degree}
            </motion.p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <motion.div
                className="flex items-center gap-2 hover:text-black transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.2 + 0.5 }}>

                <Calendar className="w-4 h-4" />
                <span className="font-medium">{item.duration}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 hover:text-black transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.2 + 0.6 }}>

                <Award className="w-4 h-4" />
                <span className="font-bold text-black">{item.score}</span>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="p-3 bg-black/10 rounded-xl group-hover:bg-black/20 transition-colors"
            whileHover={{ rotate: 15, scale: 1.1 }}>

            <GraduationCap className="w-8 h-8 text-black" />
          </motion.div>
        </div>
        
        <motion.div
          className="space-y-3 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.2 + 0.7 }}>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 font-medium">Academic Performance</span>
            <motion.span
              className="font-bold text-black bg-gray-100 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}>

              {item.score}
            </motion.span>
          </div>
          <ProgressBar percentage={item.percentage} inView={isInView} />
        </motion.div>

        {/* Hover shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8 }} />

      </motion.div>
    </motion.div>);

};

export default function AboutEducation() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.2 });
  const educationInView = useInView(educationRef, { once: true, threshold: 0.1 });

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Enhanced Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/573ca110-310b-4a44-806c-67c597f176b9/generated_images/abstract-gradient-background-with-flowin-0a584968-20250824094124.jpg")'
        }} />

      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-black/10 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            y: [null, -50],
            opacity: [0, 0.3, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }} />

        )}
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Enhanced About Me Section */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20">

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6">

              <Target className="w-4 h-4" />
              <span className="text-sm font-medium text-black/70">About Me</span>
            </motion.div>
            
            <motion.h2
              className="font-heading text-4xl lg:text-5xl font-bold text-black mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}>

              Transforming Data into
              <span className="block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                Strategic Insights
              </span>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}>

                <Sparkles className="w-6 h-6 text-black/30" />
              </motion.div>
            </motion.h2>
          </div>

          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-200 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}>

            <div className="text-lg leading-relaxed text-gray-700 relative z-10">
              <AnimatedText />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-5">
              <div className="w-32 h-32 border-2 border-black rounded-full" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <div className="w-24 h-24 bg-black/10 rounded-lg rotate-12" />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={educationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6">

              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium text-black/70">Education Journey</span>
            </motion.div>
            
            <motion.h2
              className="font-heading text-4xl lg:text-5xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}>

              Academic Excellence
            </motion.h2>
          </div>
          
          <div className="space-y-12">
            {educationData.map((item, index) =>
            <EducationCard key={index} item={item} index={index} />
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}