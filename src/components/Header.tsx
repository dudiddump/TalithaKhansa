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
    { name: 'Certifications', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md 
        ${isScrolled 
          ? 'py-3 bg-white/90 dark:bg-slate-900/90 shadow-md border-b border-cyan-500/20' 
          : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
            href="#" 
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="text-2xl font-bold tracking-tighter hover:text-cyan-500 transition-colors dark:text-white text-slate-900" 
            style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          TKF<span className="text-cyan-500">.</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)} 
              className="text-[13px] font-bold uppercase tracking-[0.2em] hover:text-cyan-500 transition-colors relative group dark:text-slate-300 text-slate-600"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-cyan-500/20 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href)} 
                className="text-lg font-semibold tracking-wide hover:text-cyan-500 transition-colors dark:text-slate-200 text-slate-800"
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