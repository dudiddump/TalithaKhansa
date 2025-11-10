import { useInView } from 'react-intersection-observer';
import type { Experience } from '../types'; 

interface TimelineItemProps extends Experience {
  isOdd: boolean;
}

export default function TimelineItem({ icon, title, company, dates, isOdd }: TimelineItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  const directionClass = isOdd ? 'animate-slide-in-left' : 'animate-slide-in-right';
  
  return (
    <div className={`mb-8 flex justify-between items-center w-full timeline-item ${isOdd ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-accent-light dark:bg-accent-dark shadow-xl w-8 h-8 rounded-full">
        {icon}
      </div>
      <div
        ref={ref}
        className={`order-1 bg-white dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4 timeline-content opacity-0 ${inView ? directionClass : ''}`}
      >
        <h3 className="font-bold text-primary-light dark:text-primary-dark text-lg">{title}</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">{dates}</p>
      </div>
    </div>
  );
}