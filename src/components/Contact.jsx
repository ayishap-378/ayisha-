import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin, Sparkles, Github, Linkedin, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Code2: Code2
};

export default function Contact() {
  const { personal, contact, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#F1D1BD', '#DE9F7E', '#C77D57', '#FAF1EB']
        });
      } catch (e) {
        // Safe fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-peach-50/50 dark:bg-charcoal-900/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-peach-500" />
            <span className="text-xs uppercase tracking-widest font-semibold text-peach-600 dark:text-peach-400">
              Get in Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 font-normal">
            Start a <span className="italic">Conversation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 dark:text-cream-50 mb-3">
                {contact.heading}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-600 dark:text-cream-300/80 leading-relaxed mb-6">
                {contact.subheading}
              </p>

              {/* Status Pill */}
              <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-800 border border-peach-200 dark:border-charcoal-700 shadow-soft-sm flex items-start gap-3">
                <Sparkles size={18} className="text-peach-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-charcoal-700 dark:text-cream-200">
                  {contact.status}
                </p>
              </div>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-peach-100/70 dark:bg-charcoal-800 border border-peach-200 dark:border-charcoal-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-full bg-peach-300/60 dark:bg-charcoal-700 text-peach-700 dark:text-peach-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400">Direct Email</p>
                  <p className="text-sm font-bold text-charcoal-900 dark:text-cream-50 font-mono">{personal.email}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full mt-2 py-2 px-4 rounded-xl bg-white dark:bg-charcoal-700 border border-peach-300 dark:border-charcoal-600 text-charcoal-800 dark:text-cream-100 text-xs font-semibold inline-flex items-center justify-center gap-2 hover:bg-peach-50 dark:hover:bg-charcoal-600 transition-all active:scale-98"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span>Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & College details */}
            <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-300/80">
              <MapPin size={18} className="text-peach-500 flex-shrink-0" />
              <span>{personal.college} • {contact.location}</span>
            </div>

            {/* Social channels */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-3">
                Connect Across Platforms
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white dark:bg-charcoal-800 border border-peach-200 dark:border-charcoal-700 text-charcoal-700 dark:text-cream-200 hover:text-peach-600 dark:hover:text-peach-300 hover:border-peach-400 hover:scale-110 transition-all shadow-sm"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-charcoal-800 border border-peach-200/90 dark:border-charcoal-700 shadow-soft">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-peach-100 dark:bg-charcoal-700 text-peach-600 dark:text-peach-300 mx-auto flex items-center justify-center">
                    <Check size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-50">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300/80 max-w-sm mx-auto">
                    Your message has been received. Ayisha will get back to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-peach-200 hover:bg-peach-300 text-charcoal-900 text-xs font-semibold transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 dark:text-cream-200 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Nair"
                        className={`w-full px-4 py-3 rounded-2xl bg-cream-50 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-cream-50 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                            : 'border-peach-200 dark:border-charcoal-700 focus:border-peach-500 focus:ring-2 focus:ring-peach-200 dark:focus:ring-charcoal-700'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 dark:text-cream-200 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-cream-50 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-cream-50 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                            : 'border-peach-200 dark:border-charcoal-700 focus:border-peach-500 focus:ring-2 focus:ring-peach-200 dark:focus:ring-charcoal-700'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 dark:text-cream-200 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship inquiry / Project collaboration"
                      className="w-full px-4 py-3 rounded-2xl bg-cream-50 dark:bg-charcoal-900 border border-peach-200 dark:border-charcoal-700 text-sm text-charcoal-900 dark:text-cream-50 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 dark:focus:ring-charcoal-700 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 dark:text-cream-200 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ayisha, I came across your portfolio and wanted to reach out regarding..."
                      className={`w-full px-4 py-3 rounded-2xl bg-cream-50 dark:bg-charcoal-900 border text-sm text-charcoal-900 dark:text-cream-50 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                          : 'border-peach-200 dark:border-charcoal-700 focus:border-peach-500 focus:ring-2 focus:ring-peach-200 dark:focus:ring-charcoal-700'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-charcoal-900 text-cream-50 dark:bg-peach-400 dark:text-charcoal-900 font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-charcoal-800 dark:hover:bg-peach-300 transition-all shadow-md active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white dark:border-charcoal-900 border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

