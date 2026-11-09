import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Blog() {
  const { articles } = portfolioData;

  return (
    <section id="blog" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-peach-500" />
              <span className="text-xs uppercase tracking-widest font-semibold text-peach-600 dark:text-peach-400">
                Writings & Thoughts
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 font-normal">
              Insights & <span className="italic">Highlights</span>
            </h2>
          </div>
          <p className="text-sm text-charcoal-500 dark:text-cream-300/80 max-w-md">
            Articles and personal notes exploring what I learn in computer science, machine learning, and university engineering life.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 rounded-3xl bg-white dark:bg-charcoal-800 border border-peach-200/80 dark:border-charcoal-700 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-charcoal-400 dark:text-charcoal-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 dark:text-cream-50 group-hover:text-peach-600 dark:group-hover:text-peach-400 transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-cream-300/80 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-peach-100/70 dark:bg-charcoal-700 text-charcoal-600 dark:text-peach-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-peach-100 dark:border-charcoal-700 flex items-center justify-between">
                <a
                  href={article.link}
                  className="text-xs font-semibold text-charcoal-800 dark:text-cream-100 group-hover:text-peach-600 dark:group-hover:text-peach-400 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

