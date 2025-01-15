import { Hero } from './components';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/Header';
import Projects from './components/projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <div className="bg-center bg-no-repeat">
        <Hero />
      </div>
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
