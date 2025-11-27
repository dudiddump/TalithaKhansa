import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck } from 'lucide-react';
import Modal from './Modal';

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  imgSrc: string;
}

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates: Certificate[] = [
    {
      title: 'Junior Cyber Security',
      issuer: 'BNSP',
      description:
        'Completed intensive training in information protection, internet security, access control, log management, and policy implementation.',
      imgSrc: 'https://drive.google.com/uc?export=view&id=1mXXX',
    },
    {
      title: 'Data Analytics Fundamentals',
      issuer: 'Google',
      description:
        'Learned to collect, clean, and analyze data using spreadsheets, SQL, and visualization tools for informed decision-making.',
      imgSrc: 'https://drive.google.com/uc?export=view&id=1yYYY',
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Dicoding Indonesia',
      description:
        'Developed responsive web apps using HTML, CSS, JavaScript, and React, emphasizing clean code and user-centered design.',
      imgSrc: 'https://drive.google.com/uc?export=view&id=1zZZZ',
    },
    {
      title: 'Cyber Security Awareness',
      issuer: 'Cyber Academy',
      description:
        'Gained practical understanding of network defense, risk management, and security best practices.',
      imgSrc: 'https://drive.google.com/uc?export=view&id=1aAAA',
    },
  ];

  const handleOpenModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section
      id="certificates"
      ref={ref}
      className={`py-20 opacity-0 transition-all duration-700 ${
        inView ? 'animate-fade-in-up opacity-100' : ''
      }`}
    >
      <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12">
        Licenses & Certificates
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(cert)}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl cursor-pointer transition-all hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <ShieldCheck className="w-10 h-10 text-accent-light dark:text-accent-dark flex-shrink-0" />
              <div>
                <h3 className="font-bold text-primary-light dark:text-primary-dark text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">{cert.issuer}</p>
                <p className="text-xs mt-2 text-gray-500 dark:text-gray-300 leading-snug">
                  {cert.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imgSrc={selectedCert.imgSrc}
        />
      )}
    </section>
  );
}
