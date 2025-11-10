import type { Project } from '../types';

export default function ProjectCard({ title, description, img, link }: Project) {
  return (
    <a
      href={link === "#" ? undefined : link} 
      target={link === "#" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`block bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ${link === "#" ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-lg text-primary-light dark:text-primary-dark">{title}</h3>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </a>
  );
}