import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Header />
      
      {/* GROUP 1: Konten yang BUTUH container (biar rapi di tengah)
         Hero, About, Education
      */}
      <main className="flex-grow container mx-auto px-6 pt-24 md:pt-32 space-y-24">
        <Hero />
      </main>
      <div className="w-full">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
      </div>
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;