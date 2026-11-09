import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('All');

  // Collect unique tags
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))].slice(0, 7);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-peach-500" />
              <span className="text-xs uppercase tracking-widest font-semibold text-peach-600 dark:text-peach-400">
                Featured Work
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 font-normal">
              Curated <span className="italic">Projects</span>
            </h2>
          </div>
          <p className="text-sm text-charcoal-500 dark:text-cream-300/80 max-w-md">
            Prototypes and web apps bridging Artificial Intelligence, clean algorithmic problem solving, and modern UI engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === tag
                  ? 'bg-charcoal-900 text-cream-50 dark:bg-peach-300 dark:text-charcoal-900 shadow-sm'
                  : 'bg-white dark:bg-charcoal-800 text-charcoal-600 dark:text-cream-200 border border-peach-200 dark:border-charcoal-700 hover:border-peach-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-white dark:bg-charcoal-800 border border-peach-200/90 dark:border-charcoal-700 shadow-soft hover:shadow-soft-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-64 overflow-hidden bg-peach-100 dark:bg-charcoal-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-charcoal-800/90 backdrop-blur-md text-charcoal-800 dark:text-cream-100 shadow-sm">
                    {project.year}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-peach-400 text-charcoal-900 shadow-sm flex items-center gap-1">
                      <Sparkles size={11} />
                      Featured
                    </span>
                  )}
                </div>

                {/* Quick Quickview Button on Hover */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-charcoal-800/90 text-charcoal-800 dark:text-cream-100 backdrop-blur-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                  aria-label={`View details for ${project.title}`}
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-peach-600 dark:text-peach-400">
                      {project.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-50 mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-charcoal-600 dark:text-cream-300/80 line-clamp-3 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-peach-100/70 dark:bg-charcoal-700 text-charcoal-700 dark:text-peach-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links Bar */}
                <div className="pt-4 border-t border-peach-100 dark:border-charcoal-700 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-semibold text-charcoal-800 dark:text-cream-100 hover:text-peach-600 dark:hover:text-peach-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Details & Architecture</span>
                    <span>→</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-peach-100 dark:hover:bg-charcoal-700 text-charcoal-600 dark:text-cream-200 transition-colors"
                        aria-label="View source on GitHub"
                      >
                        <Github size={17} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-peach-100 dark:hover:bg-charcoal-700 text-charcoal-600 dark:text-cream-200 transition-colors"
                        aria-label="Open live demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for In-depth view */}
        <ProjectModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}

