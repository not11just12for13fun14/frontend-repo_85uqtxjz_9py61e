import { Shield, BarChart2, Users, Workflow } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise security',
    desc: 'Role-based access, audit trails, and SSO ensure your data stays protected.'
  },
  {
    icon: BarChart2,
    title: 'Real-time insights',
    desc: 'Forecasts, conversion funnels, and cohort analysis powered by fast queries.'
  },
  {
    icon: Users,
    title: 'Team collaboration',
    desc: 'Mentions, notes, and activity timelines keep everyone aligned and accountable.'
  },
  {
    icon: Workflow,
    title: 'Automated workflows',
    desc: 'No-code rules for lead routing, SLA alerts, and multi-step sequences.'
  }
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for scale</h2>
        <p className="mt-3 text-muted-foreground">
          A modern CRM foundation with intuitive workflows and performance that delights.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article key={f.title} className="group rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15">
              <f.icon size={18} />
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
