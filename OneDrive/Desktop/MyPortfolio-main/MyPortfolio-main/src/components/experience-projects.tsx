"use client";

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {
  BrainCircuit,
  TrendingUp,
  Database,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  Zap } from
'lucide-react';

interface TimelineItemProps {
  index: number;
  type: 'experience' | 'project';
  title: string;
  organization?: string;
  location?: string;
  period: string;
  description: string;
  technologies?: string[];
  metrics?: {label: string;value: string;}[];
  outcomes?: string[];
  icon: React.ReactNode;
}

function TimelineCard({
  index,
  type,
  title,
  organization,
  location,
  period,
  description,
  technologies,
  metrics,
  outcomes,
  icon
}: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[85vw] md:w-[550px] lg:w-[650px]">

      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200 hover:shadow-3xl hover:border-gray-300 transition-all duration-500 relative overflow-hidden group h-full"
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
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}>
            {icon}
          </motion.div>
          <div className="flex-1">
            <motion.span
              className="inline-block bg-gradient-to-r from-black to-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}>
              {type === 'experience' ? '💼 Work Experience' : '🎯 Academic Project'}
            </motion.span>
            <motion.h3
              className="font-heading text-2xl font-bold text-black leading-tight group-hover:text-gray-800 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.1 + 0.4 }}>
              {title}
            </motion.h3>
            {organization &&
            <motion.div
              className="flex items-center gap-2 mt-2 text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.1 + 0.5 }}>
                <span className="font-semibold">{organization}</span>
                {location &&
              <>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{location}</span>
                  </>
              }
              </motion.div>
            }
            <motion.div
              className="flex items-center gap-2 mt-1 text-gray-500"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.1 + 0.6 }}>
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{period}</span>
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.1 + 0.7 }}>
          {description}
        </motion.p>

        {/* Metrics */}
        {metrics &&
        <motion.div
          className="flex flex-wrap gap-4 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.1 + 0.8 }}>
            {metrics.map((metric, idx) =>
          <motion.div
            key={idx}
            className="text-center bg-gradient-to-br from-black to-gray-700 text-white px-4 py-3 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.1 + 0.9 + idx * 0.1, type: "spring" }}>
                <div className="text-xl font-bold">{metric.value}</div>
                <div className="text-xs opacity-90 mt-1">{metric.label}</div>
              </motion.div>
          )}
          </motion.div>
        }

        {/* Technologies */}
        {technologies &&
        <motion.div
          className="mb-6 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.1 + 1 }}>
            <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) =>
            <motion.span
              key={idx}
              className="bg-gradient-to-r from-gray-100 to-gray-200 text-black text-xs font-medium px-3 py-1.5 rounded-full border border-gray-300 hover:from-black hover:to-gray-700 hover:text-white transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 1.1 + idx * 0.05, type: "spring" }}>
                  {tech}
                </motion.span>
            )}
            </div>
          </motion.div>
        }

        {/* Outcomes */}
        {outcomes &&
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.1 + 1.2 }}>
            <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Key Outcomes
            </h4>
            <ul className="space-y-2">
              {outcomes.map((outcome, idx) =>
            <motion.li
              key={idx}
              className="text-sm text-gray-700 flex items-start gap-3 hover:text-black transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.1 + 1.3 + idx * 0.1 }}>
                  <ArrowRight className="text-black mt-0.5 w-3 h-3 flex-shrink-0" />
                  <span className="flex-1">{outcome}</span>
                </motion.li>
            )}
            </ul>
          </motion.div>
        }

        {/* Hover shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8 }} />

      </motion.div>
    </motion.div>);
}

export default function ExperienceProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const timelineItems: TimelineItemProps[] = [
  {
    index: 0,
    type: 'experience',
    title: 'Data Analyst Intern',
    organization: 'Full Stack Academy',
    location: "On-Site",
    period: 'June 2024 - August 2024',
    description: 'Led comprehensive analysis of Netflix content dataset, developing interactive visualizations and data-driven insights for content strategy recommendations. Collaborated with cross-functional teams to identify trends in streaming content and user preferences.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'SQL'],
    metrics: [
    { label: 'Movies Analyzed', value: '4,265' },
    { label: 'TV Shows', value: '1,969' },
    { label: 'Data Points', value: '50K+' }],
    outcomes: [
    'Identified key content trends across 190+ countries',
    'Created automated reporting pipeline reducing analysis time by 60%',
    'Presented findings to stakeholder team of 15+ members'],
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    index: 1,
    type: 'project',
    title: 'Deep Learning Multimodal Biometric Recognition System',
    period: 'September 2023 - December 2023',
    description: 'Developed an advanced biometric authentication system combining facial recognition, fingerprint analysis, and voice recognition using deep learning techniques. Implemented ensemble methods to achieve superior accuracy and security.',
    technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'CNN', 'RNN', 'Python', 'Keras'],
    outcomes: [
    'Achieved 97.3% accuracy across all biometric modalities',
    'Reduced false positive rate by 45% compared to single-modal systems',
    'Implemented real-time processing with sub-second authentication'],
    icon: <BrainCircuit className="w-8 h-8" />
  },
  {
    index: 2,
    type: 'project',
    title: 'Bank Loan Default Prediction Analysis',
    period: 'March 2024 - May 2024',
    description: 'Built machine learning models to predict loan default risk using historical banking data. Performed extensive feature engineering and model optimization to support risk assessment decisions.',
    technologies: ['Scikit-learn', 'XGBoost', 'Random Forest', 'Pandas', 'NumPy', 'Plotly'],
    metrics: [
    { label: 'Loan Records', value: '10K+' },
    { label: 'Features Analyzed', value: '25' },
    { label: 'Model Accuracy', value: '89.2%' }],
    outcomes: [
    'Identified top 5 risk factors contributing to loan defaults',
    'Developed scoring algorithm with 89.2% prediction accuracy',
    'Created interactive dashboard for risk assessment visualization'],
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    index: 3,
    type: 'project',
    title: 'Student Exam Score Predictor',
    period: 'January 2024 - March 2024',
    description: 'Built an ML model to predict students\' exam scores based on study habits, attendance, sleep hours, and past scores. Applied comprehensive data preprocessing, exploratory data analysis, and multiple regression techniques with cross-validation.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'EDA', 'Linear Regression', 'Decision Tree'],
    metrics: [
    { label: 'R² Score', value: '0.75' },
    { label: 'Model Type', value: 'Regression' },
    { label: 'Features', value: '5+' }],
    outcomes: [
    'Achieved R² = 0.75 and low MSE after cleaning, visualizing, and transforming raw data',
    'Handled missing values, capped outliers, and evaluated models with cross-validation',
    'Generated predictions for new data points',
    'Applied EDA techniques to identify key predictors of student performance'],
    icon: <Database className="w-8 h-8" />
  }];

  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: "-200px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calculate scroll amount based on viewport width to match card size
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      const cardWidth = isMobile 
        ? window.innerWidth * 0.85  // 85vw for mobile (w-[85vw])
        : isTablet 
          ? 550  // md:w-[550px]
          : 650; // lg:w-[650px]
      
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="experience-projects" className="relative py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Enhanced Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/573ca110-310b-4a44-806c-67c597f176b9/generated_images/abstract-gradient-background-with-flowin-0a584968-20250824094124.jpg")'
        }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) =>
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
      
      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isContainerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium text-black/70">Professional Journey</span>
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Experience & Projects
            <motion.div
              className="absolute -top-3 -right-6"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}>
              <Sparkles className="w-10 h-10 text-black/30" />
            </motion.div>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            A timeline of professional experience and academic projects showcasing 
            data analysis, machine learning, and software development expertise with measurable impact.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
              aria-label="Scroll left">
              <ChevronLeft className="w-6 h-6 text-black" />
            </motion.button>
          )}
          
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
              aria-label="Scroll right">
              <ChevronRight className="w-6 h-6 text-black" />
            </motion.button>
          )}

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 pl-6 pr-[50vw] md:pl-8 md:pr-[200px]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {timelineItems.map((item) =>
              <div key={item.index} className="snap-center">
                <TimelineCard {...item} />
              </div>
            )}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {timelineItems.map((_, idx) =>
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                style={{
                  backgroundColor: canScrollLeft || idx === 0 ? 'rgb(31, 41, 55)' : 'rgb(209, 213, 219)'
                }} />
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>);
}