import { Hero } from './components';
import StarCanvas from './components/canvas/starCanvas';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/Header';
import Projects from './components/projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary font-sans">
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Hero />
      </div>
      <StarCanvas />
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
