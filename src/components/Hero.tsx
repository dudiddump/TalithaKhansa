import { Linkedin, Github, Globe, FileText } from 'lucide-react';
import ResumePDF from '../assets/Resume.pdf'; 

export default function Hero() {
  return (
    <section id="hero" className="text-center py-20 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold text-primary-light dark:text-primary-dark leading-tight [animation-delay:0.2s] opacity-0 animate-fade-in-up">
        Talitha Khansa Fahira
      </h1>
      <p className="mt-4 text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-300 [animation-delay:0.4s] opacity-0 animate-fade-in-up">
        Information Systems & Technology Student
      </p>
      <p className="mt-6 max-w-2xl mx-auto text-base [animation-delay:0.6s] opacity-0 animate-fade-in-up">
        5th-semester Information Systems & Technology student at Cyber University (GPA 3.95). Passionate about data, technology, and leadership, with hands-on experience in web development, cybersecurity, and data analysis.
      </p>
      <div className="mt-8 flex justify-center space-x-4 [animation-delay:0.8s] opacity-0 animate-fade-in-up">
        <a href="https://linkedin.com/in/talithakhansa" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent-light dark:hover:bg-accent-dark text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white transition-all duration-300" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/dudiddump" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent-light dark:hover:bg-accent-dark text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white transition-all duration-300" aria-label="GitHub">
          <Github className="w-6 h-6" />
        </a>
        <a href="Portofolio-TalithaKhansa" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent-light dark:hover:bg-accent-dark text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white transition-all duration-300" aria-label="Portfolio Website">
          <Globe className="w-6 h-6" />
        </a>
        <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent-light dark:hover:bg-accent-dark text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white transition-all duration-300" aria-label="Download Resume">
          <FileText className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}