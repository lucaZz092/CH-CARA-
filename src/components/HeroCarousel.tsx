import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1590005354164-07135e5d3600?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?auto=format&fit=crop&w=1600&q=80"
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-emerald-300 mb-6 bg-stone-900/40 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-500/30">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Interior de São Paulo</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-md">
            Refúgio <span className="italic text-emerald-400">Santa Clara</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-200 mb-10 font-light drop-shadow">
            Tranquilidade, natureza e conforto para momentos inesquecíveis em família.
          </p>
          <a
            href="#reservas"
            className="inline-block bg-emerald-600 text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-emerald-500 hover:scale-105 transition-all shadow-lg"
          >
            Ver Disponibilidade
          </a>
        </motion.div>
      </div>
    </div>
  );
}
