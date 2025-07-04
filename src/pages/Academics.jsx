import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBook, FiUsers, FiTrendingUp, FiAward, FiGlobe, FiCpu, FiMusic, FiActivity } = FiIcons;

const Academics = () => {
  const programs = [
    {
      icon: FiBook,
      title: 'Core Academics',
      description: 'Comprehensive curriculum in Mathematics, Science, English, and Social Studies',
      subjects: ['Advanced Mathematics', 'Physics & Chemistry', 'Literature & Writing', 'World History']
    },
    {
      icon: FiCpu,
      title: 'STEM Program',
      description: 'Cutting-edge Science, Technology, Engineering, and Mathematics education',
      subjects: ['Computer Science', 'Robotics', 'Engineering Design', 'Data Analysis']
    },
    {
      icon: FiMusic,
      title: 'Arts & Creativity',
      description: 'Fostering creativity through visual arts, music, and performing arts',
      subjects: ['Visual Arts', 'Music Theory', 'Theater Arts', 'Digital Media']
    },
    {
      icon: FiGlobe,
      title: 'World Languages',
      description: 'Preparing students for global citizenship through language learning',
      subjects: ['Spanish', 'French', 'Mandarin', 'Cultural Studies']
    },
  ];

  const achievements = [
    {
      icon: FiAward,
      title: 'Academic Excellence',
      stats: '98% College Acceptance Rate'
    },
    {
      icon: FiTrendingUp,
      title: 'Test Scores',
      stats: 'Top 5% Nationally'
    },
    {
      icon: FiUsers,
      title: 'Class Size',
      stats: 'Average 18 Students'
    },
    {
      icon: FiActivity,
      title: 'AP Courses',
      stats: '25+ Advanced Placement'
    },
  ];

  const facilities = [
    {
      name: 'Science Laboratories',
      description: 'State-of-the-art labs for Physics, Chemistry, and Biology',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop'
    },
    {
      name: 'Technology Center',
      description: 'Modern computer labs with latest software and equipment',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
    },
    {
      name: 'Library & Media Center',
      description: 'Extensive collection of books, digital resources, and study spaces',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    },
    {
      name: 'Arts Studios',
      description: 'Creative spaces for visual arts, music, and multimedia projects',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Academic Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Comprehensive education programs designed to challenge and inspire every student
            </motion.p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600">Diverse programs to meet every student's interests and goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <SafeIcon icon={program.icon} className="h-10 w-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Subjects:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {program.subjects.map((subject, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Achievements</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence shows in our results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <SafeIcon icon={achievement.icon} className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-2xl font-bold text-blue-600">{achievement.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Modern learning environments that inspire and engage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Curriculum Overview</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Our curriculum is designed to challenge students while providing the support they need to succeed. 
                  We offer a comprehensive range of courses from foundational subjects to advanced placement options.
                </p>
                <p>
                  Students benefit from small class sizes, individualized attention, and innovative teaching methods 
                  that prepare them for college and career success.
                </p>
                <p>
                  Our interdisciplinary approach helps students make connections across subjects and develop 
                  critical thinking skills essential for the 21st century.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Grade Level Programs</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Elementary (K-5)</span>
                  <span className="text-blue-600">Foundation Building</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">Middle School (6-8)</span>
                  <span className="text-green-600">Skill Development</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">High School (9-12)</span>
                  <span className="text-purple-600">College Preparation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;