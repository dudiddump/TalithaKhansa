import { useInView } from 'react-intersection-observer';
import CyberLogo from '../assets/CyberUniv.png';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-8 text-center">Education</h2>

        <div className="space-y-6">
          <div className="bg-[1e293b] p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={CyberLogo}
              alt="Cyber University Logo"
              className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2"
            />

            <div>
              <h3 className="text-2xl font-semibold">Cyber University</h3>
              <p className="text-sm text-accent-light dark:text-accent-dark font-semibold mt-1">
                Bachelor’s Degree in Information Systems & Technology
              </p>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                5th Semester • GPA: 3.95
              </p>
              <p className="text-base mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Through my coursework, I’ve built a strong foundation in system design, web development, and data analysis.
                I actively collaborate on tech-based student projects that challenge creativity and teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
