import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Coffee, Briefcase, Heart, PartyPopper } from 'lucide-react';

const vibes = [
  {
    title: 'Brunch with Friends',
    emoji: '🥂',
    icon: Coffee,
    description: 'Lazy Sundays, endless conversations, and good food',
    image: 'https://images.unsplash.com/photo-1601758004484-733647916908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2FmJUMzJUE5JTIwaGFuZ2luZyUyMG91dHxlbnwxfHx8fDE3NzQ2MDM2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#b4f8c8',
  },
  {
    title: 'Date Vibes',
    emoji: '💕',
    icon: Heart,
    description: 'Romantic corners, soft lighting, perfect moments',
    image: 'https://images.unsplash.com/photo-1701024546790-975eba1c48cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkYXRlJTIwcm9tYW50aWMlMjBjb3VwbGV8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ffb8d1',
  },
  {
    title: 'Work from Café',
    emoji: '💻',
    icon: Briefcase,
    description: 'Fast WiFi, great coffee, productive vibes',
    image: 'https://images.unsplash.com/photo-1763889831889-3f735612ce34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBjb3p5JTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NDYwMzYwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ffd166',
  },
  {
    title: 'Birthday Hangouts',
    emoji: '🎂',
    icon: PartyPopper,
    description: 'Celebrate life, one slice at a time',
    image: 'https://images.unsplash.com/photo-1553375886-1bbf80d1fa3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY2FmJUMzJUE5JTIwcGFydHl8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ff8c42',
  },
];

export function VibesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-white to-[#fffbf5] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#a0e7e5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-[#ff8c42]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#ff8c42]/20 to-[#ffd166]/20 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <p className="text-[#ff8c42]" style={{ fontWeight: 600 }}>
              Perfect For
            </p>
          </motion.span>

          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontWeight: 800 }}>
            Every <span className="text-[#ff8c42]">Occasion</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Whatever your vibe, we've got the perfect spot
          </p>
        </motion.div>

        {/* Vibes Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {vibes.map((vibe, index) => (
            <motion.div
              key={vibe.title}
              className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={vibe.image}
                  alt={vibe.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                style={{
                  background: `linear-gradient(to top, ${vibe.color}dd 0%, ${vibe.color}55 50%, transparent 100%)`,
                }}
              />

              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${vibe.color}66 0%, transparent 70%)`,
                  mixBlendMode: 'screen',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Floating Icon */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <vibe.icon className="w-8 h-8" style={{ color: vibe.color }} />
                </motion.div>

                {/* Emoji */}
                <motion.div
                  className="text-6xl md:text-7xl mb-4"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {vibe.emoji}
                </motion.div>

                {/* Text */}
                <motion.h3
                  className="text-3xl md:text-4xl text-white mb-3"
                  style={{ fontWeight: 800 }}
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {vibe.title}
                </motion.h3>

                <motion.p
                  className="text-white/90 text-base md:text-lg"
                  style={{ fontWeight: 500 }}
                  initial={{ y: 0, opacity: 0.9 }}
                  whileHover={{ y: -5, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {vibe.description}
                </motion.p>

                {/* Animated Bar */}
                <motion.div
                  className="mt-6 h-1 bg-white/30 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                >
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20"
                style={{ backgroundColor: vibe.color }}
                initial={{ scale: 0, x: '-50%', y: '-50%' }}
                whileHover={{ scale: 3 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl mb-6" style={{ fontWeight: 600 }}>
            What's your vibe today?
          </p>
          <motion.a
            href="https://wa.me/919866691527?text=Hi! I'd like to book a spot at Always Sunday India café. What vibes are you feeling today? ☕✨"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-full shadow-lg text-lg inline-block"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Spot
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
