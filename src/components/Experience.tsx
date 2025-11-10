import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/experienceData';
import TimelineItem from './TimelineItem';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className={`py-20 opacity-0 ${inView ? 'animate-fade-in-up' : ''}`}>
      <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12">Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
        
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            {...exp}
            isOdd={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}