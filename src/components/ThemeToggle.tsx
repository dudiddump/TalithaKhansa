import { useState, useEffect } from 'react';
import { Sun, Moon, X } from 'lucide-react';

const getInitialTheme = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light'; 
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(getInitialTheme);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setShowPopup(false); // Sembunyikan popup kalau dark mode
    } else {
      document.documentElement.classList.remove('dark');
      // Tampilkan popup sebentar saat masuk light mode
      setShowPopup(true);
      // Opsional: Hilang otomatis setelah 5 detik
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
    window.localStorage.setItem('color-theme', theme);
  }, [theme]); 
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleTheme} 
        id="theme-toggle" 
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative z-50"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
             <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
             <Moon className="w-5 h-5 text-cyan-400" />
        )}
      </button>

      {/* POPUP LIGHT MODE */}
      {showPopup && (
        <div className="absolute top-12 right-0 w-48 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 animate-bounce-slow z-40">
           {/* Panah Kecil ke Atas */}
           <div className="absolute -top-1.5 right-3 w-3 h-3 bg-white dark:bg-slate-800 border-t border-l border-gray-200 dark:border-slate-700 transform rotate-45"></div>
           
           <div className="relative flex items-start gap-2">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
                <span className="font-bold text-cyan-600">Tip:</span> Dark mode looks better for the cyber vibe!
              </p>
              <button onClick={() => setShowPopup(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-3 h-3" />
              </button>
           </div>
        </div>
      )}
    </div>
  );
}