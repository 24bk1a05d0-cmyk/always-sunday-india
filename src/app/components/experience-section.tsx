import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const experiences = [
  {
    title: 'Specialty Coffee',
    description: 'Hand-crafted with passion, served with love. From classic espresso to unique signature blends.',
    image: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzQ1NDM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Fusion Food',
    description: 'Where tradition meets innovation. Every dish tells a story, every bite is an adventure.',
    image: 'https://images.unsplash.com/photo-1586003837615-044e696ab8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBicnVuY2glMjBjb2xvcmZ1bCUyMGZvb2R8ZW58MXx8fHwxNzc0NjAzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Familiar Faces',
    description: 'More than just a café. It\'s a community, a family, a place where everyone knows your name.',
    image: 'https://images.unsplash.com/photo-1601758004484-733647916908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2FmJUMzJUE5JTIwaGFuZ2luZyUyMG91dHxlbnwxfHx8fDE3NzQ2MDM2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Cozy Interiors',
    description: 'Designed for comfort, built for memories. Every corner is Instagram-worthy, every seat is the best seat.',
    image: 'https://images.unsplash.com/photo-1753360931210-78af2620eda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjYWYlQzMlQTklMjBpbnRlcmlvciUyMHdhcm0lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzQ2MDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="relative min-h-screen py-20 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-[#fffbf5] to-white">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#ffb8d1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#ffd166]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
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
              The Experience
            </p>
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontWeight: 800 }}>
            More than just a café
          </h2>
          
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Specialty coffee. Fusion food. Familiar faces.
          </p>
        </motion.div>

        {/* Split Screen Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`p-6 md:p-8 rounded-3xl transition-all duration-500 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-[#ff8c42]/10 to-[#ffd166]/10 shadow-lg scale-105'
                    : 'bg-white/50 opacity-50 scale-95'
                }`}
                animate={{
                  scale: currentIndex === index ? 1.05 : 0.95,
                  opacity: currentIndex === index ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-4"
                  animate={{
                    x: currentIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-5xl">{['☕', '🍽️', '👥', '🏠'][index]}</span>
                  <h3 className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
                    {exp.title}
                  </h3>
                </motion.div>
                <p className="text-base md:text-lg text-gray-600">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Animated Images */}
          <motion.div
            className="relative h-[500px] md:h-[700px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    scale: currentIndex === index ? 1 : 0.8,
                    rotateY: currentIndex === index ? 0 : -20,
                    zIndex: currentIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Image Label */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: currentIndex === index ? 0 : 20,
                      opacity: currentIndex === index ? 1 : 0,
                    }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl">
                      <p className="text-lg" style={{ fontWeight: 600 }}>
                        {exp.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#ff8c42] to-[#ffd166] rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            {/* Progress Indicators */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? 'w-12 bg-[#ff8c42]' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
