import { TechCarousel } from '../components/TechCarousel';
import type { TechItem } from '../components/TechCarousel';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import VantaBackground from '../components/VantaBackground';
import { BackgroundBeamsWithCollision } from '../components/background-beams-with-collision';
import { StickyScroll } from '@/components/sticky-scroll-reveal';

// Helper to map techStack to TechItem objects for TechCarousel
function getTechItems(techStack: string[], isDarkMode: boolean): TechItem[] {
  const bgColor = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-700';
  return techStack.map(name => {
    // Use simple lowercase for asset lookup, e.g., 'python.png'
    const assetName = name.toLowerCase() + '.png';
    return {
      name: name.replace("_", " "),
      icon: (
        <img
          src={`/assets/${assetName}`}
          alt={name}
          className="w-6 h-6 object-contain"
        />
      ),
      bgColor,
      textColor,
    };
  });
}

interface Project {
  id: number;
  title: string;
  titleJapanese: string;
  description: string;
  descriptionJapanese: string;
  scrollDescription?: string;
  scrollDescriptionJapanese?: string;
  image: string;
  badge: string;
  url: string;
  liveUrl?: string;
  downloadUrl?: string;
  techStack: string[];
  challenges: string;
  challengesJapanese: string;
  solution: string;
  solutionJapanese: string;
  features: string[];
  featuresJapanese: string[];
  screenshots: string[];
  stickyScrollHeaders?: string[];
  stickyScrollHeadersJapanese?: string[];
}

function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [japaneseToggle, setJapaneseToggle] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/projects/${projectId}`)
      .then(res => res.json())
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    );
  }
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Use per-project sticky scroll headers if provided
  const stickyHeaders = japaneseToggle
    ? project.stickyScrollHeadersJapanese || ['プロジェクト概要', '主な機能', '課題と解決策']
    : project.stickyScrollHeaders || ['Project Overview', 'Key Features', 'Challenges & Solutions'];

  const stickyScrollContent = [
    {
      title: stickyHeaders[0],
      description: japaneseToggle
        ? (project.scrollDescriptionJapanese || project.descriptionJapanese)
        : (project.scrollDescription || project.description),
      content: (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.image}
            alt={japaneseToggle ? project.titleJapanese : project.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )
    },
    {
      title: stickyHeaders[1],
      description: (japaneseToggle ? project.featuresJapanese : project.features).join(' • '),
      content: (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.screenshots[1] || project.image}
            alt={`${japaneseToggle ? project.titleJapanese : project.title} features`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )
    },
    {
      title: stickyHeaders[2],
      description: `${japaneseToggle ? '課題: ' : 'Challenge: '}${japaneseToggle ? project.challengesJapanese : project.challenges} ${japaneseToggle ? ' 解決策: ' : ' Solution: '}${japaneseToggle ? project.solutionJapanese : project.solution}`,
      content: (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.screenshots[2] || project.image}
            alt={`${japaneseToggle ? project.titleJapanese : project.title} solution`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Global Background Effects */}
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

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {japaneseToggle ? 'ホームに戻る' : 'Back to Home'}
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => setJapaneseToggle(!japaneseToggle)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {japaneseToggle ? 'EN' : '日本語'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-2 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-4 min-h-[80vh]"
        >
          {/* Project Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 
                  className="text-4xl font-bold"
                  style={{ color: isDarkMode ? 'white' : '#111827' }}
                >
                  {japaneseToggle ? project.titleJapanese : project.title}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.badge === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                  project.badge === 'Download' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                }`}>
                  {project.badge}
                </span>
              </div>
            </div>
            {/* Action Buttons - Moved to Header */}
            <div className="flex flex-wrap gap-3">
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {japaneseToggle ? 'コード' : 'Code'}
              </a>
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {japaneseToggle ? 'ライブ' : 'Live'}
                </a>
              )}
              
              {project.downloadUrl && (
                <a 
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {japaneseToggle ? 'DL' : 'Download'}
                </a>
              )}
            </div>
          </div>

          {/* Technology Stack Carousel */}
          <div className="mb-8">
            <TechCarousel
              title={japaneseToggle ? '使用技術' : 'Technology Stack'}
              items={getTechItems(project.techStack, isDarkMode)}
              accentColor="bg-blue-500"
              duration={30}
              direction="normal"
              isDarkMode={isDarkMode}
              japaneseToggle={japaneseToggle}
            />
          </div>

          {/* Project Description Section */}
          <div className="mb-8 w-full flex justify-center">
            <div className={`max-w-3xl text-center text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{japaneseToggle ? 'プロジェクト概要' : 'Project Overview'}</h1>
              <p className="mb-2">
                {japaneseToggle ? project.descriptionJapanese : project.description}
              </p>
            </div>
          </div>
          {/* Sticky Scroll Section */}
          <div className="mb-4">
            <StickyScroll 
              content={stickyScrollContent} 
              isDarkMode={isDarkMode}
              contentClassName="h-96 w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectPage;
