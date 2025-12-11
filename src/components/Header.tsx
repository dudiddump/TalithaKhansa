import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certificates'},
    { name: 'Contact', href: '#contact' },
  ];

  // FUNGSI SMOOTH SCROLL
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        setIsMobileMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md 
        ${isScrolled 
          ? 'py-3 bg-white/80 dark:bg-secondary-dark/80 shadow-[0_0_15px_rgba(6,182,212,0.1)] border-b border-cyan-500/20' 
          : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
            href="#" 
            onClick={(e) => handleSmoothScroll(e, '#hero')} // Klik logo balik ke atas smooth
            className="text-2xl font-bold text-primary-light dark:text-primary-dark tracking-tighter hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" 
            style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          TKF<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)} 
              className="text-sm font-medium uppercase tracking-wider hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-secondary-dark/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl animate-fade-in-down">
          <nav className="flex flex-col p-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href)} 
                className="text-lg font-medium hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}