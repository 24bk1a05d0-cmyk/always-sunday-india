import { motion } from 'motion/react';
import { Coffee, Sun, Heart, Sparkles, Smile } from 'lucide-react';

const floatingItems = [
  { Icon: Coffee, color: '#ff8c42', top: '10%', left: '5%', delay: 0 },
  { Icon: Sun, color: '#ffd166', top: '20%', left: '90%', delay: 0.5 },
  { Icon: Heart, color: '#ffb8d1', top: '60%', left: '8%', delay: 1 },
  { Icon: Sparkles, color: '#a0e7e5', top: '70%', left: '85%', delay: 1.5 },
  { Icon: Smile, color: '#ff8c42', top: '40%', left: '92%', delay: 0.8 },
  { Icon: Coffee, color: '#ffd166', top: '85%', left: '10%', delay: 1.2 },
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.Icon 
            className="w-8 h-8 md:w-12 md:h-12 opacity-20" 
            style={{ color: item.color }}
          />
        </motion.div>
      ))}
      
      {/* Additional sparkle emojis */}
      {['✨', '☕', '🌞', '💖', '😊', '🍰'].map((emoji, index) => (
        <motion.div
          key={`emoji-${index}`}
          className="absolute text-2xl md:text-4xl opacity-10"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            delay: index * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}
