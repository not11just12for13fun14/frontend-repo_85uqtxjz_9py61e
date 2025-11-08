import { useEffect, useState } from 'react';
import { Moon, Sun, Settings, User } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md">
            <span className="text-sm font-bold">SV</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">SovoLink CRM</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#features" className="hidden rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground sm:inline">
            Features
          </a>
          <a href="#why" className="hidden rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground sm:inline">
            Why SovoLink
          </a>
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/50 bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-border/60 bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
            <User size={16} /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-muted px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
            <Settings size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}
