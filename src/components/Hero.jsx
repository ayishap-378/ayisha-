import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, MapPin, GraduationCap, Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Code2: Code2
};

export default function Hero() {
  const { personal, socials } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:py-36 flex items-center justify-center overflow-hidden">
      {/* Subtle organic background ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-peach-200/30 dark:bg-peach-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-peach-300/20 dark:bg-charcoal-700/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Overlapping Content Card (Left & Center) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 z-10 lg:-mr-12"
          >
            {/* Elegant Peach Card */}
            <motion.div
              variants={itemVariants}
              className="bg-peach-100/90 dark:bg-charcoal-800/95 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-3xl border border-peach-300/60 dark:border-charcoal-700 shadow-soft-lg"
            >
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-charcoal-700/80 border border-peach-300/50 dark:border-charcoal-600 text-xs font-semibold text-charcoal-700 dark:text-peach-200 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Summer 2027 Internships</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 dark:text-cream-50 font-medium leading-[1.15] tracking-tight mb-5">
                Hi, I'm <span className="italic font-normal text-peach-600 dark:text-peach-300">Ayisha</span>.<br />
                I build intelligent things.
              </h1>

              {/* Short Tagline & Bio */}
              <p className="text-base sm:text-lg text-charcoal-600 dark:text-cream-200/80 font-normal leading-relaxed mb-6 max-w-xl">
                {personal.shortBio}
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-charcoal-500 dark:text-cream-300/70 mb-8 pb-6 border-b border-peach-200/60 dark:border-charcoal-700">
                <div className="flex items-center gap-1.5">
                  <GraduationCap size={16} className="text-peach-500" />
                  <span>Thejus Engineering College</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-peach-500" />
                  <span>Thrissur, Kerala</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-full bg-charcoal-900 text-cream-50 dark:bg-peach-400 dark:text-charcoal-900 font-medium text-sm inline-flex items-center gap-2 hover:bg-charcoal-800 dark:hover:bg-peach-300 transition-all shadow-md hover:shadow-lg active:scale-95 group"
                >
                  <span>View Projects</span>
                  <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white dark:bg-charcoal-700 border border-peach-300 dark:border-charcoal-600 text-charcoal-800 dark:text-cream-50 font-medium text-sm inline-flex items-center gap-2 hover:bg-peach-50 dark:hover:bg-charcoal-600 transition-all shadow-sm active:scale-95"
                >
                  <Download size={16} className="text-peach-500" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-wider text-charcoal-400 dark:text-charcoal-500 mr-2">
                  Connect:
                </span>
                {socials.map((social) => {
                  const Icon = iconMap[social.icon] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white dark:bg-charcoal-700 border border-peach-200/80 dark:border-charcoal-600 text-charcoal-700 dark:text-cream-200 hover:text-peach-600 dark:hover:text-peach-300 hover:border-peach-400 transition-all hover:scale-110 shadow-sm"
                      aria-label={`Ayisha's ${social.name}`}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Showcase (Right Side) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-[420px]">
              {/* Decorative Background Accent Shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-peach-300/60 to-peach-100/40 dark:from-peach-900/30 dark:to-charcoal-800 rounded-[2.5rem] -rotate-3 transform -z-10" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] border-2 border-white dark:border-charcoal-700 shadow-soft-lg bg-peach-200 aspect-[4/5]">
                <img
                  src={personal.avatarUrl}
                  alt="Ayisha P - Computer Science (AI) Student"
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-script text-2xl text-peach-200">Ayisha P</p>
                  <p className="text-xs text-white/90 font-light">Computer Science Engineering (AI)</p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white/95 dark:bg-charcoal-800/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-peach-300/80 dark:border-charcoal-600 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 rounded-lg bg-peach-100 dark:bg-charcoal-700 text-peach-600 dark:text-peach-300">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-charcoal-400 dark:text-charcoal-400">Specialization</p>
                  <p className="text-xs font-bold text-charcoal-800 dark:text-cream-100">Artificial Intelligence</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-4 bg-white/95 dark:bg-charcoal-800/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-peach-300/80 dark:border-charcoal-600 shadow-lg flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-peach-200 dark:bg-charcoal-700 flex items-center justify-center text-peach-600 dark:text-peach-300 font-serif font-bold text-sm">
                  1st
                </div>
                <div>
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-charcoal-400">Academic Standing</p>
                  <p className="text-xs font-bold text-charcoal-800 dark:text-cream-100">Year Student • Thejus</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

