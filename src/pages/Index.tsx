import React from 'react';
import { 
  PhoneCall, 
  MapPin, 
  DollarSign, 
  ArrowRight,
  Umbrella,
  Anchor,
  Ship,
  Shell,
  Waves,
  Sun,
  Cloud,
  Sailboat,
  Heart,
  Star,
  Compass
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Index = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 850]);
  const contentY = useTransform(scrollY, [0, 500], [0, 250]); // Slower movement for content
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.3, 0.85]);
  const overlayColor = useTransform(
    scrollY,
    [0, 500],
    ['rgba(0, 0, 0, 0.3)', 'rgba(14, 165, 233, 0.85)']
  );

  const floatingY1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const floatingY2 = useTransform(scrollY, [0, 1000], [0, -50]);
  const floatingY3 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/altantico-logo.svg" 
                alt="Atlántico" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <a href="tel:+17874183707" 
               className="flex items-center gap-2 text-ocean hover:text-ocean-dark transition-colors">
              <PhoneCall size={20} />
              <span className="hidden md:inline">(787) 418-3707</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/banner-bg.jpg")',
            y: backgroundY
          }}
        />
        <motion.div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: overlayColor,
            backdropFilter: 'blur(2px)'
          }}
        />
        <motion.div 
          className="container mx-auto px-6 z-10"
          style={{ y: contentY }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h2 className="text-lg md:text-xl font-light mb-4">BIENVENIDOS A</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Atlántico</h1>
            <p className="text-xl md:text-2xl mb-8">
              Vive donde el mar y la tranquilidad te conquistan
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                Agenda tu cita
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-ocean-light relative overflow-hidden">
        {/* Floating Decorative Elements */}
        <motion.div className="absolute inset-0 pointer-events-none opacity-50">
          <motion.div 
            className="absolute top-20 left-10"
            style={{ y: floatingY1 }}
            animate={{ 
              x: [0, 10, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Anchor size={128} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute top-40 right-20"
            style={{ y: floatingY2 }}
            animate={{ 
              x: [0, -15, 0],
              rotate: [5, -5, 5]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Umbrella size={112} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute bottom-20 left-1/4"
            style={{ y: floatingY3 }}
            animate={{ 
              x: [0, 20, 0],
              rotate: [-10, 10, -10]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Ship size={144} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute top-60 left-2/3"
            style={{ y: floatingY1 }}
            animate={{ 
              x: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sun size={128} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute bottom-40 right-1/4"
            style={{ y: floatingY2 }}
            animate={{ 
              x: [0, 15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Shell size={112} className="text-[#f29e0c]" />
          </motion.div>

          {/* Additional elements */}
          <motion.div 
            className="absolute top-32 left-1/3"
            style={{ y: floatingY2 }}
            animate={{ 
              x: [0, 25, 0],
              rotate: [-8, 8, -8]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sailboat size={144} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute bottom-60 right-1/3"
            style={{ y: floatingY1 }}
            animate={{ 
              x: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Compass size={120} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute top-80 right-40"
            style={{ y: floatingY3 }}
            animate={{ 
              x: [0, 15, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Cloud size={96} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute bottom-32 left-40"
            style={{ y: floatingY2 }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [-10, 10, -10]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star size={108} className="text-[#f29e0c]" />
          </motion.div>

          <motion.div 
            className="absolute top-96 left-2/3"
            style={{ y: floatingY1 }}
            animate={{ 
              x: [0, -10, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Waves size={132} className="text-[#f29e0c]" />
          </motion.div>
        </motion.div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8"
            >
              <MapPin className="w-12 h-12 text-ocean mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ubicación Privilegiada</h3>
              <p className="text-gray-600">
                Disfruta de impresionantes vistas panorámicas al océano desde tu penthouse
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8"
            >
              <DollarSign className="w-12 h-12 text-ocean mb-4" />
              <h3 className="text-2xl font-bold mb-4">Desde $299,000</h3>
              <p className="text-gray-600">
                Inversión inteligente en una propiedad de lujo con vistas únicas
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-8"
            >
              <PhoneCall className="w-12 h-12 text-ocean mb-4" />
              <h3 className="text-2xl font-bold mb-4">Contacto Directo</h3>
              <p className="text-gray-600">
                Agenda tu cita personalizada: (787) 418-3707
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">¿Listo para conocer tu nuevo hogar?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Agenda una visita personalizada y descubre por qué Atlántico es el lugar perfecto para ti
            </p>
            <a 
              href="tel:+17874183707"
              className="btn-primary inline-flex items-center gap-2"
            >
              <PhoneCall size={20} />
              Llamar ahora: (787) 418-3707
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-dark text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Atlántico. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
