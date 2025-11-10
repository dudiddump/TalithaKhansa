import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className={`py-20 opacity-0 ${inView ? 'animate-fade-in-up' : ''}`}>
      <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12">Projects & Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}