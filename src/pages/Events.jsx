import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiMapPin, FiUsers, FiMusic, FiBookOpen, FiActivity, FiAward } = FiIcons;

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: 'Winter Concert',
      date: '2024-12-20',
      time: '7:00 PM',
      location: 'Main Auditorium',
      category: 'Arts',
      icon: FiMusic,
      description: 'Annual winter concert featuring our talented music students and choir.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Science Fair',
      date: '2024-12-18',
      time: '9:00 AM',
      location: 'Gymnasium',
      category: 'Academic',
      icon: FiBookOpen,
      description: 'Students showcase their innovative science projects and research.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Basketball Championship',
      date: '2024-12-22',
      time: '3:00 PM',
      location: 'Sports Complex',
      category: 'Sports',
      icon: FiActivity,
      description: 'Regional basketball championship finals - come support our Eagles!',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Academic Awards Ceremony',
      date: '2024-12-25',
      time: '2:00 PM',
      location: 'Main Auditorium',
      category: 'Academic',
      icon: FiAward,
      description: 'Recognizing outstanding academic achievements and student excellence.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Parent-Teacher Conference',
      date: '2024-12-28',
      time: '1:00 PM',
      location: 'Various Classrooms',
      category: 'Academic',
      icon: FiUsers,
      description: 'Individual meetings to discuss student progress and goals.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'New Year Celebration',
      date: '2024-12-31',
      time: '10:00 AM',
      location: 'Cafeteria',
      category: 'Social',
      icon: FiCalendar,
      description: 'Ring in the new year with fun activities and refreshments.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop'
    },
  ];

  const categoryColors = {
    'Arts': 'bg-purple-100 text-purple-800',
    'Academic': 'bg-blue-100 text-blue-800',
    'Sports': 'bg-green-100 text-green-800',
    'Social': 'bg-yellow-100 text-yellow-800',
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventsForDate = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return events.filter(event => event.date === dateStr);
  };

  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop)',
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
              School Events
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Stay connected with our vibrant school community through exciting events and activities
            </motion.p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting upcoming activities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                    <SafeIcon icon={event.icon} className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-500">
                      <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                      <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <SafeIcon icon={FiClock} className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar & All Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <SafeIcon icon={FiCalendar} className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <SafeIcon icon={FiCalendar} className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day) => {
                  const dayEvents = getEventsForDate(day);
                  const isCurrentMonth = isSameMonth(day, currentMonth);
                  const isCurrentDay = isToday(day);
                  
                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        p-2 text-sm rounded-lg transition-colors relative
                        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                        ${isCurrentDay ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                        ${dayEvents.length > 0 ? 'font-bold' : ''}
                      `}
                    >
                      {format(day, 'd')}
                      {dayEvents.length > 0 && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* All Events List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">All Events</h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <SafeIcon icon={event.icon} className="h-5 w-5 text-gray-400 mr-2" />
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                            {event.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                            <span>{format(new Date(event.date), 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center">
                            <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-1" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-20 h-20 object-cover rounded-lg ml-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Categories</h2>
            <p className="text-xl text-gray-600">Discover the variety of activities we offer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(categoryColors).map(([category, colorClass], index) => {
              const categoryEvents = events.filter(event => event.category === category);
              const icons = {
                'Arts': FiMusic,
                'Academic': FiBookOpen,
                'Sports': FiActivity,
                'Social': FiUsers,
              };
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <SafeIcon icon={icons[category]} className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">{categoryEvents.length} upcoming events</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
                    View Events
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;