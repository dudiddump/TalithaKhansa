import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; 
  imgSrc: string;
}

export default function Modal({ isOpen, onClose, imgSrc }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
    
    return () => {
      document.body.classList.remove('modal-active');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null; 
  }

  // Cek apakah file-nya adalah PDF
  const isPdf = imgSrc.toLowerCase().endsWith('.pdf');

  return (
    <div className="modal-overlay fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 opacity-100 p-4">
      {/* Background Overlay */}
      <div className="modal-overlay-bg absolute w-full h-full bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="modal-container bg-white dark:bg-slate-900 w-full md:max-w-5xl mx-auto rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200 dark:border-slate-700 flex flex-col max-h-[90vh]">
        
        {/* Header (Tombol Close) */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
           <h3 className="font-bold font-orbitron text-gray-700 dark:text-gray-200">
              Document Preview
           </h3>
           <button className="modal-close cursor-pointer z-50 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors" onClick={onClose}>
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
           </button>
        </div>
        
        {/* Content Area */}
        <div className="modal-content p-0 flex-grow bg-gray-100 dark:bg-slate-950 flex items-center justify-center overflow-auto">
          {isPdf ? (
            // Kalau PDF, pakai <embed> atau <iframe >
            <iframe 
                src={imgSrc} 
                className="w-full h-[80vh] md:h-[600px]" 
                title="Certificate PDF"
            />
          ) : (
            // Kalau Gambar, pakai <img> biasa
            <img 
                id="modal-img" 
                src={imgSrc} 
                alt="Certificate" 
                className="max-w-full max-h-[80vh] object-contain shadow-lg" 
            />
          )}
        </div>
      </div>
    </div>
  );
}