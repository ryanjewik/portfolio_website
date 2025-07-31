"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { FloatingDock } from "./floating-dock";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}

interface FloatingProfileCardProps {
  name: string;
  title: string;
  location: string;
  socialLinks: SocialLink[];
  className?: string;
  isDarkMode?: boolean;
  japaneseToggle?: boolean;
}

export const FloatingProfileCard = ({
  name,
  title,
  location,
  socialLinks,
  className,
  isDarkMode = true,
  japaneseToggle = false,
}: FloatingProfileCardProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      const introSection = document.getElementById('introduction');
      if (isMobile && introSection) {
        const rect = introSection.getBoundingClientRect();
        // Show card only when introduction section is in view
        const isIntroVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(isIntroVisible);
      } else {
        // Desktop: show card after introduction section
        const scrollPosition = window.scrollY;
        const introductionHeight = window.innerHeight;
        setVisible(scrollPosition > introductionHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -100,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className={cn(
            "sticky top-24 md:top-40 ml-0 md:ml-[-0.625rem] mr-0 md:mr-4 mt-8 md:mt-32 w-full md:w-[28rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 px-4 sm:px-6 md:px-8 py-4 sm:py-6 pb-0",
            className
          )}
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
          }}
        >
          {/* Profile Section */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="w-full max-w-[16rem] sm:max-w-[20rem] md:w-72 h-40 sm:h-64 md:h-[28rem] rounded-2xl md:rounded-3xl mx-auto mb-2 sm:mb-4 overflow-hidden border-2 sm:border-4 border-gray-200 dark:border-gray-700 shadow-2xl">
              <img 
                src="/assets/grad_photo.jpg" 
                alt={`${name} profile photo`}
                className="w-full h-full object-contain sm:object-cover object-center"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl hidden items-center justify-center">
                <span className="text-white font-bold text-3xl sm:text-5xl md:text-6xl">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <h3 
              className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-white mb-1 sm:mb-2"
              style={{ color: isDarkMode ? 'white' : '#111827' }} // Force text color
            >
              {name}
            </h3>
            <p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-1 sm:mb-2 font-medium"
              style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }} // Force text color
            >
              {japaneseToggle ? 'フルスタックAI開発者' : title}
            </p>
            <p 
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 flex items-center justify-center"
              style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }} // Force text color
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {japaneseToggle ? 'アタスカデロ、カリフォルニア州' : location}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4 sm:mb-6"></div>

          {/* Social Links - FloatingDock */}
          <div className="space-y-2 sm:space-y-3 mb-2 sm:mb-4">
            <h4 
              className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-center"
              style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
            >
              {japaneseToggle ? 'つながる' : 'Connect'}
            </h4>
            <div className="flex justify-center">
              <FloatingDock
                items={socialLinks.map(link => ({
                  title: link.name,
                  icon: link.icon,
                  href: link.url
                }))}
                desktopClassName="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                mobileClassName="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <a
              href="/assets/ryan_j_resume.pdf"
              download="ryan_j_resume.pdf"
              className="block w-full text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{ 
                background: isDarkMode 
                  ? 'linear-gradient(to right, #3b82f6, #9333ea)'
                  : 'linear-gradient(to right, #14b8a6, #06b6d4)',
                color: 'white' 
              }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-white font-medium">{japaneseToggle ? '履歴書をダウンロード' : 'Download Resume'}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
