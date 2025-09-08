import '../App.css'
import ContactForm from '../components/ContactForm';
import { motion } from "motion/react";
import VantaBackground from '../components/VantaBackground';
import { BackgroundBeamsWithCollision } from '../components/background-beams-with-collision';
import { FloatingNav } from '../components/floating-navbar';
import { TracingBeam } from '../components/tracing-beam';
import { BackgroundGradient } from '../components/background-gradient';
import { FloatingProfileCard } from '../components/floating-profile-card';
import { TechCarousel } from '../components/TechCarousel';
import { HeroHighlight } from '../components/hero-highlight';
import { frontendTech, backendTech, databaseTech, toolsTech } from '../components/tech_stack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Certification {
  _id?: string;
  eng_title: string;
  jap_title: string;
  eng_description: string;
  jap_description: string;
  eng_date: string;
  jap_date: string;
  image_url?: string;
  validation_id?: string;
}

interface Experience {
  _id?: string;
  company: string;
  role: string;
  jap_role: string;
  title: string;
  jap_title: string;
  description: string;
  jap_description: string;
  start_date: string;
  end_date: string;
  jap_start_date: string;
  jap_end_date: string;
  bullets: string[];
  jap_bullets: string[];
  order: number;
}

// --- Projects Section ---
interface Project {
  _id?: string;
  order: number;
  eng_title: string;
  jap_title: string;
  eng_description: string;
  jap_description: string;
  image_url: string;
  badge: string;
  tech_stack: string[];
}

