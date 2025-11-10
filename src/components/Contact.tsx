import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-4">Get In Touch</h2>
      <p className="max-w-xl mx-auto mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <a href="mailto:its.ithaaa@gmail.com" className="bg-accent-light dark:bg-accent-dark text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all duration-300 inline-flex items-center">
        <Mail className="w-5 h-5 mr-2" />
        Send Email
      </a>
    </section>
  );
}