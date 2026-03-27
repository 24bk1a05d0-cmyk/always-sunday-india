import { motion, useScroll, useTransform } from 'motion/react';
import logoMonkey from '../../assets/logo-monkey.jpg';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Mood } from './mood-selector';

interface NavbarProps {
  onOpenMoodSelector: () => void;
  currentMood: Mood;
}

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export function Navbar({ onOpenMoodSelector, currentMood }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 251, 245, 0)', 'rgba(255, 251, 245, 0.95)']
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0,0,0,0)', '0 4px 20px rgba(255, 140, 66, 0.1)']
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{ backgroundColor, boxShadow }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logoMonkey} alt="Always Sunday India" className="w-10 h-10 rounded-full object-cover border-2 border-[#ff8c42] shadow-md" />
          <div>
            <p className="text-xl" style={{ fontWeight: 800 }}>
              Always Sunday
            </p>
            <p className="text-xs text-gray-600" style={{ fontWeight: 500 }}>
              India
            </p>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#ff8c42] transition-colors relative"
              style={{ fontWeight: 600 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff8c42]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          {/* Mood Selector Button */}
          <motion.button
            onClick={onOpenMoodSelector}
            className="px-6 py-2 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-full shadow-md"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(255, 140, 66, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            {currentMood ? `${currentMood} mode` : 'Set Mood'} 🎭
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pb-4 space-y-2 bg-white/95 backdrop-blur-xl">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg hover:bg-[#ff8c42]/10 transition-colors"
              style={{ fontWeight: 600 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.button
            onClick={() => {
              onOpenMoodSelector();
              setIsOpen(false);
            }}
            className="w-full px-4 py-3 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-lg shadow-md"
            style={{ fontWeight: 600 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentMood ? `${currentMood} mode` : 'Set Mood'} 🎭
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
