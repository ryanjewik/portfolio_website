"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
  isDarkMode,
  setIsDarkMode,
  japaneseToggle,
  setJapaneseToggle,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  japaneseToggle: boolean;
  setJapaneseToggle: (value: boolean) => void;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
          //y:0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-12 py-1 items-center justify-center space-x-10 h-18",
          className
        )}
        style={{ 
          backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)' // Force background color
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavClick(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-sm font-medium"
            )}
            style={{ color: isDarkMode ? '#fafafa' : '#525252' }} // Force text color
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-lg">{navItem.name}</span>
          </a>
          
        ))}
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            className="relative h-5 w-9 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            style={{ 
              minWidth: '36px', 
              minHeight: '20px',
              background: isDarkMode 
                ? 'linear-gradient(to right, #9333ea, #3b82f6)' 
                : 'linear-gradient(to right, #14b8a6, #06b6d4)'
            }}
          >
            <div
              className={cn(
                "absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out flex items-center justify-center border border-gray-200/20",
                isDarkMode ? "translate-x-4" : "translate-x-0"
              )}
            >
              <span className="text-[7px] leading-none flex items-center justify-center w-full h-full">
                {isDarkMode ? '🌙' : '☀️'}
              </span>
            </div>
          </button>
          <span 
            className="text-xs text-neutral-600 dark:text-neutral-400 font-medium whitespace-nowrap"
            style={{ color: isDarkMode ? '#9ca3af' : '#525252' }} // Force text color
          >
            {isDarkMode ? (japaneseToggle ? 'ダーク' : 'Dark') : (japaneseToggle ? 'ライト' : 'Light')}
          </span>
        </div>
        {/* Japanese toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setJapaneseToggle(!japaneseToggle);
            }}
            className="relative h-5 w-9 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            style={{ 
              minWidth: '36px', 
              minHeight: '20px',
              background: isDarkMode 
                ? 'linear-gradient(to right, #9333ea, #3b82f6)' 
                : 'linear-gradient(to right, #14b8a6, #06b6d4)'
            }}
          >
            <div
              className={cn(
                "absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out flex items-center justify-center border border-gray-200/20",
                japaneseToggle ? "translate-x-4" : "translate-x-0"
              )}
            >
              <img 
                src={japaneseToggle ? "/assets/japanese-flag.png" : "/assets/usa-flag.png"}
                alt={japaneseToggle ? "Japanese Flag" : "USA Flag"}
                className="w-3 h-3 rounded-sm object-cover"
              />
            </div>
          </button>
          <span 
            className="text-xs text-neutral-600 dark:text-neutral-400 font-medium whitespace-nowrap"
            style={{ color: isDarkMode ? '#9ca3af' : '#525252' }} // Force text color
          >
            {japaneseToggle ? '日本語' : 'English'}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
