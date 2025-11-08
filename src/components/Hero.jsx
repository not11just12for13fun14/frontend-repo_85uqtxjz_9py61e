import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-16 pt-10 sm:pt-16 md:grid-cols-2 sm:px-6 lg:gap-12 lg:px-8">
      <div className="order-2 md:order-1">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Close more deals with a faster, smarter CRM
        </h1>
        <p className="mt-4 max-w-prose text-base text-muted-foreground sm:text-lg">
          SovoLink helps Indian sales teams manage leads, automate follow-ups, and forecast revenue with confidence. Built for speed, accessibility, and enterprise-grade security.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Rocket size={16} /> Book a demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Explore features
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-muted-foreground sm:grid-cols-3">
          <div className="rounded-lg border p-3">
            <div className="text-2xl font-bold text-foreground">2x</div>
            Faster pipeline updates
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-2xl font-bold text-foreground">WCAG</div>
            2.2 AA compliant
          </div>
          <div className="rounded-lg border p-3 sm:col-span-1 col-span-2">
            <div className="text-2xl font-bold text-foreground">ISO</div>
            Security-first workflows
          </div>
        </div>
      </div>

      <div className="order-1 h-[420px] w-full overflow-hidden rounded-xl border md:order-2 md:h-[520px]">
        <div className="relative h-full w-full">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
