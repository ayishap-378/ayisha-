import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { useLenis } from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  useLenis();

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-charcoal-900 text-charcoal-900 dark:text-cream-50 font-sans selection:bg-peach-300 selection:text-charcoal-900 transition-colors duration-300">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Desktop Mouse Follower */}
      <CustomCursor />

      {/* Fixed Sticky Header Navbar */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

