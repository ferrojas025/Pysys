import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import Ranking from '@/components/Ranking'; 

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart, 
  Bar,      
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

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
  Award,
  X, 
  Zap, 
  Link, 
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPublicProfile, setIsPublicProfile] = useState(false);


  const nivelAvanceData = [
    { name: "Inicio (Día 1–3)", value: 40 },
    { name: "Exploración (Día 4–10)", value: 32 },
    { name: "Progreso (Día 11–20)", value: 18 },
    { name: "Maestría (Día 21–30)", value: 10 }
  ];
  const COLORS_NIVEL_AVANCE = ['#6A329F', '#8E44AD', '#BB8FCE', '#D2B4DE']; 

  const constanciaData = [
    { name: "Constantes", value: 62 },
    { name: "Irregulares", value: 38 }
  ];
  const COLORS_CONSTANCIA = ['#6A329F', '#9B59B6']; 

  const aprendicesActivasHoy = 112; 

  const conexionesData = [
    { semana: "Semana 1", conexiones: 5 },
    { semana: "Semana 2", conexiones: 12 },
    { semana: "Semana 3", conexiones: 15 },
    { semana: "Semana 4", conexiones: 10 }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allMentors = [
    {
      id: 'hardcoded-aleja',
      name: 'Alejandra Rojas (Ingeniera de Machine Learning)',
      avatarUrl: 'Mentora_aleja.png', 
      description: 'Alejandra es Ingeniera de Machine Learning y AI, y estudiante de maestría en Inteligencia Artificial. Le apasiona enseñar, compartir conocimiento y aplicar la inteligencia artificial para generar un impacto positivo en el mundo real. Su enfoque combina el desarrollo técnico con un fuerte compromiso por la ética y la transformación social a través de la tecnología, es fundadora de PySys.'
    },
  ];

  const openMentorModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeMentorModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  const handleSubmitMentorForm = (e) => {
    e.preventDefault();
    console.log("Formulario de mentora enviado:");
    console.log("Nombre completo:", e.target[0].value);
    console.log("Correo electrónico:", e.target[1].value);
    console.log("Descripción:", e.target[2].value);
    console.log("Perfil público:", isPublicProfile);
    e.target.reset(); 
    setIsPublicProfile(false); 
  };
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm"
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
              <img src="/logoPySys.png" alt="PySys Logo" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-bold text-gray-900">PySys</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Sobre Nosotros', 'Qué es Tyzy?', 'Nuestro Propósito', 'Ranking', 'Estadísticas', 'Conexiones'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '').replace('?', '').replace('á', 'a'))}
                  className={`text-gray-700 hover:text-purple-700 transition-colors ${
                    activeSection === item.toLowerCase().replace(/\s+/g, '').replace('?', '').replace('á', 'a') ? 'text-purple-700' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
 
      <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aprende Python con{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                PySys
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tu Mentora Personal de IA
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
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
                onClick={() => window.open('https://t.me/PySisBot', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar con PySis
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
              className="mx-auto w-64 h-64 rounded-full shadow-lg bg-white/50 backdrop-blur-md"
              alt="Interfaz del chatbot PySys AI mostrando una conversación de aprendizaje de Python"
              src="https://images.unsplash.com/photo-1675023035272-3426884896f8?auto=format&fit=crop&w=256&h=256&q=80"
            />
          </motion.div>
        </div>
      </section>
 
      <div className="section-divider"></div>
 
      <section id="sobrenosotros" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Qué es PySys?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                PySis es una mentora de programación revolucionaria basada en inteligencia artificial, diseñada específicamente para enseñar Python a principiantes de una manera completamente nueva y accesible.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nuestra misión es democratizar el aprendizaje de la programación, eliminando las barreras tradicionales y ofreciendo una experiencia de aprendizaje personalizada, conversacional y disponible las 24 horas del día.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                A través de Telegram, PySis se convierte en tu compañera de aprendizaje ideal: paciente, siempre disponible y capaz de adaptarse a tu ritmo y estilo de aprendizaje único.
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
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <span className="text-2xl font-bold text-gray-900 block">500+</span>
                <span className="text-gray-600">Tyzys</span>
              </div>
              
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <span className="text-2xl font-bold text-gray-900 block">1,200+</span>
                <span className="text-gray-600">Lecciones</span>
              </div>
              
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <span className="text-2xl font-bold text-gray-900 block">24/7</span>
                <span className="text-gray-600">Disponible</span>
              </div>
              
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <span className="text-2xl font-bold text-gray-900 block">95%</span>
                <span className="text-600">Satisfacción</span>
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
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg">
              <Code className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aprendizaje Interactivo</h3>
              <p className="text-gray-600">
                Conversaciones naturales que hacen que aprender Python sea tan fácil como chatear con un amigo
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg">
              <Target className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalizado</h3>
              <p className="text-gray-600">
                Adapta el contenido y la velocidad de aprendizaje según tu nivel y preferencias personales
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg">
              <TrendingUp className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Progreso Visible</h3>
              <p className="text-gray-600">
                Seguimiento detallado de tu progreso con métricas claras y motivadoras
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Nueva Sección: ¿Qué es Tyzy? y Nuestro Propósito */}
      <section id="queestyzy" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg h-full flex flex-col"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                🌸 ¿Qué es Tyzy?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tyzy, en el lenguaje muisca, significa persona amada.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Y eso es exactamente lo que queremos que sientas: que eres valiosa, bienvenida y profundamente apreciada.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Para nosotras, cada futura programadora que llega aquí no es solo una estudiante… es una Tyzy, una parte esencial de esta comunidad que sueña con transformar el mundo con tecnología y ternura.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pero Tyzy no es solo un nombre bonito. Es una filosofía. Un recordatorio constante de que tu historia, tu voz y tu crecimiento importan.
              </p>
            </motion.div>

            <motion.div
              id="nuestroproposito" // ID para la navegación
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg h-full flex flex-col"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                🌱 Nuestro propósito contigo
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nuestro mayor deseo es que aprendas a programar, sí…
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pero también que descubras tu poder, tu creatividad, tu voz.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Queremos que salgas de aquí no solo sabiendo escribir código, sino también sabiendo que puedes construir lo que imagines.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Que te conectes con otras Tyzys, que encuentres guía, amistad y nuevas oportunidades.
                Este es un punto de partida, no un destino.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Y si alguna vez dudas de ti misma, recuerda esto:<br/>
                No estás sola. Nos tienes. Y creemos profundamente en ti.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      <div id="ranking"> 
        <Ranking /> 
      </div>
 
      <div className="section-divider"></div>
 
      <section id="estadisticas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Panel de Impacto PySis
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Descubre el impacto real de PySys en la comunidad de estudiantes de Python
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-purple-600" />
                Distribución por nivel de avance
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={nivelAvanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#555" 
                    angle={-30} 
                    textAnchor="end" 
                    height={70} // Aumentado el alto para las etiquetas
                    interval={0} 
                    tickFormatter={(tick) => {
                      // Solo muestra la parte "Día X-Y"
                      const match = tick.match(/\(Día\s(\d+–\d+)\)/);
                      return match ? `Día ${match[1]}` : tick;
                    }}
                  /> 
                  <YAxis stroke="#555" />
                  <Tooltip 
                    formatter={(value) => [`Tyzys: ${value}`]} 
                    labelFormatter={(label) => label} 
                  />
                  <Legend />
                  <Bar dataKey="value" fill="#6A329F"> 
                    {
                      nivelAvanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS_NIVEL_AVANCE[index % COLORS_NIVEL_AVANCE.length]} />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-purple-600" />
                Porcentaje de constancia
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={constanciaData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60} 
                    outerRadius={100}
                    fill="#6A329F" 
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {constanciaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_CONSTANCIA[index % COLORS_CONSTANCIA.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Porcentaje']} 
                  /> 
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-500" />
                Aprendices activas hoy
              </h3>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-6xl font-extrabold text-purple-700 mt-4 mb-2 counting-animation"
              >
                {aprendicesActivasHoy}
              </motion.div>
              <p className="text-gray-600 text-lg">Tyzys usando PySys en las últimas 24 horas.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Link className="w-6 h-6 mr-3 text-blue-600" />
                Conexiones Tyzy–Mentora
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={conexionesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="semana" stroke="#555" />
                  <YAxis stroke="#555" />
                  <Tooltip formatter={(value) => [`Tyzys: ${value}`]} /> 
                  <Legend />
                  <Line type="monotone" dataKey="conexiones" stroke="#6A329F" activeDot={{ r: 8 }} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Listo para unirte a nuestra comunidad?
              </h3>
              <p className="text-gray-600 mb-6">
                Más de 500 Tyzys ya están aprendiendo Python con PySys. ¡Sé el próximo en dominar la programación!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full pulse-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://t.me/PySisBot', '_blank')}
              >
                <Bot className="w-5 h-5 mr-2" />
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="conexiones" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conexión Tyzy - Mentora
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Un espacio para conectar mentoras con futuras programadoras. Inspira, guía y transforma.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Quieres ser Mentora?
              </h3>
              <p className="text-gray-700 mb-6">
                Deja tus datos para que podamos contactarte y contarte más sobre esta linda comunidad.
              </p>
              <form className="space-y-4" onSubmit={handleSubmitMentorForm}>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-purple-400 bg-white text-gray-800"
                  required
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-purple-400 bg-white text-gray-800"
                  required
                />
                <textarea
                  placeholder="¿Por qué te gustaría ser mentora?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-purple-400 bg-white text-gray-800"
                  rows="4"
                  required
                ></textarea>
                
                <div className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="checkbox"
                    id="publicProfile"
                    className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                    checked={isPublicProfile}
                    onChange={(e) => setIsPublicProfile(e.target.checked)}
                  />
                  <label htmlFor="publicProfile">Quiero que mi perfil sea público</label>
                </div>

                <Button type="submit" className="bg-purple-600 text-white w-full py-3">
                  Enviar solicitud
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestras Mentoras
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {allMentors.length > 0 ? (
                  allMentors.map((mentor) => (
                    <motion.div
                      key={mentor.id}
                      className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => openMentorModal(mentor)}
                    >
                      <img
                        src={mentor.avatarUrl || "https://placehold.co/96x96/cccccc/333333?text=N/A"} 
                        alt={mentor.name}
                        className="w-24 h-24 rounded-full object-cover mb-2 shadow-md border-2 border-gray-200" 
                        loading="lazy"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/cccccc/333333?text=N/A"; }} 
                      />
                      <span className="text-center font-semibold text-gray-800 text-sm">
                        {mentor.name.split('(')[0].trim()}
                      </span>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-600 text-center">No hay mentoras disponibles aún.</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
 
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/logoPySys.png" alt="PySys Logo" className="w-12 h-12 rounded-full" />
            <span className="text-3xl font-bold text-white">PySys</span>
          </div>
          
          <p className="text-purple-200 mb-6 max-w-md mx-auto">
            Transformando la educación en programación, una conversación a la vez.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button 
              variant="ghost" 
              className="text-purple-200 hover:text-white hover:bg-purple-800/50"
              onClick={() => window.open('https://t.me/PySisBot', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </div>
          
          <div className="border-t border-purple-700 pt-6">
            <p className="text-purple-300 text-sm">
              © 2025 PySys. Todos los derechos reservados. Hecho con ❤️ para las futuras Tyzys.
            </p>
          </div>
        </div>
      </footer>

      {isModalOpen && selectedMentor && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeMentorModal}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeMentorModal} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center mb-6">
              <img 
                src={selectedMentor.avatarUrl || "https://placehold.co/128x128/cccccc/333333?text=N/A"} 
                alt={selectedMentor.name} 
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-2 border-gray-200"
                loading="lazy" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/cccccc/333333?text=N/A"; }} 
              />
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
                {selectedMentor.name.split('(')[0].trim()}
              </h3>
              <p className="text-md text-gray-600 text-center mb-4">
                {selectedMentor.name.includes('(') ? selectedMentor.name.split('(')[1].replace(')', '') : ''}
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedMentor.description}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
 
export default App;
