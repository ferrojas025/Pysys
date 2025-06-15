import React, { useState, useEffect } from 'react';
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
const COLORS_NIVEL_AVANCE = ['#9C27B0', '#BA68C8', '#E0BBE4', '#F8BBD0'];

const constanciaData = [
    { name: "Constantes", value: 62 },
    { name: "Irregulares", value: 38 }
];
const COLORS_CONSTANCIA = ['#9C27B0', '#CE93D8'];

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
    console.log("Nombre completo:", e.target?.[0]?.value);
    console.log("Correo electrónico:", e.target?.[1]?.value);
    console.log("Descripción:", e.target?.[2]?.value);
    console.log("Perfil público:", isPublicProfile);
    e.target?.reset();
    setIsPublicProfile(false);
};

return (
    <div className="min-h-screen bg-purple-50">
        <Toaster />

        <nav
            className="fixed top-0 w-full z-50 bg-white shadow-md"
            style={{ backgroundColor: '#EDE7F6' }}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                        style={{ cursor: 'pointer' }}
                    >
                        <img src="/logoPySys.png" alt="PySys Logo" className="w-10 h-10 rounded-full" />
                        <span className="text-2xl font-bold text-purple-900">PySys</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['Inicio', 'Sobre Nosotros', 'Ranking', 'Estadísticas', 'Conexiones'].map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '').replace('?', '').replace('á', 'a'))}
                                className={`text-purple-700 hover:text-indigo-900 transition-colors ${
                                    activeSection === item.toLowerCase().replace(/\s+/g, '').replace('?', '').replace('á', 'a') ? 'text-indigo-900 font-semibold' : ''
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>

        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 pt-20">
            <div className="container mx-auto px-6 text-center">
                <div
                    className="max-w-4xl mx-auto"
                >
                    <h1
                        className="text-5xl md:text-7xl font-bold text-purple-900 mb-6 leading-tight"
                    >
                        Crea tu camino{' '}
                        <span className="bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                            PySys
                        </span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-purple-700 mb-8 leading-relaxed"
                    >
                        Tu Mentora Personal de IA
                    </p>

                    <p
                        className="text-lg text-purple-600 mb-12 max-w-2xl mx-auto"
                    >
                        Una nueva forma de aprender a programar: conversacional, a tu ritmo y siempre disponible para ti en Telegram
                    </p>

                    <div
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full pulse-glow transform hover:scale-105 transition-all duration-300"
                            onClick={() => window.open('[https://t.me/PySisBot](https://t.me/PySisBot)', '_blank')}
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Hablar con PySys
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>

                <div
                    className="mt-16 floating-animation"
                >
                    <img
                        className="mx-auto w-64 h-64 rounded-full shadow-lg bg-white/50 backdrop-blur-md"
                        alt="Interfaz del chatbot PySys AI mostrando una conversación de aprendizaje de Python"
                        src="[https://images.unsplash.com/photo-1675023035272-3426884896f8?auto=format&fit=crop&w=256&h=256&q=80](https://images.unsplash.com/photo-1675023035272-3426884896f8?auto=format&fit=crop&w=256&h=256&q=80)"
                    />
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        <section id="sobrenosotros" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                        ¿Qué es PySys?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div
                        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg text-left"
                    >
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            PySys es una mentora de programación revolucionaria basada en inteligencia artificial, diseñada específicamente para enseñar Python a principiantes de una manera completamente nueva y accesible.
                        </p>

                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Nuestra misión es democratizar el aprendizaje de la programación, eliminando las barreras tradicionales y ofreciendo una experiencia de aprendizaje personalizada, conversacional y disponible las 24 horas del día.
                        </p>

                        <p className="text-lg text-purple-700 leading-relaxed">
                            A través de Telegram, PySys se convierte en tu compañera de aprendizaje ideal: paciente, siempre disponible y capaz de adaptarse a tu ritmo y estilo de aprendizaje único.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                            <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <span className="text-2xl font-bold text-purple-900 block">500+</span>
                            <span className="text-purple-600">Tyzys</span>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                            <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <span className="text-2xl font-bold text-purple-900 block">1,200+</span>
                            <span className="text-purple-600">Lecciones</span>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                            <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <span className="text-2xl font-bold text-purple-900 block">24/7</span>
                            <span className="text-purple-600">Disponible</span>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                            <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                            <span className="text-2xl font-bold text-purple-900 block">95%</span>
                            <span className="text-purple-600">Satisfacción</span>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-16 grid md:grid-cols-3 gap-8 mb-16"
                >
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg">
                        <Code className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-purple-900 mb-4">Aprendizaje Interactivo</h3>
                        <p className="text-purple-600">
                            Conversaciones naturales que hacen que aprender Python sea tan fácil como chatear con un amigo
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg">
                        <Target className="w-16 h-16 text-teal-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-purple-900 mb-4">Personalizado</h3>
                        <p className="text-purple-600">
                            Adapta el contenido y la velocidad de aprendizaje según tu nivel y preferencias personales
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg">
                        <TrendingUp className="w-16 h-16 text-lime-500 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-purple-900 mb-4">Progreso Visible</h3>
                        <p className="text-purple-600">
                            Seguimiento detallado de tu progreso con métricas claras y motivadoras
                        </p>
                    </div>
                </div>

                <div
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg h-full flex flex-col text-left">
                        <h3 className="text-3xl font-bold text-purple-900 mb-6 text-center">
                            🌸 ¿Qué es Tyzy?
                        </h3>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Tyzy, en el lenguaje muisca, significa persona amada.
                        </p>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Y eso es exactamente lo que queremos que sientas: que eres valiosa, bienvenida y profundamente apreciada.
                        </p>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Para nosotras, cada futura programadora que llega aquí no es solo una estudiante… es una Tyzy, una parte esencial de esta comunidad que sueña con transformar el mundo con tecnología y ternura.
                        </p>
                        <p className="text-lg text-purple-700 leading-relaxed">
                            Pero Tyzy no es solo un nombre bonito. Es una filosofía. Un recordatorio constante de que tu historia, tu voz y tu crecimiento importan.
                        </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg h-full flex flex-col text-left">
                        <h3 className="text-3xl font-bold text-purple-900 mb-6 text-center">
                            🌱 Nuestro propósito contigo
                        </h3>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Nuestro mayor deseo es que aprendas a programar, sí…
                        </p>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Pero también que descubras tu poder, tu creatividad, tu voz.
                        </p>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Queremos que salgas de aquí no solo sabiendo escribir código, sino también sabiendo que puedes construir lo que imagines.
                        </p>
                        <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                            Que te conectes con otras Tyzys, que encuentres guía, amistad y nuevas oportunidades.
                            Este es un punto de partida, no un destino.
                        </p>
                        <p className="text-lg text-purple-700 leading-relaxed font-semibold">
                            Y si alguna vez dudas de ti misma, recuerda esto:<br/>
                            No estás sola. Nos tienes. Y creemos profundamente en ti.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <div className="section-divider"></div>

        <div id="ranking">
            <Ranking />
        </div>

        <div className="section-divider"></div>

        <section id="estadisticas" className="py-20 bg-purple-50">
            <div className="container mx-auto px-6">
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                        Panel de Impacto PySys
                    </h2>
                    <p className="text-xl text-purple-700 max-w-2xl mx-auto">
                        Descubre el impacto real de PySys en la comunidad de estudiantes de Python
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div
                        className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
                    >
                        <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                            <BarChart3 className="w-6 h-6 mr-3 text-indigo-600" />
                            Distribución por nivel de avance
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart layout="vertical" data={nivelAvanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    stroke="#555"
                                    width={100}
                                    tickFormatter={(tick) => {
                                        const match = tick.match(/\(Día\s(\d+–\d+)\)/);
                                        return match ? `Día ${match?.[1]}` : tick;
                                    }}
                                />
                                <XAxis
                                    dataKey="value"
                                    type="number"
                                    stroke="#555"
                                    label={{ value: 'Tyzys', position: 'insideBottomRight', offset: 0, fill: '#555' }}
                                />
                                <Tooltip
                                    formatter={(value) => [`Tyzys: ${value}`]}
                                    labelFormatter={(label) => label}
                                />
                                <Legend />
                                <Bar dataKey="value" fill="#9C27B0">
                                    {
                                        nivelAvanceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS_NIVEL_AVANCE?.[index % COLORS_NIVEL_AVANCE.length]} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div
                        className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
                    >
                        <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                            <TrendingUp className="w-6 h-6 mr-3 text-indigo-600" />
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
                                    fill="#9C27B0"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {constanciaData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS_CONSTANCIA?.[index % COLORS_CONSTANCIA.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => [`${value}%`, 'Porcentaje']}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div
                        className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center"
                    >
                        <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center justify-center">
                            <Zap className="w-8 h-8 mr-3 text-orange-500" />
                            Aprendices activas hoy
                        </h3>
                        <div
                            className="text-6xl font-extrabold text-indigo-700 mt-4 mb-2 counting-animation"
                        >
                            {aprendicesActivasHoy}
                        </div>
                        <p className="text-purple-600 text-lg">Tyzys usando PySys en las últimas 24 horas.</p>
                    </div>

                    <div
                        className="chart-container bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
                    >
                        <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                            <Link className="w-6 h-6 mr-3 text-blue-600" />
                            Conexiones Tyzy–Mentora
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={conexionesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="semana" stroke="#555" />
                                <YAxis stroke="#555" />
                                <Tooltip formatter={(value) => [`Tyzys: ${value}`]} />
                                <Legend />
                                <Line type="monotone" dataKey="conexiones" stroke="#9C27B0" activeDot={{ r: 8 }} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div
                    className="mt-16 text-center"
                >
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
                        <h3 className="text-2xl font-bold text-purple-900 mb-4">
                            ¿Listo para unirte a nuestra comunidad?
                        </h3>
                        <p className="text-purple-600 mb-6">
                            Más de 500 Tyzys ya están aprendiendo Python con PySys. ¡Sé el próximo en dominar la programación!
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full pulse-glow transform hover:scale-105 transition-all duration-300"
                            onClick={() => window.open('[https://t.me/PySisBot](https://t.me/PySisBot)', '_blank')}
                        >
                            <Bot className="w-5 h-5 mr-2" />
                            Comenzar Ahora
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section id="conexiones" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                        Conexión Tyzy - Mentora
                    </h2>
                    <p className="text-xl text-purple-700 max-w-2xl mx-auto">
                        Un espacio para conectar mentoras con futuras programadoras. Inspira, guía y transforma.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div
                        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-purple-900 mb-4">
                            ¿Quieres ser Mentora?
                        </h3>
                        <p className="text-purple-700 mb-6">
                            Deja tus datos para que podamos contactarte y contarte más sobre esta linda comunidad.
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmitMentorForm}>
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-purple-400 bg-white text-purple-800"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-purple-400 bg-white text-purple-800"
                                required
                            />
                            <textarea
                                placeholder="¿Por qué te gustaría ser mentora?"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-purple-400 bg-white text-purple-800"
                                rows="4"
                                required
                            ></textarea>

                            <div className="flex items-center space-x-2 text-purple-700">
                                <input
                                    type="checkbox"
                                    id="publicProfile"
                                    className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                                    checked={isPublicProfile}
                                    onChange={(e) => setIsPublicProfile(e.target.checked)}
                                />
                                <label htmlFor="publicProfile">Quiero que mi perfil sea público</label>
                            </div>

                            <Button type="submit" className="bg-indigo-600 text-white w-full py-3 hover:bg-indigo-700">
                                Enviar solicitud
                            </Button>
                        </form>
                    </div>

                    <div
                        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-purple-900 mb-6">
                            Nuestras Mentoras
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                            {allMentors.length > 0 ? (
                                allMentors.map((mentor) => (
                                    <div
                                        key={mentor.id}
                                        className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                                        style={{ transition: 'transform 0.3s ease-in-out' }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        onClick={() => openMentorModal(mentor)}
                                    >
                                        <img
                                            src={mentor.avatarUrl || "[https://placehold.co/96x96/cccccc/333333?text=N/A](https://placehold.co/96x96/cccccc/333333?text=N/A)"}
                                            alt={mentor.name}
                                            className="w-24 h-24 rounded-full object-cover mb-2 shadow-md border-2 border-gray-200"
                                            loading="lazy"
                                            onError={(e) => { e.target.onerror = null; e.target.src="[https://placehold.co/96x96/cccccc/333333?text=N/A](https://placehold.co/96x96/cccccc/333333?text=N/A)"; }}
                                        />
                                        <span className="text-center font-semibold text-purple-800 text-sm">
                                            {mentor.name.split('(')[0].trim()}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-purple-600 text-center">No hay mentoras disponibles aún.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                    <img src="/logoPySys.png" alt="PySys Logo" className="w-12 h-12 rounded-full" />
                    <span className="text-3xl font-bold text-white">PySys</span>
                </div>

                <p className="text-indigo-200 mb-6 max-w-md mx-auto">
                    Transformando la educación en programación, una conversación a la vez.
                </p>

                <div className="flex justify-center space-x-6 mb-8">
                    <Button
                        variant="ghost"
                        className="text-indigo-200 hover:text-white hover:bg-indigo-800/50"
                        onClick={() => window.open('[https://t.me/PySisBot](https://t.me/PySisBot)', '_blank')}
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Telegram
                    </Button>
                </div>

                <div className="border-t border-indigo-700 pt-6">
                    <p className="text-indigo-300 text-sm">
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
                <div
                    className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
                    style={{ transform: 'scale(1)', opacity: 1, transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out' }}
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
                            src={selectedMentor.avatarUrl || "[https://placehold.co/128x128/cccccc/333333?text=N/A](https://placehold.co/128x128/cccccc/333333?text=N/A)"}
                            alt={selectedMentor.name}
                            className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-2 border-gray-200"
                            loading="lazy"
                            onError={(e) => { e.target.onerror = null; e.target.src="[https://placehold.co/128x128/cccccc/333333?text=N/A](https://placehold.co/128x128/cccccc/333333?text=N/A)"; }}
                        />
                        <h3 className="text-3xl font-bold text-purple-900 text-center mb-2">
                            {selectedMentor.name.split('(')[0].trim()}
                        </h3>
                        <p className="text-md text-purple-600 text-center mb-4">
                            {selectedMentor.name.includes('(') ? selectedMentor.name.split('(')[1].replace(')', '') : ''}
                        </p>
                    </div>
                    <p className="text-purple-700 text-lg leading-relaxed">
                        {selectedMentor.description}
                    </p>
                </div>
            </div>
        )}
    </div>
);
}

export default App;
