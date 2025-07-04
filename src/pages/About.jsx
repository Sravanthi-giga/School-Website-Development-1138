import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiEye, FiHeart, FiStar, FiUsers, FiBookOpen } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from academics to character development.'
    },
    {
      icon: FiHeart,
      title: 'Compassion',
      description: 'We foster a caring environment where every student feels valued, supported, and respected.'
    },
    {
      icon: FiStar,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to enhance learning and prepare students for the future.'
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'We believe in the power of collaboration and building strong relationships within our school family.'
    },
  ];

  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Principal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c19a5e40?w=300&h=300&fit=crop',
      bio: 'With over 20 years in education, Dr. Johnson brings passionate leadership and innovative vision to Brightwood Academy.'
    },
    {
      name: 'Mr. Michael Chen',
      position: 'Vice Principal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'Mr. Chen specializes in curriculum development and has been instrumental in our academic excellence programs.'
    },
    {
      name: 'Ms. Emily Rodriguez',
      position: 'Academic Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Ms. Rodriguez oversees our comprehensive academic programs and ensures every student reaches their potential.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop)',
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
              About Brightwood Academy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              A tradition of excellence in education, fostering growth, creativity, and leadership in every student
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-lg p-8"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiTarget} className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700">
                To provide exceptional education that empowers students to become confident, creative, and 
                responsible global citizens who make meaningful contributions to their communities and the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-lg p-8"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiEye} className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700">
                To be the premier educational institution that nurtures innovation, critical thinking, and 
                character development, preparing students for success in an ever-changing world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <SafeIcon icon={value.icon} className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded in 1999, Brightwood Academy began as a small community school with a big vision: 
                  to provide world-class education that prepares students for the challenges of tomorrow.
                </p>
                <p>
                  Over the past 25 years, we have grown from a single building with 50 students to a 
                  comprehensive educational institution serving over 1,200 students from kindergarten through 
                  12th grade.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition as one of the top schools in the region, 
                  with our graduates consistently achieving success in top universities and careers worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop" 
                alt="School History" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the dedicated leaders who guide our school</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;