import { useState, useEffect } from 'react';
import { CustomCursor } from './components/custom-cursor';
import { FloatingElements } from './components/floating-elements';
import { MoodSelector, Mood } from './components/mood-selector';
import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { ExperienceSection } from './components/experience-section';
import { MenuSection } from './components/menu-section';
import { InstagramGallery } from './components/instagram-gallery';
import { VibesSection } from './components/vibes-section';
import { VisitSection } from './components/visit-section';
import { CTASection } from './components/cta-section';
import { motion } from 'motion/react';

const moodThemes = {
  chill: {
    background: 'linear-gradient(135deg, #a0e7e5 0%, #b4f8c8 100%)',
    color: '#a0e7e5',
  },
  work: {
    background: 'linear-gradient(135deg, #ffd166 0%, #ff8c42 100%)',
    color: '#ffd166',
  },
  date: {
    background: 'linear-gradient(135deg, #ffb8d1 0%, #ff8c42 100%)',
    color: '#ffb8d1',
  },
  party: {
    background: 'linear-gradient(135deg, #ff8c42 0%, #ffd166 100%)',
    color: '#ff8c42',
  },
};

export default function App() {
  const [mood, setMood] = useState<Mood>(null);
  const [isMoodSelectorOpen, setIsMoodSelectorOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome animation on first load
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply mood theme to body
    if (mood && moodThemes[mood]) {
      document.body.style.setProperty('--mood-gradient', moodThemes[mood].background);
      document.body.style.setProperty('--mood-color', moodThemes[mood].color);
    }
  }, [mood]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Welcome Animation */}
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#ff8c42] via-[#ffd166] to-[#ffb8d1]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onAnimationComplete={() => setShowWelcome(false)}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <motion.h1
              className="text-6xl md:text-9xl text-white mb-4"
              style={{ fontWeight: 900 }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 60px rgba(255,255,255,0.9)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ☀️
            </motion.h1>
            <motion.p
              className="text-3xl md:text-5xl text-white"
              style={{ fontWeight: 700 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Always Sunday
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Mood Selector */}
      <MoodSelector
        currentMood={mood}
        onSelectMood={(newMood) => {
          setMood(newMood);
          setIsMoodSelectorOpen(false);
        }}
        onClose={() => setIsMoodSelectorOpen(false)}
        isOpen={isMoodSelectorOpen}
      />

      {/* Navbar */}
      <Navbar
        currentMood={mood}
        onOpenMoodSelector={() => setIsMoodSelectorOpen(true)}
      />

      {/* Main Content */}
      <main>
        <HeroSection mood={mood} />
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="menu">
          <MenuSection mood={mood} />
        </div>
        
        <div id="gallery">
          <InstagramGallery />
        </div>
        
        <VibesSection />
        
        <VisitSection />
        
        <CTASection />
        
        {/* Footer */}
        <footer className="bg-white py-8 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              className="text-gray-600 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Made with ☕ and ❤️
            </motion.p>
            <p className="text-sm text-gray-500">
              © 2026 Always Sunday India. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      {/* Mood Indicator */}
      {mood && (
        <motion.div
          className="fixed bottom-6 left-6 z-40 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border-2"
          style={{ borderColor: moodThemes[mood].color }}
          initial={{ scale: 0, x: -50 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ type: 'spring' }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: moodThemes[mood].color }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="capitalize" style={{ fontWeight: 600 }}>
              {mood} mode active
            </p>
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-2xl">↑</span>
      </motion.button>
    </div>
  );
}