function Home() {
  // Dark mode state - shared between App and FloatingNav
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [japaneseToggle, setJapaneseToggle] = useState(false);
  const navigate = useNavigate();

  // Certifications state
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [certLoading, setCertLoading] = useState(true);

  // Experiences state
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [expLoading, setExpLoading] = useState(true);

  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [projLoading, setProjLoading] = useState(true);

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

  // Fetch certifications from backend
  useEffect(() => {
    fetch('/api/certifications')
      .then(res => res.json())
      .then(data => {
        setCertifications(data);
        setCertLoading(false);
      });
  }, []);

  // Fetch experiences from backend
  useEffect(() => {
    fetch('/api/experiences')
      .then(res => res.json())
      .then(data => {
        setExperiences(data);
        setExpLoading(false);
      });
  }, []);

  // Fetch projects from backend
  useEffect(() => {
    setProjLoading(true);
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setProjLoading(false);
      })
      .catch(() => setProjLoading(false));
  }, []);

  // Frontend tech stack data
  
  // Projects data
  const isEvenNumberOfProjects = projects.length % 2 === 0;

  // Add navigation handler for project clicks
  const handleProjectClick = (order: number) => {
    navigate(`/project/${order}`);
  };

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
          { name: japaneseToggle ? 'はじめに' : 'Introduction', link: '#introduction', icon: <i className="fas fa-home"></i> },
          { name: japaneseToggle ? '自己紹介' : 'About Me', link: '#about', icon: <i className="fas fa-user"></i> },
          { name: japaneseToggle ? '技術スタック' : 'Tech Stack', link: '#techstack', icon: <i className="fas fa-code"></i> },
          { name: japaneseToggle ? 'プロジェクト' : 'Projects', link: '#projects', icon: <i className="fas fa-folder"></i> },
          { name: japaneseToggle ? 'お問い合わせ' : 'Contact', link: '#contact', icon: <i className="fas fa-envelope"></i> }
        ]}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        japaneseToggle={japaneseToggle}
        setJapaneseToggle={setJapaneseToggle}
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
            {japaneseToggle ? 'ポートフォリオへようこそ' : 'Welcome to My Portfolio'}
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
            {japaneseToggle ? 'フルスタックAI開発者 ライアン・ヒデオ・ジューイック' : 'Fullstack AI Developer Ryan Hideo Jewik'}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Main Content Layout - Responsive flex/column positioning */}
      <div className="flex flex-col md:flex-row items-start gap-x-2 md:gap-x-8 relative z-20">
        {/* Profile Card Container - Responsive: stacks on top for small screens, shrinks more on smaller screens */}
        <div className="w-full md:w-[28rem] min-w-[16rem] md:min-w-[20rem] max-w-[28rem] flex-shrink mb-8 md:mb-0 sticky md:sticky top-0 md:top-40">
          <FloatingProfileCard
            name={japaneseToggle ? "ライアン・英雄・ジューイック" : "Ryan Hideo Jewik"}
            title="Full Stack AI Developer"
            location="Atascadero, CA"
            isDarkMode={isDarkMode}
            japaneseToggle={japaneseToggle}
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
        {/* Main Content - Responsive: full width on mobile, min/max width for better layout */}
        <div className="flex-1 min-w-0 sm:min-w-[18rem] md:min-w-[24rem] max-w-full md:max-w-[calc(100vw-32rem)]">
          <TracingBeam className="px-4 sm:px-8 md:px-12">
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
                  {japaneseToggle ? '自己紹介' : 'About Me'}
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
                      {japaneseToggle ? '簡単な自己紹介' : 'Quick Bio'}
                    </h3>
                    <p 
                      className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                      style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Darker text for light mode
                    >
                      {japaneseToggle 
                        ? 'コンピューターサイエンスとデータサイエンスの両方の背景を持ち、AI技術を活用したフルスタックアプリケーションの構築を専門としています。ユーザーエクスペリエンスを向上させ、ビジネス価値を促進する革新的なソリューションの創造に情熱を注いでいます。'
                        : 'With backgrounds in both computer science and data science, I specialize in building full-stack applications that leverage AI technologies. My passion lies in creating innovative solutions that enhance user experiences and drive business value.'
                      }
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
                        {japaneseToggle ? '学歴' : 'Education'}
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
                            {japaneseToggle ? '学士号' : "Bachelor's Degree"}
                          </h4>
                          <p 
                            className="text-blue-600 dark:text-blue-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}
                          >
                            {japaneseToggle ? 'コンピューターサイエンス' : 'Computer Science'}
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            {japaneseToggle ? 'チャップマン大学 • 2021年-2025年' : 'Chapman University • 2021-2025'}
                          </p>
                          <p 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            {japaneseToggle 
                              ? 'ソフトウェア工学、アルゴリズム、システム設計に焦点を当てた学習'
                              : 'Focused on software engineering, algorithms, and system design'
                            }
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
                            {japaneseToggle ? '学士号' : "Bachelor's Degree"}
                          </h4>
                          <p 
                            className="text-purple-600 dark:text-purple-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#c084fc' : '#7c3aed' }}
                          >
                            {japaneseToggle ? 'データサイエンス' : 'Data Science'}
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            {japaneseToggle ? 'チャップマン大学 • 2021年-2025年' : 'Chapman University • 2021-2025'}
                          </p>
                          <p 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            {japaneseToggle 
                              ? '機械学習、統計分析、データ可視化を専門とした学習'
                              : 'Specialized in machine learning, statistical analysis, and data visualization'
                            }
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
                            {japaneseToggle ? '留学' : 'Study Abroad'}
                          </h4>
                          <p 
                            className="text-orange-600 dark:text-orange-400 font-medium text-left"
                            style={{ color: isDarkMode ? '#fb923c' : '#ea580c' }}
                          >
                            {japaneseToggle ? 'テンプル大学ジャパンキャンパス' : 'Temple University Japan'}
                          </p>
                          <p 
                            className="text-gray-600 dark:text-gray-400 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                          >
                            {japaneseToggle ? '東京、日本 • 2024年' : 'Tokyo, Japan • 2024'}
                          </p>
                          <p 
                            className="text-gray-500 dark:text-gray-400 mt-2 text-left"
                            style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}
                          >
                            {japaneseToggle 
                              ? '異文化学習とグローバルな視点を持つ国際的な学術体験'
                              : 'International academic experience with cross-cultural learning and global perspectives'
                            }
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
                        {japaneseToggle ? '資格' : 'Certifications'} ({certLoading ? '...' : certifications.length})
                      </h3>
                    </div>
                    {/* Certification Items - dynamic from API */}
                    <div className="flex flex-col gap-6">
                      {certLoading ? (
                        <div className="text-gray-500 dark:text-gray-400">Loading...</div>
                      ) : certifications.length === 0 ? (
                        <div className="text-gray-500 dark:text-gray-400">No certifications found.</div>
                      ) : (
                        certifications.map((cert, idx) => (
                          <div className="flex gap-4" key={cert._id || idx}>
                            <div className="w-1 bg-green-500 rounded-full flex-shrink-0"></div>
                            <div className="flex-1 pl-2 text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 
                                  className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                                  style={{ color: isDarkMode ? 'white' : '#111827' }}
                                >
                                  {japaneseToggle ? cert.jap_title : cert.eng_title}
                                </h4>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                                  {japaneseToggle ? '認定済み' : 'Certified'}
                                </span>
                              </div>
                              <p 
                                className="text-green-600 dark:text-green-400 font-medium text-left"
                                style={{ color: isDarkMode ? '#4ade80' : '#059669' }}
                              >
                                {japaneseToggle ? cert.jap_description : cert.eng_description}
                              </p>
                              <p 
                                className="text-gray-600 dark:text-gray-400 text-left"
                                style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                              >
                                {japaneseToggle ? cert.jap_date : cert.eng_date}
                              </p>
                              {cert.validation_id && (
                                <p className="text-gray-500 dark:text-gray-400 mt-2 text-left" style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}>
                                  {japaneseToggle ? '認証ID: ' : 'Validation ID: '}{cert.validation_id}
                                </p>
                              )}
                              {cert.image_url && (
                                <img src={cert.image_url} alt={cert.eng_title} className="mt-2 w-32 h-32 object-contain rounded-lg" />
                              )}
                            </div>
                          </div>
                        ))
                      )}
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
                        {japaneseToggle ? '経験' : 'Experience'} ({expLoading ? '...' : experiences.length})
                      </h3>
                    </div>
                    {/* Experience Items - dynamic from API */}
                    <div className="space-y-4">
                      {expLoading ? (
                        <div className="text-gray-500 dark:text-gray-400">Loading...</div>
                      ) : experiences.length === 0 ? (
                        <div className="text-gray-500 dark:text-gray-400">No experience found.</div>
                      ) : (
                        experiences.map((exp, idx) => (
                          <div className="flex gap-4" key={exp._id || idx}>
                            <div className="w-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <div className="flex-1 pl-2 text-left">
                              <h4 
                                className="text-xl font-semibold text-gray-900 dark:text-white text-left"
                                style={{ color: isDarkMode ? 'white' : '#111827' }}
                              >
                                {japaneseToggle ? exp.jap_role : exp.role}
                              </h4>
                              <p 
                                className="text-orange-600 dark:text-orange-400 font-medium text-left"
                                style={{ color: isDarkMode ? '#fb923c' : '#ea580c' }}
                              >
                                {exp.company}
                              </p>
                              <p 
                                className="text-gray-600 dark:text-gray-400 text-left"
                                style={{ color: isDarkMode ? '#9ca3af' : '#4b5563' }}
                              >
                                {japaneseToggle ? `${exp.jap_start_date} - ${exp.jap_end_date}` : `${exp.start_date} - ${exp.end_date}`}
                              </p>
                              <h5 className="text-lg font-semibold mt-2 mb-1 text-gray-900 dark:text-white" style={{ color: isDarkMode ? 'white' : '#111827' }}>
                                {japaneseToggle ? exp.jap_title : exp.title}
                              </h5>
                              <p className="text-gray-500 dark:text-gray-400 mb-2" style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}>
                                {japaneseToggle ? exp.jap_description : exp.description}
                              </p>
                              <ul className="text-gray-500 dark:text-gray-400 mt-2 text-left space-y-1" style={{ color: isDarkMode ? '#9ca3af' : '#374151' }}>
                                {(japaneseToggle ? exp.jap_bullets : exp.bullets).map((bullet, bidx) => (
                                  <li className="flex items-start" key={bidx}>
                                    <span className="text-orange-500 mr-2 mt-1.5 text-xs">●</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Tech Stack Section - keeping all your existing tech stack */}
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
                    {japaneseToggle ? '技術スタック' : 'Tech Stack'}
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
                      title={japaneseToggle ? "フロントエンド" : "Frontend"}
                      items={frontendTech}
                      accentColor="bg-blue-500"
                      isDarkMode={isDarkMode}
                    />

                    {/* Backend Carousel */}
                    <TechCarousel 
                      title={japaneseToggle ? "バックエンド" : "Backend"}
                      items={backendTech}
                      accentColor="bg-green-500"
                      direction="reverse"
                      isDarkMode={isDarkMode}
                    />

                    {/* Databases Carousel */}
                    <TechCarousel 
                      title={japaneseToggle ? "データベース" : "Databases"}
                      items={databaseTech}
                      accentColor="bg-orange-500"
                      isDarkMode={isDarkMode}
                    />

                    {/* Tools Carousel */}
                    <TechCarousel 
                      title={japaneseToggle ? "ツール" : "Tools"}
                      items={toolsTech}
                      accentColor="bg-pink-500"
                      direction="reverse"
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </HeroHighlight>

            {/* Projects Section - Modified to handle clicks */}
            <div id="projects" className="relative z-10 p-2" style={{ scrollMarginTop: '5rem' }}>
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-white"
                style={{ 
                  color: isDarkMode ? 'white' : '#111827',
                  textShadow: isDarkMode 
                    ? '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(59, 130, 246, 0.9)'
                    : '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(20, 184, 166, 0.2)'
                }}
              >
                {japaneseToggle ? 'プロジェクト' : 'Projects'} ({projLoading ? '...' : projects.length})
              </h2>
              {projLoading ? (
                <div className="text-gray-500 dark:text-gray-400 text-center">Loading...</div>
              ) : projects.length === 0 ? (
                <div className="text-gray-500 dark:text-gray-400 text-center">No projects found.</div>
              ) : (
                <div className={isEvenNumberOfProjects ? "grid grid-cols-2 gap-8" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"}>
                  {projects.map((proj, idx) => (
                    <BackgroundGradient
                      key={proj._id || idx}
                      className="p-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div
                        className="p-6 flex flex-col items-center cursor-pointer w-full h-full"
                        onClick={() => handleProjectClick(proj.order)}
                      >
                        <img src={proj.image_url} alt={proj.eng_title} className="w-full h-40 object-contain rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                          {japaneseToggle ? proj.jap_title : proj.eng_title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center mb-2">
                          {japaneseToggle ? proj.jap_description : proj.eng_description}
                        </p>
                        <div className="flex gap-2 flex-wrap justify-center mb-2">
                          {proj.tech_stack && proj.tech_stack.map((tech, tIdx) => (
                            <span key={tIdx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">{tech}</span>
                          ))}
                        </div>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
                          {proj.badge}
                        </span>
                      </div>
                    </BackgroundGradient>
                  ))}
                </div>
              )}
            </div>

            <main 
              id="contact" 
              className="relative z-10 p-4 sm:p-8 md:p-12 mx-2 sm:mx-6 my-8 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.15)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] hover:shadow-[0_25px_60px_rgba(0,_0,_0,_0.2)] dark:hover:shadow-[0_25px_60px_rgba(0,_0,_0,_0.4)] border border-gray-200/20 dark:border-gray-700/20 transition-all duration-300 hover:-translate-y-1 min-w-0 sm:min-w-[18rem] md:min-w-[24rem] max-w-full md:max-w-[calc(100vw-32rem)]" 
              style={{ 
                scrollMarginTop: '5rem',
                backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
              }}
            >
              <h1 
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white"
                style={{ color: isDarkMode ? 'white' : '#111827' }} // Darker text for light mode
              >
                {japaneseToggle ? 'お問い合わせ' : 'Contact Me'}
              </h1>
              <ContactForm isDarkMode={isDarkMode} japaneseToggle={japaneseToggle} />
            </main>
          </TracingBeam>
        </div>
      </div>
    </div>
  );
}

export default Home;
