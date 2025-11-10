import { useEffect } from 'react';
import { X } from 'lucide-react';

// Tentukan tipe props untuk Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void; // Fungsi yang tidak mengembalikan apa-apa
  imgSrc: string;
}

export default function Modal({ isOpen, onClose, imgSrc }: ModalProps) {
  useEffect(() => {
    // Tambahkan/hapus kelas 'modal-active' dari body
    if (isOpen) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove('modal-active');
    };
  }, [isOpen]); // Jalankan effect ini setiap kali isOpen berubah

  if (!isOpen) {
    return null; // Jangan render apapun jika modal tidak terbuka
  }

  return (
    <div className="modal-overlay fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 opacity-100">
      <div className="modal-overlay-bg absolute w-full h-full bg-black opacity-75" onClick={onClose}></div>
      <div className="modal-container bg-white dark:bg-slate-800 w-11/12 md:max-w-4xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-end items-center pb-3">
            <button className="modal-close cursor-pointer z-50" onClick={onClose}>
              <X className="text-text-light dark:text-text-dark" />
            </button>
          </div>
          <img id="modal-img" src={imgSrc} alt="Certificate Image" className="w-full rounded" />
        </div>
      </div>
    </div>
  );
}