import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      if (stored === 'dark') document.documentElement.classList.add('dark');
    } else {
      // Prefer system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Features />

        <section id="why" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Why teams choose SovoLink</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Accessible by design with WCAG 2.2 AA standards.</li>
                <li>Snappy UX using React + Tailwind + headless primitives.</li>
                <li>Built-in theming with persistent light/dark preference.</li>
                <li>Secure-first mindset: RBAC-ready UI patterns.</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Performance & DX</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Vite-powered dev server, instant HMR.</li>
                <li>Tree-shaken icons and components to keep bundles slim.</li>
                <li>Semantic HTML, ARIA labels, and keyboard-friendly controls.</li>
                <li>Responsive grid scales from mobile to 2K displays.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
