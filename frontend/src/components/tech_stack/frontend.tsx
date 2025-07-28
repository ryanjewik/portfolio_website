import type { TechItem } from '../TechCarousel';

const frontendTech: TechItem[] = [
  {
    name: 'React',
    icon: (
      <img src="/assets/react.png" alt="React" className="w-6 h-6" />
    ),
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-500"
  },
  {
    name: 'TypeScript',
    icon: (
      <img src="/assets/typescript.png" alt="TypeScript" className="w-6 h-6" />
    ),
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600"
  },
  {
    name: 'JavaScript',
    icon: (
      <img src="/assets/javascript.png" alt="JavaScript" className="w-6 h-6" />
    ),
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-500"
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <img src="/assets/tailwind_css.png" alt="Tailwind CSS" className="w-6 h-6" />
    ),
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
    textColor: "text-cyan-500"
  },
  {
    name: 'Flutter',
    icon: (
      <img src="/assets/flutter.png" alt="Flutter" className="w-6 h-6" />
    ),
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-400"
  },
  {
    name: 'HTML5',
    icon: (
      <img src="/assets/html.png" alt="HTML5" className="w-6 h-6" />
    ),
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-500"
  },
  {
    name: 'CSS3',
    icon: (
      <img src="/assets/css.png" alt="CSS3" className="w-6 h-6" />
    ),
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-500"
  },
];

export default frontendTech;
