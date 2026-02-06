import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Check, Sparkles, Sun, Moon } from 'lucide-react';
import { BackgroundBeams } from './components/BackgroundBeams';
import { RequestForm } from './components/RequestForm';
import { VercelGuide } from './components/VercelGuide';
import { SecurityNotice } from './components/SecurityNotice';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to Light Mode

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Class on HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white 
      ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <motion.div 
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-500 to-violet-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20"
            >
              <Layout size={24} className="text-white" />
            </motion.div>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Premium Landing <span className="text-indigo-600 dark:text-indigo-400">Hub</span>
            </motion.h1>
          </div>
          
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div key="moon" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <Moon size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="sun" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Sun size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700/50 text-xs font-semibold text-indigo-600 dark:text-indigo-300 shadow-sm"
            >
              <Sparkles size={12} />
              <span>VIP SERVICE</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* Intro Section */}
        <section className="text-center space-y-6 mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400"
          >
            제작 가이드 및<br className="md:hidden"/> 자료 요청
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            성공적인 프로젝트를 위한 첫 걸음.<br/>
            필요한 정보를 입력하고, 안전하게 서버를 연동하세요.
          </motion.p>
        </section>

        {/* Section 1: Data Request Form */}
        <RequestForm />

        {/* Section 2: Vercel Guide */}
        <VercelGuide />

        {/* Section 3: Security Notice */}
        <SecurityNotice />

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Layout size={16} />
            <span className="font-semibold">Premium Landing Page Service</span>
          </div>
          <p className="text-slate-500 dark:text-slate-600 text-xs">
            © 2026 All Rights Reserved. Client Data Protected.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;