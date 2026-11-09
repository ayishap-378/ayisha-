import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#timeline' },
  { name: 'Highlights', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-cream-50/90 dark:bg-charcoal-900/90 backdrop-blur-md shadow-soft border-b border-peach-200/40 dark:border-charcoal-700/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Script Logo */}
        <a
          href="#home"
          className="group flex items-baseline gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-peach-500 rounded-lg"
          aria-label="Ayisha P Home"
        >
          <span className="font-script text-3xl md:text-4xl text-charcoal-900 dark:text-cream-50 group-hover:text-peach-600 dark:group-hover:text-peach-400 transition-colors">
            Ayisha P
          </span>
          <span className="w-2 h-2 rounded-full bg-peach-500 transition-transform group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-charcoal-800/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-peach-200/50 dark:border-charcoal-700/60 shadow-soft-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-charcoal-900 dark:text-white font-semibold'
                    : 'text-charcoal-600 dark:text-cream-200/70 hover:text-charcoal-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-peach-200/60 dark:bg-charcoal-700 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right action controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-peach-100/80 dark:bg-charcoal-800 text-charcoal-700 dark:text-peach-300 hover:bg-peach-200 dark:hover:bg-charcoal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-peach-500 shadow-sm"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} className="text-peach-400 animate-spin-slow" /> : <Moon size={18} />}
          </button>

          {/* Connect Button (Desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-charcoal-900 dark:text-cream-50 bg-peach-200 hover:bg-peach-300 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 dark:border dark:border-peach-400/30 rounded-full transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Say Hello</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl text-charcoal-800 dark:text-cream-100 hover:bg-peach-100 dark:hover:bg-charcoal-800 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-peach-200/50 dark:border-charcoal-800 bg-cream-50/98 dark:bg-charcoal-900/98 backdrop-blur-xl px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-peach-200/80 dark:bg-charcoal-800 text-charcoal-900 dark:text-peach-300 font-semibold'
                      : 'text-charcoal-700 dark:text-cream-200 hover:bg-peach-100 dark:hover:bg-charcoal-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-xl font-medium bg-peach-400 hover:bg-peach-500 text-charcoal-900 shadow-md text-sm transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

