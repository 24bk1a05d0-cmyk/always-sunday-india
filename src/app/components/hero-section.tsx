import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Mood } from './mood-selector';

interface HeroSectionProps {
  mood: Mood;
}

const moodBackgrounds = {
  chill: 'https://images.unsplash.com/photo-1753360931210-78af2620eda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjYWYlQzMlQTklMjBpbnRlcmlvciUyMHdhcm0lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzQ2MDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  work: 'https://images.unsplash.com/photo-1763889831889-3f735612ce34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBjb3p5JTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NDYwMzYwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  date: 'https://images.unsplash.com/photo-1701024546790-975eba1c48cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkYXRlJTIwcm9tYW50aWMlMjBjb3VwbGV8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  party: 'https://images.unsplash.com/photo-1553375886-1bbf80d1fa3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY2FmJUMzJUE5JTIwcGFydHl8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
};

const moodGradients = {
  chill: 'from-[#a0e7e5]/30 via-[#b4f8c8]/20 to-transparent',
  work: 'from-[#ffd166]/30 via-[#ff8c42]/20 to-transparent',
  date: 'from-[#ffb8d1]/30 via-[#ff8c42]/20 to-transparent',
  party: 'from-[#ff8c42]/30 via-[#ffd166]/20 to-transparent',
};

export function HeroSection({ mood }: HeroSectionProps) {
  const backgroundImage = mood ? moodBackgrounds[mood] : 'https://images.unsplash.com/photo-1753360931210-78af2620eda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjYWYlQzMlQTklMjBpbnRlcmlvciUyMHdhcm0lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzQ2MDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
  const gradientOverlay = mood ? moodGradients[mood] : 'from-[#ff8c42]/30 via-[#ffd166]/20 to-transparent';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.img
          key={backgroundImage}
          src={backgroundImage}
          alt="Café ambiance"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        key={`gradient-${mood}`}
        className={`absolute inset-0 z-[1] bg-gradient-to-b ${gradientOverlay}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-white/40 via-white/20 to-transparent backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div
            className="inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <h1 className="text-6xl md:text-9xl tracking-tight" style={{ fontWeight: 900 }}>
              <span className="bg-gradient-to-r from-[#ff8c42] via-[#ffd166] to-[#ffb8d1] bg-clip-text text-transparent">
                Always Sunday
              </span>
            </h1>
            <p className="text-2xl md:text-4xl mt-2 text-[#ff8c42]" style={{ fontWeight: 600 }}>
              India
            </p>
          </motion.div>

          {/* Main Tagline */}
          <motion.h2
            className="text-4xl md:text-7xl max-w-4xl mx-auto"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Life's a <span className="text-[#ff8c42]">holiday.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-3xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A café where every day feels like Sunday.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#menu"
              className="group px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-full shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-3 justify-center"
              style={{ fontWeight: 600 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#visit"
              className="group px-8 py-4 bg-white/90 backdrop-blur-xl text-[#ff8c42] rounded-full shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-3 justify-center border-2 border-[#ff8c42]/30"
              style={{ fontWeight: 600 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 140, 66, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Book a Table
            </motion.a>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            className="inline-block mt-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: 'spring' }}
          >
            <div className="px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-[#ff8c42]/20">
              <p className="text-sm md:text-base">
                ✨ <span style={{ fontWeight: 600 }}>Pet Friendly</span> • Free WiFi • Specialty Coffee
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-[#ff8c42] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#ff8c42] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
