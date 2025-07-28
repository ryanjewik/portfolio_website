import type { TechItem } from '../TechCarousel';

export const toolsTech: TechItem[] = [
  {
    name: 'Git',
    icon: (
      <img src="/assets/git.png" alt="Git" className="w-6 h-6" />
    ),
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    textColor: 'text-orange-600'
  },
  {
    name: 'Docker',
    icon: (
      <img src="/assets/docker.png" alt="Docker" className="w-6 h-6" />
    ),
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600'
  },
  {
    name: 'EC2',
    icon: (
      <img src="/assets/ec2.png" alt="EC2" className="w-6 h-6" />
    ),
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    textColor: 'text-orange-600'
  },
  {
    name: 'Figma',
    icon: (
      <img src="/assets/figma.png" alt="Figma" className="w-6 h-6" />
    ),
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600'
  },
  {
    name: 'Jenkins',
    icon: (
      <img src="/assets/jenkins.png" alt="Jenkins" className="w-6 h-6" />
    ),
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600'
  },
  {
    name: 'Linux',
    icon: (
      <img src="/assets/linux.png" alt="Linux" className="w-6 h-6" />
    ),
    bgColor: 'bg-gray-100 dark:bg-gray-600',
    textColor: 'text-gray-700 dark:text-gray-300'
  }
];

export default toolsTech;
