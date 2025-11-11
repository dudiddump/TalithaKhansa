import MyPhoto from '../assets/MyPhoto.jpg';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className={`py-20 opacity-0 ${inView ? 'animate-fade-in-up' : ''}`}>
      <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12">About Me</h2>

      <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
        <div className="md:col-span-2">
          <img
            src={MyPhoto}
            alt="Photo of Talitha Khansa Fahira"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Hi, I’m Talitha Khansa Fahira — or just Talitha! I’m a fifth-semester Information Systems & Technology student at Cyber University (GPA 3.95). I’m passionate about combining data, technology, and teamwork to make a real impact. My interests include web development, cybersecurity, and data analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
