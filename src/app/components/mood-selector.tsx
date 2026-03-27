import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Laptop, Heart, PartyPopper, X } from 'lucide-react';
import { useState } from 'react';

export type Mood = 'chill' | 'work' | 'date' | 'party' | null;

interface MoodSelectorProps {
  onSelectMood: (mood: Mood) => void;
  currentMood: Mood;
  onClose: () => void;
  isOpen: boolean;
}

const moods = [
  { 
    id: 'chill' as Mood, 
    icon: Coffee, 
    emoji: '😌', 
    label: 'Chill', 
    color: '#a0e7e5',
    gradient: 'from-[#a0e7e5] to-[#b4f8c8]',
    description: 'Relax and unwind'
  },
  { 
    id: 'work' as Mood, 
    icon: Laptop, 
    emoji: '💻', 
    label: 'Work', 
    color: '#ffd166',
    gradient: 'from-[#ffd166] to-[#ff8c42]',
    description: 'Focus and productivity'
  },
  { 
    id: 'date' as Mood, 
    icon: Heart, 
    emoji: '❤️', 
    label: 'Date', 
    color: '#ffb8d1',
    gradient: 'from-[#ffb8d1] to-[#ff8c42]',
    description: 'Romance and connection'
  },
  { 
    id: 'party' as Mood, 
    icon: PartyPopper, 
    emoji: '🎉', 
    label: 'Party', 
    color: '#ff8c42',
    gradient: 'from-[#ff8c42] to-[#ffd166]',
    description: 'Celebrate and have fun'
  },
];

export function MoodSelector({ onSelectMood, currentMood, onClose, isOpen }: MoodSelectorProps) {
  const [hoveredMood, setHoveredMood] = useState<Mood>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-6xl mb-4" style={{ fontWeight: 700 }}>
                What's your vibe today?
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Choose a mood to customize your experience
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {moods.map((mood, index) => (
                <motion.button
                  key={mood.id}
                  className={`relative p-6 md:p-8 rounded-2xl transition-all ${
                    currentMood === mood.id 
                      ? 'ring-4 ring-offset-2 ring-offset-white' 
                      : 'hover:scale-105'
                  }`}
                  style={{
                    background: currentMood === mood.id 
                      ? `linear-gradient(135deg, ${mood.color}, ${mood.color}dd)` 
                      : hoveredMood === mood.id
                      ? `linear-gradient(135deg, ${mood.color}cc, ${mood.color}aa)`
                      : `linear-gradient(135deg, ${mood.color}44, ${mood.color}22)`,
                    boxShadow: currentMood === mood.id 
                      ? `0 20px 40px ${mood.color}55` 
                      : hoveredMood === mood.id
                      ? `0 15px 30px ${mood.color}44`
                      : `0 5px 15px ${mood.color}22`,
                    ringColor: mood.color,
                  }}
                  onClick={() => onSelectMood(mood.id)}
                  onMouseEnter={() => setHoveredMood(mood.id)}
                  onMouseLeave={() => setHoveredMood(null)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="text-5xl md:text-6xl mb-3"
                    animate={currentMood === mood.id ? { 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {mood.emoji}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl mb-1" style={{ fontWeight: 600 }}>
                    {mood.label}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {mood.description}
                  </p>
                  
                  {currentMood === mood.id && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${mood.color}33, ${mood.color}11)`,
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.1, opacity: 0 }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => onSelectMood(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear mood selection
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
