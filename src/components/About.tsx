import { useInView } from 'react-intersection-observer';
import MyPhoto from '../assets/MyPhoto.jpg';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/400x400/e0e7ff/1e3a8a?text=Your+Photo';
  };

  return (
    <section id="about" ref={ref} className={`py-20 opacity-0 ${inView ? 'animate-fade-in-up' : ''}`}>
      <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12">About Me</h2>
      
      <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
        <div className="md:col-span-2">
          <img src={MyPhoto} onError={handleImageError} alt="Photo of Talitha Khansa Fahira" className="rounded-lg shadow-lg w-full max-w-sm mx-auto" />
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Hi, I’m Talitha Khansa Fahira, but you can just call me Talitha. I’m a fifth-semester Information Systems & Technology student (GPA 3.95) at Cyber University and currently serving as President of the Student Council (BEM). I love working with people and exploring how data and technology can create real impact. I’m especially interested in web development, cybersecurity, and data analytics, and I’m always up for learning something new or building something meaningful with a great team.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">Education</h3>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md h-full">
            <h4 className="font-bold">Bachelor of Computer Science</h4>
            <p className="text-primary-light dark:text-primary-dark font-semibold">Cyber University, Jakarta</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2023 - Current</p>
            <p className="mt-2">Major: Information Systems & Technology</p>
            <p>Current GPA: 3.95 / 4.00</p>
            <div className="mt-4">
              <h5 className="font-semibold">Relevant Courses:</h5>
              <p className="text-sm">Data Analytics, Software Development, Database Systems, Cyber Security Fundamentals, UI/UX Design Principles.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">Technical Skills</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Design & Productivity</h4>
              <p>Figma, Canva, Google Workspace, Microsoft Office</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Frontend</h4>
              <p>React.js, JavaScript, HTML, CSS, Tailwind CSS</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Backend</h4>
              <p>Node.js, PHP (CodeIgniter 3), Java, C++</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Database</h4>
              <p>MySQL, MongoDB, Supabase</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Cybersecurity (Lab)</h4>
              <p>Burp Suite, Nmap, OWASP Top 10 testing</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Soft Skills</h4>
              <p>Leadership, Public Speaking, Event Management, Team Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}