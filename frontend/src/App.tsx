import './App.css'
import ContactForm from './components/ContactForm';
import { motion } from "motion/react";
import VantaBackground from './components/VantaBackground';
import { BackgroundBeamsWithCollision } from './components/background-beams-with-collision';
import { FloatingNav } from './components/floating-navbar';
import { TracingBeam } from './components/tracing-beam';
import { BackgroundGradient } from './components/background-gradient';
import { FloatingProfileCard } from './components/floating-profile-card';
import { TechCarousel } from './components/TechCarousel';
import { HeroHighlight } from './components/hero-highlight';
import { frontendTech, backendTech, databaseTech, toolsTech } from './components/tech_stack';
import { useState, useEffect } from 'react';

function App() {
  // Dark mode state - shared between App and FloatingNav
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply dark mode to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Initialize dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  // Frontend tech stack data
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
      icon: (
        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badge: "Live"
    },
    {
      id: 2,
      title: "Mobile App",
      description: "A React Native mobile application with cross-platform compatibility. Includes push notifications, offline support, and smooth animations.",
      icon: (
        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      badge: "Demo"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization using D3.js and Chart.js. Features real-time data updates and customizable charts.",
      icon: (
        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Beta"
    },
    {
      id: 4,
      title: "API Development",
      description: "RESTful API built with Express.js and MongoDB. Includes authentication, rate limiting, and comprehensive documentation.",
      icon: (
        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      badge: "API"
    },
    // {
    //   id: 5,
    //   title: "E-commerce Platform",
    //   description: "A complete e-commerce solution with payment integration, inventory management, and admin dashboard.",
    //   icon: (
    //     <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    //     </svg>
    //   ),
    //   badge: "Shop"
    // }
  ];

  const isEvenNumberOfProjects = projects.length % 2 === 0;
  

  return (
    <div className="min-h-screen relative">
      {/* Global Background Effects - Fixed positioning for full viewport coverage */}
      <VantaBackground 
        color={0xff3f81}
        backgroundColor={0x23153c}
        backgroundAlpha={0.8}
        points={10}
        maxDistance={20}
        isDarkMode={isDarkMode}
        spacing={15}
        showDots={true}
        mouseCoeffX={1}
        mouseCoeffY={1}
      />
      <BackgroundBeamsWithCollision className="fixed inset-0 z-0">
        <div></div>
      </BackgroundBeamsWithCollision>

      {/* Content Sections - All positioned relative with proper z-index */}
      <FloatingNav 
        navItems={[
          { name: 'Introduction', link: '#introduction', icon: <i className="fas fa-home"></i> },
          { name: 'About Me', link: '#about', icon: <i className="fas fa-user"></i> },
          { name: 'Tech Stack', link: '#techstack', icon: <i className="fas fa-code"></i> },
          { name: 'Projects', link: '#projects', icon: <i className="fas fa-folder"></i> },
          { name: 'Contact', link: '#contact', icon: <i className="fas fa-envelope"></i> }
        ]}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        className="fixed bottom-4 right-4 z-50"
      />

      {/* Introduction Section - Full width, centered */}
      <div 
        id="introduction" 
        className="relative z-20 min-h-screen text-gray-900 dark:text-white flex items-center justify-center" 
        style={{ 
          scrollMarginTop: '80px',
          color: isDarkMode ? 'white' : '#111827' // Darker text for light mode
        }}
      >
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3
          }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-4"
            style={{
              textShadow: isDarkMode 
                ? '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(59, 130, 246, 0.4)'
                : '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(20, 184, 166, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6
            }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg"
            style={{
              textShadow: isDarkMode 
                ? '1px 1px 4px rgba(0, 0, 0, 0.9), 0 0 15px rgba(147, 51, 234, 0.9)'
                : '1px 1px 4px rgba(0, 0, 0, 0.3), 0 0 15px rgba(6, 182, 212, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.9
            }}
          >
            Fullstack AI Developer Ryan Hideo Jewik
          </motion.p>
        </motion.div>
      </div>
      
      {/* Main Content Layout - Using flex for responsive positioning */}
      <div className="flex relative z-20">
        {/* Profile Card Container - Takes fixed width, positioned relative to content */}
        <div className="w-[32rem] flex-shrink-0">
          <FloatingProfileCard
            name="Ryan Hideo Jewik"
            title="Full Stack AI Developer"
            location="Atascadero, CA"
            isDarkMode={isDarkMode}
            socialLinks={[
              {
                name: "GitHub",
                url: "https://github.com/ryanjewik",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ryanjewik/",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                name: "Email",
                url: "mailto:ryanjewik25@gmail.com",
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ]}
          />
        </div>
        
        {/* Main Content - Takes remaining space */}
        <div className="flex-1 min-w-0">
          <TracingBeam className="px-12">
            {/* About Me Section */}
            <motion.div 
              id="about"
              className="relative z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.25)] border border-gray-200/20 dark:border-gray-700/20 p-6 mx-0 my-8"
              style={{ 
                scrollMarginTop: '80px',
                backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                  style={{ color: isDarkMode ? 'white' : '#1f2937' }} // Force text color
                >
                  About Me
                </h2>
                <div 
                  className="w-24 h-1 mx-auto rounded-full"
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(to right, #3b82f6, #9333ea)'
                      : 'linear-gradient(to right, #14b8a6, #06b6d4)'
                  }}
                ></div>
              </motion.div>

              {/* Bio Section */}
              <motion.div 
                className="mb-8 -mx-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div 
                  className="relative rounded-2xl p-6 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(55, 65, 81, 0.6), rgba(88, 28, 135, 0.2))'
                      : 'linear-gradient(to bottom right, rgba(240, 253, 250, 0.8), rgba(255, 255, 255, 0.6), rgba(236, 254, 255, 0.8))',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.5)' : 'rgba(20, 184, 166, 0.5)'
                  }}
                >
                  {/* Decorative gradient overlay */}
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: isDarkMode 
                        ? 'linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
                        : 'linear-gradient(to right, rgba(20, 184, 166, 0.05), rgba(6, 182, 212, 0.05))'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
                      style={{ color: isDarkMode ? 'white' : '#111827' }} // Darker text for light mode
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                        style={{
                          background: isDarkMode 
                            ? 'linear-gradient(to bottom right, #3b82f6, #9333ea)'
                            : 'linear-gradient(to bottom right, #14b8a6, #06b6d4)'
                        }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      Quick Bio
                    </h3>
                    <p 
                      className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                      style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Darker text for light mode
                    >
                      With backgrounds in both computer science and data science, I specialize in building full-stack applications that leverage AI technologies. My passion lies in creating innovative solutions that enhance user experiences and drive business value.
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-1 rounded-full"
                    style={{
                      background: isDarkMode 
                        ? 'linear-gradient(to right, #3b82f6, #9333ea)'
                        : 'linear-gradient(to right, #14b8a6, #06b6d4)'
                    }}
                  ></div>
                </div>
              </motion.div>

              <div className="space-y-8">
                {/* Education Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div 
                    className="bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
                    style={{ 
                      backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(248, 250, 252, 0.8)' // Lighter background for light mode
                    }}
                  >
                    {/* Header Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <h3 
                        className="text-2xl font-semibold text-gray-900 dark:text-white"
                        style={{ color: isDarkMode ? 'white' : '#111827' }} // Darker text for light mode
                      >
                        Education
                      </h3>
                    </div>
                    
                    {/* Education Items */}
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 pl-2 text-left">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            Bachelor's Degree
                          </h4>
                          <p 
                            className="text-blue-600 dark:text-blue-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}
                          >
                            Computer Science
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            Chapman University • 2021-2025
                          </p>
                          <p 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            Focused on software engineering, algorithms, and system design
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 pl-2 text-left">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            Bachelor's Degree
                          </h4>
                          <p 
                            className="text-purple-600 dark:text-purple-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#c084fc' : '#7c3aed' }}
                          >
                            Data Science
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            Chapman University • 2021-2025
                          </p>
                          <p 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            Specialized in machine learning, statistical analysis, and data visualization
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1 bg-red-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 pl-2 text-left">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            Study Abroad
                          </h4>
                          <p 
                            className="text-orange-600 dark:text-orange-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#fb923c' : '#ea580c' }}
                          >
                            Temple University Japan
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            Tokyo, Japan • 2024
                          </p>
                          <p 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            International academic experience with cross-cultural learning and global perspectives
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div 
                    className="bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
                    style={{ 
                      backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(248, 250, 252, 0.8)' // Lighter background for light mode
                    }}
                  >
                    {/* Header Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 
                        className="text-2xl font-semibold text-gray-900 dark:text-white"
                        style={{ color: isDarkMode ? 'white' : '#111827' }} // Darker text for light mode
                      >
                        Certifications
                      </h3>
                    </div>
                    
                    {/* Certification Items */}
                    <div className="flex gap-4">
                      <div className="w-1 bg-green-500 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 pl-2 text-left">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            CompTIA Security+
                          </h4>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                            Certified
                          </span>
                        </div>
                        <p 
                          className="text-green-600 dark:text-green-400 font-medium text-left"
                          style={{ color: isDarkMode ? '#4ade80' : '#059669' }}
                        >
                          Cybersecurity Foundation
                        </p>
                        <p 
                          className="text-gray-600 dark:text-gray-400 text-left"
                          style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                        >
                          CompTIA • 2025
                        </p>
                        <p 
                          className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                          style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                        >
                          Validates cybersecurity skills including risk management, threat analysis, and incident response
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span 
                            className="text-sm text-gray-600 dark:text-gray-400"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            DoD 8570 Approved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <div 
                    className="bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
                    style={{ 
                      backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(248, 250, 252, 0.8)' // Lighter background for light mode
                    }}
                  >
                    {/* Header Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="2" y="9" width="20" height="10" rx="2" strokeWidth="2"/>
                          <path d="m7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" strokeWidth="2"/>
                          <path d="M12 13h.01" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 
                        className="text-2xl font-semibold text-gray-900 dark:text-white"
                        style={{ color: isDarkMode ? 'white' : '#111827' }} // Darker text for light mode
                      >
                        Experience
                      </h3>
                    </div>
                    
                    {/* Experience Items */}
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 pl-2 text-left">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            Data Science Intern
                          </h4>
                          <p 
                            className="text-orange-600 dark:text-orange-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#fb923c' : '#ea580c' }}
                          >
                            Chapman School of Pharmacy
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            Sep 2024 - March 2025
                          </p>
                          <ul 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left space-y-1"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            <li className="flex items-start">
                              <span className="text-orange-500 mr-2 mt-1.5 text-xs">●</span>
                              <span>Feature engineering, data wrangling, and cleaning on over 81 billion rows of health care data</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-500 mr-2 mt-1.5 text-xs">●</span>
                              <span>Employed numerous oversampling and undersampling techniques such as KNN, RUS, SMOTE, and GMMs to solve class imbalance problem in data</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-500 mr-2 mt-1.5 text-xs">●</span>
                              <span>Trained xgboost tree models to predict opioid related morbidity</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 pl-2 text-left">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            Software Engineering Research Assistant
                          </h4>
                          <p 
                            className="text-blue-600 dark:text-blue-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}
                          >
                            uIdeasLab
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            Sep 2024 - May 2025
                          </p>
                          <ul 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left space-y-1"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                              <span>Scraped, cleaned, and performed feature selection on app store reviews</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                              <span>Combined with IOS app data with Google Play Store Android data for preliminary analysis</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                              <span>Performed Sentiment Analysis on the combined data on Montessori Apps using Hugging Face</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 pl-2 text-left">
                          <h4 
                            className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                            style={{ color: isDarkMode ? 'white' : '#111827' }}
                          >
                            Project Engineering Intern
                          </h4>
                          <p 
                            className="text-purple-600 dark:text-purple-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#c084fc' : '#7c3aed' }}
                          >
                            L3 Harris
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            May 2022 - August 2022
                          </p>
                          <ul 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left space-y-1"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            <li className="flex items-start">
                              <span 
                                className="text-purple-500 mr-2 mt-1.5 text-xs"
                                style={{ color: isDarkMode ? '#a855f7' : '#7c3aed' }}
                              >●</span>
                              <span 
                                style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                              >
                                Reviewed 40+ Request for Dispositions (RFDs) documents against customer contracts to determine eligibility for customer billing
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span 
                                className="text-purple-500 mr-2 mt-1.5 text-xs"
                                style={{ color: isDarkMode ? '#a855f7' : '#7c3aed' }}
                              >●</span>
                              <span 
                                style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                              >
                                Administered Computer Software Components (CSCs) to address customer comments and integrate into deliver schedules
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span 
                                className="text-purple-500 mr-2 mt-1.5 text-xs"
                                style={{ color: isDarkMode ? '#a855f7' : '#7c3aed' }}
                              >●</span>
                              <span 
                                style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                              >
                                Performed 20+ investigations on engineering change requests
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Tech Stack Section */}
            <HeroHighlight
              containerClassName="relative z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.25)] border border-gray-200/20 dark:border-gray-700/20 p-8 mx-2 my-8 overflow-hidden h-auto min-h-0 flex-col items-stretch"
              isDarkMode={isDarkMode}
            >
              <motion.div 
                id="techstack"
                className="w-full"
                style={{ scrollMarginTop: '80px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Header */}
                <motion.div 
                  className="text-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    style={{ 
                      color: isDarkMode ? 'white' : '#111827', // Darker text for light mode
                      textShadow: isDarkMode 
                        ? '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(59, 130, 246, 0.9)'
                        : '2px 2px 8px rgba(0, 0, 0, 0.1), 0 0 20px rgba(20, 184, 166, 0.1)'
                    }}
                  >
                    Tech Stack
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Tech Stack Content */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="space-y-2">
                    {/* Frontend Carousel */}
                    <TechCarousel 
                      title="Frontend"
                      items={frontendTech}
                      accentColor="bg-blue-500"
                      isDarkMode={isDarkMode}
                    />

                    {/* Backend Carousel */}
                    <TechCarousel 
                      title="Backend"
                      items={backendTech}
                      accentColor="bg-green-500"
                      direction="reverse"
                      isDarkMode={isDarkMode}
                    />

                    {/* Databases Carousel */}
                    <TechCarousel 
                      title="Databases"
                      items={databaseTech}
                      accentColor="bg-orange-500"
                      isDarkMode={isDarkMode}
                    />

                    {/* Tools Carousel */}
                    <TechCarousel 
                      title="Tools"
                      items={toolsTech}
                      accentColor="bg-pink-500"
                      direction="reverse"
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </HeroHighlight>

            {/* Projects Section with dynamic layout */}
            <div id="projects" className="relative z-10 p-6" style={{ scrollMarginTop: '80px' }}>
              <h2 
                className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
                style={{ 
                  color: isDarkMode ? 'white' : '#111827', // Darker text for light mode
                  textShadow: isDarkMode 
                    ? '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(59, 130, 246, 0.9)'
                    : '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(20, 184, 166, 0.2)'
                }}
              >
                My Projects
              </h2>
              
              {isEvenNumberOfProjects ? (
                // Even number: 2-column grid layout
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                  {projects.map((project) => (
                    <BackgroundGradient key={project.id} className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900" isDarkMode={isDarkMode}>
                      <div 
                        className="bg-white dark:bg-zinc-900 rounded-[18px] p-4"
                        style={{ 
                          backgroundColor: isDarkMode ? '#18181b' : '#ffffff' 
                        }}
                      >
                        <div 
                          className="flex items-center justify-center h-56 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6"
                          style={{ 
                            backgroundColor: isDarkMode ? '#374151' : '#f3f4f6' 
                          }}
                        >
                          {project.icon}
                        </div>
                        <p 
                          className="text-lg sm:text-2xl text-black mt-6 mb-4 dark:text-neutral-200"
                          style={{ 
                            color: isDarkMode ? '#e5e7eb' : '#111827' 
                          }}
                        >
                          {project.title}
                        </p>
                        <p 
                          className="text-base text-neutral-600 dark:text-neutral-400"
                          style={{ 
                            color: isDarkMode ? '#9ca3af' : '#4b5563' 
                          }}
                        >
                          {project.description}
                        </p>
                        <button 
                          className="rounded-full pl-6 pr-2 py-2 text-gray-900 dark:text-white flex items-center space-x-2 bg-gray-200 dark:bg-black mt-6 text-sm font-bold"
                          style={{ 
                            backgroundColor: isDarkMode ? '#000000' : '#e5e7eb',
                            color: isDarkMode ? '#ffffff' : '#111827' 
                          }}
                        >
                          <span>View Project</span>
                          <span 
                            className="bg-gray-400 dark:bg-zinc-700 rounded-full text-xs px-3 py-1 text-white"
                            style={{ 
                              backgroundColor: isDarkMode ? '#3f3f46' : '#6b7280',
                              color: '#ffffff' 
                            }}
                          >
                            {project.badge}
                          </span>
                        </button>
                      </div>
                    </BackgroundGradient>
                  ))}
                </div>
              ) : (
                // Odd number: 1-column horizontal layout
                <div className="space-y-6 max-w-7xl mx-auto">
                  {projects.map((project) => (
                    <BackgroundGradient key={project.id} className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900" isDarkMode={isDarkMode}>
                      <div 
                        className="bg-white dark:bg-zinc-900 rounded-[18px] p-4"
                        style={{ 
                          backgroundColor: isDarkMode ? '#18181b' : '#ffffff' 
                        }}
                      >
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          {/* Image section */}
                          <div 
                            className="flex items-center justify-center w-full md:w-80 h-56 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"
                            style={{ 
                              backgroundColor: isDarkMode ? '#374151' : '#f3f4f6' 
                            }}
                          >
                            {project.icon}
                          </div>
                          
                          {/* Content section */}
                          <div className="flex-1 text-center md:text-left">
                            <p 
                              className="text-lg sm:text-2xl text-black mb-4 dark:text-neutral-200"
                              style={{ 
                                color: isDarkMode ? '#e5e7eb' : '#111827' 
                              }}
                            >
                              {project.title}
                            </p>
                            <p 
                              className="text-base text-neutral-600 dark:text-neutral-400 mb-6"
                              style={{ 
                                color: isDarkMode ? '#9ca3af' : '#4b5563' 
                              }}
                            >
                              {project.description}
                            </p>
                            <button 
                              className="rounded-full pl-6 pr-2 py-2 text-gray-900 dark:text-white flex items-center space-x-2 bg-gray-200 dark:bg-black text-sm font-bold mx-auto md:mx-0 w-fit"
                              style={{ 
                                backgroundColor: isDarkMode ? '#000000' : '#e5e7eb',
                                color: isDarkMode ? '#ffffff' : '#111827' 
                              }}
                            >
                              <span>View Project</span>
                              <span 
                                className="bg-gray-400 dark:bg-zinc-700 rounded-full text-xs px-3 py-1 text-white"
                                style={{ 
                                  backgroundColor: isDarkMode ? '#3f3f46' : '#6b7280',
                                  color: '#ffffff' 
                                }}
                              >
                                {project.badge}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </BackgroundGradient>
                  ))}
                </div>
              )}
            </div>

            <main 
              id="contact" 
              className="relative z-10 p-12 mx-6 my-8 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.15)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] hover:shadow-[0_25px_60px_rgba(0,_0,_0,_0.2)] dark:hover:shadow-[0_25px_60px_rgba(0,_0,_0,_0.4)] border border-gray-200/20 dark:border-gray-700/20 transition-all duration-300 hover:-translate-y-1" 
              style={{ 
                scrollMarginTop: '80px',
                backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
              }}
            >
              <h1 
                className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
                style={{ color: isDarkMode ? 'white' : '#111827' }} // Darker text for light mode
              >
                Contact Me
              </h1>
              <ContactForm isDarkMode={isDarkMode} />
            </main>
          </TracingBeam>
        </div>
      </div>
    </div>
  )
}

export default App
