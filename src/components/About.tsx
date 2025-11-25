import MyPhoto from '../assets/MyPhoto.jpg';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 blur-3xl opacity-40 -z-10"></div>

      <h2 className="text-4xl font-orbitron font-bold text-center text-primary-light dark:text-primary-dark mb-16">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6">
        <div className="relative group md:w-1/3 w-3/4">
          <div className="absolute -inset-2 bg-gradient-to-tr from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
          <img
            src={MyPhoto}
            alt="Photo of Talitha Khansa Fahira"
            className="relative rounded-3xl shadow-2xl w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            Hi, I’m <span className="font-semibold text-primary-light dark:text-primary-dark">Talitha Khansa Fahira</span>, or just Talitha! 
            <br/>I’m a 5th semester <span className="font-medium">Information Systems & Technology</span> student 
            at <span className="font-medium">Cyber University</span> (GPA 3.95).  
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m passionate about blending <span className="font-medium">data, technology, and teamwork</span> to make a real impact. <br/> I love learning new things and turning ideas into projects that matter  
            especially in web development, cybersecurity, and data analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <span className="bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark px-4 py-2 rounded-full text-sm font-medium">
              Web Development
            </span>
            <span className="bg-accent-light/10 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark px-4 py-2 rounded-full text-sm font-medium">
              Cybersecurity
            </span>
            <span className="bg-sky-200/40 dark:bg-sky-800/30 text-sky-700 dark:text-sky-300 px-4 py-2 rounded-full text-sm font-medium">
              Data Analytics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
