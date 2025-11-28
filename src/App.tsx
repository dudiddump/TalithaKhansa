import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 pt-24 md:pt-32 space-y-24 mb-24">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        </main>
    </div>
  );
}

export default App;