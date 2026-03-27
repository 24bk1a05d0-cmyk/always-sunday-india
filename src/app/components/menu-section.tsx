import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Coffee, Leaf, UtensilsCrossed, Cake, Star, TrendingUp } from 'lucide-react';
import { Mood } from './mood-selector';

interface MenuSectionProps {
  mood: Mood;
}

const menuCategories = [
  { id: 'coffee', icon: Coffee, label: 'Coffee', emoji: '☕' },
  { id: 'matcha', icon: Leaf, label: 'Matcha & Benne', emoji: '🍵' },
  { id: 'mains', icon: UtensilsCrossed, label: 'Mains', emoji: '🍝' },
  { id: 'desserts', icon: Cake, label: 'Desserts', emoji: '🍰' },
];

const menuItems = {
  coffee: [
    { name: 'Signature Cold Brew', price: '₹280', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzQ1NDM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Caramel Macchiato', price: '₹320', tag: 'Must Try', image: 'https://images.unsplash.com/photo-1698626533257-19bfd2e77b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NDYwMzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Classic Cappuccino', price: '₹240', tag: null, image: 'https://images.unsplash.com/photo-1698626533257-19bfd2e77b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NDYwMzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Spanish Latte', price: '₹300', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzQ1NDM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Flat White', price: '₹260', tag: null, image: 'https://images.unsplash.com/photo-1698626533257-19bfd2e77b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NDYwMzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Iced Americano', price: '₹220', tag: 'Work Mood', image: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzQ1NDM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ],
  matcha: [
    { name: 'Iced Matcha Latte', price: '₹340', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Hot Matcha', price: '₹320', tag: 'Chill Mood', image: 'https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Benne Coffee', price: '₹360', tag: 'Must Try', image: 'https://images.unsplash.com/photo-1698626533257-19bfd2e77b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NDYwMzYwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Matcha Affogato', price: '₹380', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ],
  mains: [
    { name: 'Avocado Toast', price: '₹420', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1701292316846-57bddf85c76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3QlMjBjYWYlQzMlQTl8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Truffle Pasta', price: '₹560', tag: 'Must Try', image: 'https://images.unsplash.com/photo-1586003837615-044e696ab8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBicnVuY2glMjBjb2xvcmZ1bCUyMGZvb2R8ZW58MXx8fHwxNzc0NjAzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Breakfast Bowl', price: '₹380', tag: 'Chill Mood', image: 'https://images.unsplash.com/photo-1586003837615-044e696ab8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBicnVuY2glMjBjb2xvcmZ1bCUyMGZvb2R8ZW58MXx8fHwxNzc0NjAzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Club Sandwich', price: '₹440', tag: 'Work Mood', image: 'https://images.unsplash.com/photo-1701292316846-57bddf85c76c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3QlMjBjYWYlQzMlQTl8ZW58MXx8fHwxNzc0NjAzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Paneer Tikka Wrap', price: '₹400', tag: null, image: 'https://images.unsplash.com/photo-1586003837615-044e696ab8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBicnVuY2glMjBjb2xvcmZ1bCUyMGZvb2R8ZW58MXx8fHwxNzc0NjAzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Buddha Bowl', price: '₹460', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1586003837615-044e696ab8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBicnVuY2glMjBjb2xvcmZ1bCUyMGZvb2R8ZW58MXx8fHwxNzc0NjAzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  ],
  desserts: [
    { name: 'Blueberry Cheesecake', price: '₹340', tag: 'Must Try', image: 'https://images.unsplash.com/photo-1760930112466-5be0f6e67f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkZXNzZXJ0JTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Chocolate Lava Cake', price: '₹320', tag: 'Date Mood', image: 'https://images.unsplash.com/photo-1760930112466-5be0f6e67f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkZXNzZXJ0JTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Croissant Platter', price: '₹280', tag: 'Instagram Favorite', image: 'https://images.unsplash.com/photo-1652409596859-02a25f61a15d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBwYXN0cmllcyUyMGNyb2lzc2FudCUyMGRpc3BsYXl8ZW58MXx8fHwxNzc0NjAzNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Tiramisu', price: '₹360', tag: 'Must Try', image: 'https://images.unsplash.com/photo-1760930112466-5be0f6e67f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkZXNzZXJ0JTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Brownie Sundae', price: '₹300', tag: 'Party Mood', image: 'https://images.unsplash.com/photo-1760930112466-5be0f6e67f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWYlQzMlQTklMjBkZXNzZXJ0JTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzQ2MDM2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ],
};

export function MenuSection({ mood }: MenuSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('coffee');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="menu" ref={ref} className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-white to-[#fffbf5] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ff8c42]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#ffb8d1]/10 to-transparent rounded-full blur-3xl" />

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
            <p className="text-[#ff8c42]" style={{ fontWeight: 600 }}>Our Menu</p>
          </motion.span>

          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontWeight: 800 }}>
            Crafted with <span className="text-[#ff8c42]">love</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${activeTab === category.id
                  ? 'bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              style={{ fontWeight: 600 }}
              whileHover={{ scale: activeTab === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{category.emoji}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeTab}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={item.name}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredItem === item.name ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Tag */}
                {item.tag && (
                  <motion.div
                    className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center gap-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.tag === 'Instagram Favorite' && <Star className="w-4 h-4 fill-[#ff8c42] text-[#ff8c42]" />}
                    {item.tag === 'Must Try' && <TrendingUp className="w-4 h-4 text-[#ff8c42]" />}
                    <span className="text-xs" style={{ fontWeight: 600 }}>{item.tag}</span>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {item.name}
                </h3>
                <p className="text-2xl text-[#ff8c42]" style={{ fontWeight: 700 }}>
                  {item.price}
                </p>
              </div>

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff8c42]/20 to-[#ffd166]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">Craving something special?</p>
          <motion.a
            href="https://dinein.petpooja.com/orders/category/umn1h2gb6r/T-6?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8VVgNAxq-6cqDlaTBWhJsYWn_prhG4EphmRbmIEXLLOV4cEyLKI3nZJAJbI_aem_8JjoqnIRlKNcDh9EKYJE4g"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#ffd166] text-white rounded-full shadow-lg inline-block"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 140, 66, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
