import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, Instagram, Heart } from 'lucide-react';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzQ1NDM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Perfect latte art ☕', likes: 234 },
  { id: 2, url: 'https://images.unsplash.com/photo-1586003837615-044e696ab8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBicnVuY2glMjBjb2xvcmZ1bCUyMGZvb2R8ZW58MXx8fHwxNzc0NjAzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Brunch goals 🍽️', likes: 456 },
  { id: 3, url: 'https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Matcha vibes 🍵', likes: 189 },
  { id: 4, url: 'https://images.unsplash.com/photo-1760930112466-5be0f6e67f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkZXNzZXJ0JTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Sweet moments 🍰', likes: 312 },
  { id: 5, url: 'https://images.unsplash.com/photo-1753360931210-78af2620eda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjYWYlQzMlQTklMjBpbnRlcmlvciUyMHdhcm0lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzQ2MDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Cozy corners 🏠', likes: 567 },
  { id: 6, url: 'https://images.unsplash.com/photo-1701292316846-57bddf85c76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3QlMjBjYWYlQzMlQTl8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Avo toast love 🥑', likes: 423 },
  { id: 7, url: 'https://images.unsplash.com/photo-1698626533257-19bfd2e77b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NDYwMzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Morning ritual ☕', likes: 289 },
  { id: 8, url: 'https://images.unsplash.com/photo-1652409596859-02a25f61a15d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBwYXN0cmllcyUyMGNyb2lzc2FudCUyMGRpc3BsYXl8ZW58MXx8fHwxNzc0NjAzNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Pastry heaven 🥐', likes: 378 },
  { id: 9, url: 'https://images.unsplash.com/photo-1601758004484-733647916908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2FmJUMzJUE5JTIwaGFuZ2luZyUyMG91dHxlbnwxfHx8fDE3NzQ2MDM2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Good times 👯', likes: 501 },
];

export function InstagramGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#fffbf5] to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ffb8d1]/10 to-[#a0e7e5]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
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
              #AlwaysSundayIndia
            </p>
          </motion.span>

          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontWeight: 800 }}>
            Instagram <span className="text-[#ff8c42]">Worthy</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Every corner, every dish, every moment is shareable
          </p>

          <motion.a
            href="https://www.instagram.com/alwayssundayindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white rounded-full shadow-lg"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
            Follow Us @alwayssundayindia
          </motion.a>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Masonry columnsCount={3} gutter="1rem">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedImage(image)}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-auto"
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: hoveredId === image.id ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white text-lg mb-2" style={{ fontWeight: 600 }}>
                      {image.caption}
                    </p>
                    <div className="flex items-center gap-2 text-white/90">
                      <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                      <span style={{ fontWeight: 500 }}>{image.likes}</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Zoom Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredId === image.id ? 1 : 0,
                    opacity: hoveredId === image.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xl">🔍</span>
                </motion.div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <motion.div
                className="mt-6 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white text-2xl mb-3" style={{ fontWeight: 600 }}>
                  {selectedImage.caption}
                </p>
                <div className="flex items-center justify-center gap-2 text-white/90">
                  <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                  <span className="text-lg" style={{ fontWeight: 500 }}>
                    {selectedImage.likes} likes
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
