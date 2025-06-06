// src/components/Ranking.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, User, BookOpen, TrendingUp } from 'lucide-react';

// Componente para una tarjeta de estudiante individual
const StudentCard = ({ student, rank }) => {
  const averageScore =
    student.completed_lessons.length > 0
      ? student.completed_lessons.reduce((acc, lesson) => acc + lesson.evaluation_score, 0) /
        student.completed_lessons.length
      : 0;

  const rankColor =
    rank === 1
      ? 'border-yellow-400'
      : rank === 2
      ? 'border-gray-400'
      : rank === 3
      ? 'border-yellow-600'
      : 'border-transparent';

  return (
    <motion.div
      className={`glass-effect p-6 rounded-2xl flex items-center space-x-4 border-2 ${rankColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.1 }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {rank}
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-bold text-white flex items-center">
          {student.user_name}
          {rank === 1 && <Crown className="w-5 h-5 ml-2 text-yellow-400" />}
        </h4>
        <div className="flex items-center text-purple-200 text-sm mt-1">
          <BookOpen className="w-4 h-4 mr-2" />
          <span>{student.completed_lessons.length} Lecciones</span>
          <span className="mx-2">|</span>
          <Star className="w-4 h-4 mr-2" />
          <span>Promedio: {averageScore.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Componente principal del Ranking
const Ranking = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/stats/students');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos de los estudiantes.');
        }
        const data = await response.json();
        
        // Ordenar estudiantes por lecciones completadas y luego por promedio
        const sortedStudents = data.sort((a, b) => {
          if (b.completed_lessons.length !== a.completed_lessons.length) {
            return b.completed_lessons.length - a.completed_lessons.length;
          }
          const avgA = a.completed_lessons.length > 0 ? a.completed_lessons.reduce((acc, l) => acc + l.evaluation_score, 0) / a.completed_lessons.length : 0;
          const avgB = b.completed_lessons.length > 0 ? b.completed_lessons.reduce((acc, l) => acc + l.evaluation_score, 0) / b.completed_lessons.length : 0;
          return avgB - avgA;
        });

        setStudents(sortedStudents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Cargando ranking...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400">Error: {error}</div>;
  }

  return (
    <section id="ranking" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ranking de Estudiantes
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Mira quiénes lideran nuestra comunidad de aprendizaje.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <StudentCard key={student.user_telegram_id} student={student} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ranking;