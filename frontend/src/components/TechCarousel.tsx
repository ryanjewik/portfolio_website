import { motion } from "motion/react";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

interface TechCarouselProps {
  title: string;
  items: TechItem[];
  accentColor: string;
  duration?: number;
  animationDistance?: number;
  direction?: 'normal' | 'reverse';
  isDarkMode?: boolean;
  japaneseToggle?: boolean;
}

export const TechCarousel: React.FC<TechCarouselProps> = ({
  title,
  items,
  accentColor,
  duration = 45,
  animationDistance,
  direction = 'normal',
  isDarkMode = true,
  japaneseToggle = false
}) => {
  // Calculate the width needed for one complete set of items
  // Each item is min-w-[100px] + gap-4 (16px), so roughly 116px per item
  const calculatedDistance = animationDistance || -(items.length * 116);
  
  // Determine animation direction
  const animationValues = direction === 'reverse' 
    ? [calculatedDistance, 0] 
    : [0, calculatedDistance];

  return (
    <div 
      className="bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl px-4 py-4 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
      style={{ 
        backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(249, 250, 251, 0.5)' // Force background color
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-1 ${accentColor} rounded-full h-6 flex-shrink-0`}></div>
        <h4 
          className="text-xl font-semibold text-gray-900 dark:text-white"
          style={{ color: isDarkMode ? 'white' : '#111827' }} // Force text color
        >
          {title}
        </h4>
      </div>
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-4"
          animate={{ x: animationValues }}
          transition={{ 
            duration: duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* First set of items */}
          {items.map((item, index) => (
            <div 
              key={`first-${index}`} 
              className="flex-shrink-0 flex flex-col items-center p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md min-w-[100px]"
              style={{ 
                backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 1)' : 'rgba(255, 255, 255, 1)' // Force background color
              }}
            >
              <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mb-1`}>
                <div className={`w-6 h-6 ${item.textColor}`}>
                  {item.icon}
                </div>
              </div>
              <span 
                className="text-xs font-medium text-gray-700 dark:text-gray-300"
                style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
              >
                {item.name}
              </span>
            </div>
          ))}
          {/* Duplicate set of items for seamless loop */}
          {items.map((item, index) => (
            <div 
              key={`second-${index}`} 
              className="flex-shrink-0 flex flex-col items-center p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md min-w-[100px]"
              style={{ 
                backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 1)' : 'rgba(255, 255, 255, 1)' // Force background color
              }}
            >
              <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mb-1`}>
                <div className={`w-6 h-6 ${item.textColor}`}>
                  {item.icon}
                </div>
              </div>
              <span 
                className="text-xs font-medium text-gray-700 dark:text-gray-300"
                style={{ color: isDarkMode ? '#d1d5db' : '#374151' }} // Force text color
              >
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
