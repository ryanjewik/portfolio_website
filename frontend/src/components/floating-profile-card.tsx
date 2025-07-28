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
}

export const FloatingProfileCard = ({
  name,
  title,
  location,
  socialLinks,
  className,
  isDarkMode = true,
}: FloatingProfileCardProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show card after introduction section (assuming it's viewport height)
      const scrollPosition = window.scrollY;
      const introductionHeight = window.innerHeight;
      
      setVisible(scrollPosition > introductionHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            "sticky top-40 ml-[-10px] mr-4 mt-32 w-[28rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 px-12 py-8 pb-0",
            className
          )}
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
          }}
        >
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-64 h-80 rounded-3xl mx-auto mb-6 overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-2xl">
              <img 
                src="/assets/grad_photo.jpg" 
                alt={`${name} profile photo`}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl hidden items-center justify-center">
                <span className="text-white font-bold text-6xl">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <h3 
              className="font-bold text-4xl text-gray-900 dark:text-white mb-3"
              style={{ color: isDarkMode ? 'white' : '#111827' }} // Force text color
            >
              {name}
            </h3>
            <p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-3 font-medium"
              style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }} // Force text color
            >
              {title}
            </p>
            <p 
              className="text-lg text-gray-500 dark:text-gray-400 flex items-center justify-center"
              style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }} // Force text color
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-6"></div>

          {/* Social Links - FloatingDock */}
          <div className="space-y-4 mb-6">
            <h4 
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center"
              style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
            >
              Connect
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
          <div className="space-y-3 mb-8">
            <a
              href="/assets/ryan_j_resume.pdf"
              download="ryan_j_resume.pdf"
              className="block w-full text-white font-medium py-4 px-8 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-center flex items-center justify-center gap-3 text-lg"
              style={{ 
                background: isDarkMode 
                  ? 'linear-gradient(to right, #3b82f6, #9333ea)'
                  : 'linear-gradient(to right, #14b8a6, #06b6d4)',
                color: 'white' 
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-white font-medium">Download Resume</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
