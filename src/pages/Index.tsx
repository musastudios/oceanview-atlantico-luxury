
import React from 'react';
import { PhoneCall, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-ocean">Atlántico</h1>
            <a href="tel:+17874183707" 
               className="flex items-center gap-2 text-ocean hover:text-ocean-dark transition-colors">
              <PhoneCall size={20} />
              <span className="hidden md:inline">(787) 418-3707</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="container mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-ocean-light">
        <div className="container mx-auto">
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
            </div>
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
