import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-blur bg-white/70 dark:bg-secondary-dark/70 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary-light dark:text-primary-dark" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Talitha Khansa Fahira
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">About</a>
          <a href="#experience" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Contact</a>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}