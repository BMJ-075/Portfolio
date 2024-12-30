import { Hero } from './components';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary font-sans">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Hero />
      </div>
      <Skills />
    </div>
  );
}
