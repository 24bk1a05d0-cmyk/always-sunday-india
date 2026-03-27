import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, ExternalLink, Instagram, Facebook, Twitter } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8c42] via-[#ffd166] to-[#ffb8d1]">
        {/* Animated Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating Emojis */}
      {['☕', '🌞', '💖', '✨', '🍰', '🥐'].map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl opacity-10"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.h2
            className="text-5xl md:text-8xl text-white mb-8"
            style={{ fontWeight: 900 }}
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 40px rgba(255,255,255,0.8)',
                '0 0 20px rgba(255,255,255,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Not just a café.
            <br />
            <span className="bg-white text-[#ff8c42] px-8 py-2 rounded-3xl inline-block mt-4">
              It's a vibe.
            </span>
          </motion.h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto"
          style={{ fontWeight: 500 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join the community. Experience the Sunday feeling. Every single day.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919866691527"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-white text-[#ff8c42] rounded-full shadow-2xl inline-flex items-center gap-3 justify-center"
            style={{ fontWeight: 700, fontSize: '1.125rem' }}
            whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            Book a Table
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Order Now Button */}
          <motion.a
            href="https://www.swiggy.com/restaurants/always-sunday-rai-durg-hyderabad-1319326/dineout"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-white/10 backdrop-blur-xl text-white border-2 border-white rounded-full shadow-2xl inline-flex items-center gap-3 justify-center hover:bg-white hover:text-[#ff8c42] transition-all"
            style={{ fontWeight: 700, fontSize: '1.125rem' }}
            whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-6 h-6" />
            Order Now
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-white/80 mb-6 text-lg" style={{ fontWeight: 600 }}>
            Follow the vibe
          </p>
          <div className="flex gap-4 justify-center">
            {[
              { icon: Instagram, href: 'https://www.instagram.com/alwayssundayindia/', color: '#E1306C' },
              { icon: Facebook, href: 'https://facebook.com', color: '#1877F2' },
              { icon: Twitter, href: 'https://twitter.com', color: '#1DA1F2' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#ff8c42] transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Decorative Text */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-white/70 text-sm md:text-base">
            Always Sunday India • Khajaguda, Hyderabad
          </p>
          <p className="text-white/50 text-xs md:text-sm mt-2">
            Open 8 AM - 11 PM • Every Day is Sunday
          </p>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <motion.path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </section>
  );
}
