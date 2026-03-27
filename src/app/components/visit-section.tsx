import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Clock, Car, Dog, Wifi, Phone } from 'lucide-react';

const locationFeatures = [
  { icon: MapPin, label: 'Location', value: 'Khajaguda, Hyderabad', color: '#ff8c42' },
  { icon: Clock, label: 'Timings', value: '8 AM - 11 PM', color: '#ffd166' },
  { icon: Car, label: 'Parking', value: 'Free Parking Available', color: '#a0e7e5' },
  { icon: Dog, label: 'Pet Friendly', value: 'Bring Your Furry Friends', color: '#ffb8d1' },
  { icon: Wifi, label: 'Free WiFi', value: 'High Speed Internet', color: '#b4f8c8' },
  { icon: Phone, label: 'Contact', value: '09866691527', color: '#ff8c42' },
];

export function VisitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="visit" ref={ref} className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#fffbf5] to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#ff8c42]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#ffb8d1]/10 to-transparent rounded-full blur-3xl" />

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
              Come Visit
            </p>
          </motion.span>

          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontWeight: 800 }}>
            Find Your <span className="text-[#ff8c42]">Sunday</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            We're always ready to welcome you
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {locationFeatures.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="group relative bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at 20% 50%, ${feature.color}22 0%, transparent 70%)`,
                  }}
                />

                <div className="relative flex items-center gap-4">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: `${feature.color}22` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1" style={{ fontWeight: 500 }}>
                      {feature.label}
                    </p>
                    <p className="text-lg" style={{ fontWeight: 600 }}>
                      {feature.value}
                    </p>
                  </div>

                  {/* Animated Arrow */}
                  <motion.div
                    className="text-2xl opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </div>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 -translate-y-1/2 translate-x-1/2"
                  style={{ backgroundColor: feature.color }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4899732634774!2d78.3808057!3d17.4217415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95352512e395:0x3097978d04296acc!2sAlways+Sunday+Cafe+%26+Bistro!5e0!3m2!1sen!2sin!4v1722069835000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Always Sunday India Location"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />

              {/* Overlay Badge */}
              <motion.div
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8, type: 'spring' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs text-gray-500" style={{ fontWeight: 500 }}>
                      Now Open
                    </p>
                    <p className="text-sm" style={{ fontWeight: 700 }}>
                      Always Sunday India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#ff8c42] rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#ffd166] rounded-br-3xl" />
            </motion.div>

            {/* Floating Action Button */}
            <motion.a
              href="https://www.google.com/maps/place/Always+Sunday+Cafe+%26+Bistro/@17.4217415,78.3808057,946m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb95352512e395:0x3097978d04296acc!8m2!3d17.4217415!4d78.3808057!16s%2Fg%2F11yp5nkg5p?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-full shadow-2xl inline-flex items-center gap-3"
              style={{ fontWeight: 600 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-24 p-8 md:p-12 bg-gradient-to-r from-[#ff8c42]/10 via-[#ffd166]/10 to-[#ffb8d1]/10 rounded-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.p
            className="text-2xl md:text-3xl mb-2"
            style={{ fontWeight: 700 }}
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            📍 Best café in Khajaguda, Hyderabad
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Specialty coffee • Pet-friendly café • Sunday vibe
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
