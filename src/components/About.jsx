import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { BookOpen, Award, Compass, Heart, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Animated Number Counter Component
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100
  });

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-serif font-bold text-3xl sm:text-4xl text-charcoal-900 dark:text-cream-50">
      {displayValue}{suffix}
    </span>
  );
}

export default function About() {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-peach-500" />
            <span className="text-xs uppercase tracking-widest font-semibold text-peach-600 dark:text-peach-400">
              Get to Know Me
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 font-normal">
            About <span className="italic">Ayisha P</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 rounded-3xl bg-peach-100/60 dark:bg-charcoal-800/80 border border-peach-200 dark:border-charcoal-700 shadow-soft">
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="w-16 h-16 rounded-2xl object-cover object-[center_20%] border-2 border-peach-300 dark:border-charcoal-600 shadow-sm"
                />
                <div>
                  <h3 className="font-serif text-2xl text-charcoal-900 dark:text-cream-50 leading-tight">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-peach-600 dark:text-peach-400 font-medium mt-0.5">
                    1st Year B.Tech • CSE (AI)
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 dark:text-charcoal-400 mb-1">
                  Academic Affiliation
                </h4>
                <p className="text-sm text-charcoal-700 dark:text-cream-200 leading-relaxed">
                  First-year undergraduate at Thejus Engineering College, Thrissur, affiliated with APJ Abdul Kalam Technological University (KTU).
                </p>
              </div>

              {/* Core Attributes */}
              <div className="space-y-3 pt-4 border-t border-peach-200/80 dark:border-charcoal-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-peach-500 mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-700 dark:text-cream-200">
                    <strong className="font-semibold text-charcoal-900 dark:text-white">Degree:</strong> B.Tech in Computer Science & Engineering (Artificial Intelligence)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-peach-500 mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-700 dark:text-cream-200">
                    <strong className="font-semibold text-charcoal-900 dark:text-white">Institution:</strong> Thejus Engineering College, Thrissur
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-peach-500 mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-700 dark:text-cream-200">
                    <strong className="font-semibold text-charcoal-900 dark:text-white">Current Focus:</strong> Problem Solving, Python, Machine Learning Foundations & React
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-peach-500 mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-charcoal-700 dark:text-cream-200">
                    <strong className="font-semibold text-charcoal-900 dark:text-white">Vision:</strong> Engineering intelligent solutions that make daily life simpler and more accessible
                  </p>
                </div>
              </div>

              {/* Quote card */}
              <div className="mt-8 p-4 rounded-2xl bg-white/80 dark:bg-charcoal-700/80 border border-peach-200/60 dark:border-charcoal-600">
                <p className="font-serif italic text-sm text-charcoal-700 dark:text-cream-200">
                  "Curiosity is the engine of engineering — every algorithm starts with a question."
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-charcoal-600 dark:text-cream-200/85 leading-relaxed font-light">
              {personal.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Interactive Stats Grid */}
            <div className="pt-8">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-charcoal-400 dark:text-charcoal-400 mb-4">
                Milestones & Numbers at a Glance
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-5 rounded-2xl bg-white dark:bg-charcoal-800/80 border border-peach-200/70 dark:border-charcoal-700 text-center shadow-soft-sm hover:shadow-soft transition-all hover:-translate-y-1"
                  >
                    <Counter value={stat.value} />
                    <p className="text-xs sm:text-sm font-semibold text-charcoal-800 dark:text-cream-100 mt-1">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-charcoal-400 dark:text-cream-300/60 mt-0.5">
                      {stat.sublabel}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-sm font-semibold text-peach-600 dark:text-peach-400 hover:text-peach-700 underline underline-offset-8"
              >
                <span>Discover the technologies I work with</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

