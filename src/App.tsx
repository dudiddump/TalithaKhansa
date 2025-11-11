import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-6 pt-24 md:pt-32">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
