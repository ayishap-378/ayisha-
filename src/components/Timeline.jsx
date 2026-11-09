import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen, Rocket, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className="py-24 md:py-32 bg-peach-50/40 dark:bg-charcoal-900/40 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-peach-500" />
            <span className="text-xs uppercase tracking-widest font-semibold text-peach-600 dark:text-peach-400">
              Evolution & Growth
            </span>
            <span className="w-6 h-[1px] bg-peach-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 font-normal">
            Learning <span className="italic">Journey</span>
          </h2>
          <p className="mt-3 text-sm text-charcoal-600 dark:text-cream-300/80">
            Chronological milestones of my first-year B.Tech journey, competitive challenges, and technical deep-dives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-peach-300 dark:border-charcoal-700 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Dot on the timeline spine */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-peach-500 border-4 border-cream-50 dark:border-charcoal-900 group-hover:scale-125 transition-transform shadow-sm" />

              {/* Side date on desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold tracking-wider uppercase text-peach-600 dark:text-peach-400 mb-1 md:mb-0 md:text-right md:w-28">
                {item.period}
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-charcoal-800 border border-peach-200/80 dark:border-charcoal-700 shadow-soft-sm hover:shadow-soft transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 dark:text-cream-50">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-peach-100 dark:bg-charcoal-700 text-charcoal-800 dark:text-peach-200 border border-peach-200 dark:border-charcoal-600">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-peach-600 dark:text-peach-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-cream-300/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

