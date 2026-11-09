import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Calendar } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-cream-50 dark:bg-charcoal-800 rounded-3xl border border-peach-200 dark:border-charcoal-700 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 dark:bg-charcoal-700/80 text-charcoal-800 dark:text-cream-100 hover:bg-peach-200 dark:hover:bg-charcoal-600 transition-colors shadow-sm"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-60 w-full overflow-hidden flex-shrink-0 bg-peach-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-peach-500/90 text-white text-[11px] font-semibold tracking-wider uppercase mb-1">
                {project.year}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">{project.title}</h3>
              <p className="text-xs sm:text-sm text-peach-200">{project.subtitle}</p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-400 dark:text-charcoal-400 mb-2">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-charcoal-700 dark:text-cream-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-400 dark:text-charcoal-400 mb-3">
                  Key Capabilities & Highlights
                </h4>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 dark:text-cream-200">
                      <CheckCircle2 size={16} className="text-peach-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-400 dark:text-charcoal-400 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-peach-100 dark:bg-charcoal-700 text-charcoal-800 dark:text-peach-200 border border-peach-200 dark:border-charcoal-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA Links */}
            <div className="pt-4 border-t border-peach-200/80 dark:border-charcoal-700 flex flex-wrap items-center gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-peach-400 hover:bg-peach-500 text-charcoal-900 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-all"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white dark:bg-charcoal-700 border border-peach-300 dark:border-charcoal-600 text-charcoal-800 dark:text-cream-100 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-peach-50 dark:hover:bg-charcoal-600 transition-all"
                >
                  <Github size={16} />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

