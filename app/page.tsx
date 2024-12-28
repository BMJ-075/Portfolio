import { Hero } from './components';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary font-sans">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Hero />
      </div>
    </div>
  );
}
