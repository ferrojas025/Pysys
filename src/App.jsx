// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import Ranking from '@/components/Ranking'; // Importar el nuevo componente
import { 
  Bot, 
  Users, 
  BookOpen, 
  TrendingUp, 
  MessageCircle, 
  Code, 
  Star,
  ArrowRight,
  BarChart3,
  Target,
  Clock,
  Award
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Datos simulados para las estadísticas
  const weeklyProgressData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Estudiantes Activos',
        data: [45, 52, 48, 61, 55, 67, 73],
        backgroundColor: 'rgba(102, 126, 234, 0.8)',
        borderColor: 'rgba(102, 126, 234, 1)',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const learningProgressData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Lecciones Completadas',
        data: [120, 190, 300, 500, 720, 890],
        borderColor: 'rgba(118, 75, 162, 1)',
        backgroundColor: 'rgba(118, 75, 162, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(118, 75, 162, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        pointRadius: 6,
      },
    ],
  };

  const topicsData = {
    labels: ['Variables', 'Funciones', 'Bucles', 'Listas', 'Diccionarios'],
    datasets: [
      {
        data: [25, 20, 18, 22, 15],
        backgroundColor: [
          'rgba(102, 126, 234, 0.8)',
          'rgba(118, 75, 162, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            weight: 'bold',
          },
          padding: 20,
        },
      },
    },
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster />
      
      {/* Navbar */}
      <motion.nav 
        className="fixed top-0 w-full z-50 glass-effect"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              {/* CAMBIO DE LOGO */}
              <img src="/logo.png" alt="PyHer Logo" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-bold text-white">PyHer</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-white hover:text-purple-200 transition-colors ${activeSection === 'home' ? 'text-purple-200' : ''}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-white hover:text-purple-200 transition-colors ${activeSection === 'about' ? 'text-purple-200' : ''}`}
              >
                Sobre Nosotros
              </button>
              {/* AÑADIDO BOTÓN RANKING */}
              <button 
                onClick={() => scrollToSection('ranking')}
                className={`text-white hover:text-purple-200 transition-colors ${activeSection === 'ranking' ? 'text-purple-200' : ''}`}
              >
                Ranking
              </button>
              <button 
                onClick={() => scrollToSection('stats')}
                className={`text-white hover:text-purple-200 transition-colors ${activeSection === 'stats' ? 'text-purple-200' : ''}`}
              >
                Estadísticas
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-pattern pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aprende Python con{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                PyHer
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tu Mentora Personal de IA
            </motion.p>
            
            <motion.p 
              className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Una nueva forma de aprender a programar: conversacional, a tu ritmo y siempre disponible para ti en Telegram
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full pulse-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://t.me/pyher_bot', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar con PyHer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 floating-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img  
              className="mx-auto w-64 h-64 rounded-full shadow-2xl glass-effect"
              alt="PyHer AI chatbot interface showing Python learning conversation"
             src="https://images.unsplash.com/photo-1675023035272-3426884896f8" />
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Qué es PyHer?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect p-8 rounded-2xl">
                <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                  PyHer es una mentora de programación revolucionaria basada en inteligencia artificial, diseñada específicamente para enseñar Python a principiantes de una manera completamente nueva y accesible.
                </p>
                
                <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                  Nuestra misión es democratizar el aprendizaje de la programación, eliminando las barreras tradicionales y ofreciendo una experiencia de aprendizaje personalizada, conversacional y disponible las 24 horas del día.
                </p>
                
                <p className="text-lg text-purple-100 leading-relaxed">
                  A través de Telegram, PyHer se convierte en tu compañera de aprendizaje ideal: paciente, siempre disponible y capaz de adaptarse a tu ritmo y estilo de aprendizaje único.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass-effect p-6 rounded-xl text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <span className="text-2xl font-bold text-white block">500+</span>
                <span className="text-purple-200">Estudiantes</span>
              </div>
              
              <div className="glass-effect p-6 rounded-xl text-center">
                <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <span className="text-2xl font-bold text-white block">1,200+</span>
                <span className="text-purple-200">Lecciones</span>
              </div>
              
              <div className="glass-effect p-6 rounded-xl text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <span className="text-2xl font-bold text-white block">24/7</span>
                <span className="text-purple-200">Disponible</span>
              </div>
              
              <div className="glass-effect p-6 rounded-xl text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <span className="text-2xl font-bold text-white block">95%</span>
                <span className="text-purple-200">Satisfacción</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="glass-effect p-8 rounded-2xl text-center">
              <Code className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Aprendizaje Interactivo</h3>
              <p className="text-purple-200">
                Conversaciones naturales que hacen que aprender Python sea tan fácil como chatear con un amigo
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center">
              <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Personalizado</h3>
              <p className="text-purple-200">
                Adapta el contenido y la velocidad de aprendizaje según tu nivel y preferencias personales
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center">
              <TrendingUp className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Progreso Visible</h3>
              <p className="text-purple-200">
                Seguimiento detallado de tu progreso con métricas claras y motivadoras
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>
      
      {/* AÑADIDA SECCIÓN RANKING */}
      <Ranking />

      <div className="section-divider"></div>

      {/* Statistics Section */}
      <section id="stats" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Estadísticas de Aprendizaje
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Descubre el impacto real de PyHer en la comunidad de estudiantes de Python
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="chart-container p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-purple-600" />
                Actividad Semanal
              </h3>
              <div className="h-64">
                <Bar data={weeklyProgressData} options={chartOptions} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="chart-container p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-purple-600" />
                Progreso Mensual
              </h3>
              <div className="h-64">
                <Line data={learningProgressData} options={chartOptions} />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="chart-container p-8 max-w-md mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
              <Star className="w-6 h-6 mr-3 text-purple-600" />
              Temas Más Populares
            </h3>
            <div className="h-64">
              <Doughnut data={topicsData} options={doughnutOptions} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para unirte a nuestra comunidad?
              </h3>
              <p className="text-purple-200 mb-6">
                Más de 500 estudiantes ya están aprendiendo Python con PyHer. ¡Sé el próximo en dominar la programación!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://t.me/pyher_bot', '_blank')}
              >
                <Bot className="w-5 h-5 mr-2" />
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            {/* CAMBIO DE LOGO */}
            <img src="/logo.png" alt="PyHer Logo" className="w-12 h-12 rounded-full" />
            <span className="text-3xl font-bold text-white">PyHer</span>
          </div>
          
          <p className="text-purple-200 mb-6 max-w-md mx-auto">
            Transformando la educación en programación, una conversación a la vez.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button 
              variant="ghost" 
              className="text-purple-200 hover:text-white hover:bg-purple-800/50"
              onClick={() => window.open('https://t.me/pyher_bot', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </div>
          
          <div className="border-t border-purple-700 pt-6">
            <p className="text-purple-300 text-sm">
              © 2025 PyHer. Todos los derechos reservados. Hecho con ❤️ para las futuras programadoras.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;