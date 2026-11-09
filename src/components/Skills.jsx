import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  Languages: Code,
  "AI & Machine Learning": Brain,
  "Web Development": Globe,
  "Tools & Platforms": Wrench,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skills.map(s => s.category)];

  const displayedSkills = selectedCategory === "All"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-peach-50/50 dark:bg-charcoal-900/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-peach-500" />
            <span className="text-xs uppercase tracking-widest font-semibold text-peach-600 dark:text-peach-400">
              Technical Competencies
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 font-normal">
            Skills & <span className="italic">Toolbox</span>
          </h2>
          <p className="mt-3 text-base text-charcoal-600 dark:text-cream-300/80 max-w-xl">
            A blend of computer science foundations, machine learning libraries, and modern frontend frameworks I practice with daily.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-charcoal-900 text-white dark:bg-peach-300 dark:text-charcoal-900 shadow-md'
                  : 'bg-white dark:bg-charcoal-800 text-charcoal-600 dark:text-cream-200 border border-peach-200/80 dark:border-charcoal-700 hover:border-peach-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {displayedSkills.map((group, groupIdx) => {
              const Icon = categoryIcons[group.category] || Code;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                  className="p-8 rounded-3xl bg-white dark:bg-charcoal-800 border border-peach-200/80 dark:border-charcoal-700 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-peach-100 dark:border-charcoal-700">
                    <div className="p-3 rounded-2xl bg-peach-100 dark:bg-charcoal-700 text-peach-600 dark:text-peach-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-charcoal-900 dark:text-cream-50">
                        {group.category}
                      </h3>
                      <p className="text-xs text-charcoal-500 dark:text-cream-300/70">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {group.items.map((item, itemIdx) => (
                      <div key={item.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-charcoal-800 dark:text-cream-100 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-peach-500" />
                            {item.name}
                          </span>
                          <span className="text-xs font-mono text-charcoal-500 dark:text-cream-300/70">
                            {item.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-peach-100 dark:bg-charcoal-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: itemIdx * 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-peach-400 to-peach-500 dark:from-peach-400 dark:to-peach-300"
                          />
                        </div>

                        {/* Sub-label note */}
                        <p className="text-[11px] text-charcoal-400 dark:text-charcoal-400">
                          {item.highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

