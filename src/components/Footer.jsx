import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 bg-cream-100 dark:bg-charcoal-900 border-t border-peach-200/60 dark:border-charcoal-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-peach-200/50 dark:border-charcoal-800">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-block focus:outline-none">
              <span className="font-script text-3xl sm:text-4xl text-charcoal-900 dark:text-cream-50">
                Ayisha P
              </span>
            </a>
            <p className="text-xs sm:text-sm text-charcoal-500 dark:text-cream-300/70 mt-1 max-w-sm">
              Computer Science & Engineering (Artificial Intelligence) • Thejus Engineering College
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-charcoal-600 dark:text-cream-200">
            <a href="#about" className="hover:text-peach-600 dark:hover:text-peach-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-peach-600 dark:hover:text-peach-400 transition-colors">Skills</a>
            <a href="#timeline" className="hover:text-peach-600 dark:hover:text-peach-400 transition-colors">Journey</a>
            <a href="#blog" className="hover:text-peach-600 dark:hover:text-peach-400 transition-colors">Highlights</a>
            <a href="#contact" className="hover:text-peach-600 dark:hover:text-peach-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-white dark:bg-charcoal-800 border border-peach-200 dark:border-charcoal-700 text-charcoal-700 dark:text-cream-100 hover:bg-peach-200 dark:hover:bg-charcoal-700 transition-all shadow-sm hover:-translate-y-1 active:scale-95 group"
            aria-label="Back to top of page"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 dark:text-charcoal-400 gap-4">
          <p>© {new Date().getFullYear()} Ayisha P. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed & engineered with</span>
            <Heart size={13} className="text-peach-500 fill-peach-500" />
            <span>in Kerala, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

