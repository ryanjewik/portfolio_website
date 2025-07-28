import type { TechItem } from '../TechCarousel';

export const databaseTech: TechItem[] = [
  {
    name: 'PostgreSQL',
    icon: (
      <img src="/assets/postgresql.png" alt="PostgreSQL" className="w-6 h-6" />
    ),
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600'
  },
  {
    name: 'MongoDB',
    icon: (
      <img src="/assets/mongodb.png" alt="MongoDB" className="w-6 h-6" />
    ),
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-600'
  },
  {
    name: 'MySQL',
    icon: (
      <img src="/assets/mysql.png" alt="MySQL" className="w-6 h-6" />
    ),
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600'
  },
  {
    name: 'Supabase',
    icon: (
      <img src="/assets/supabase.png" alt="Supabase" className="w-6 h-6" />
    ),
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-600'
  },
  {
    name: 'S3',
    icon: (
      <img src="/assets/s3.png" alt="S3" className="w-6 h-6" />
    ),
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    textColor: 'text-orange-600'
  }
];

export default databaseTech;
