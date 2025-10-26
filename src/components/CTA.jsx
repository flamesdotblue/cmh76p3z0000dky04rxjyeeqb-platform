import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/20 to-cyan-500/20 p-1">
        <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-black/60 p-8 text-center backdrop-blur">
          <h3 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Create your first cut in minutes
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Start free. No credit card required. Upgrade any time.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 hover:bg-white/90">
              <Rocket className="h-4 w-4" />
              Start editing now
            </a>
            <a href="#pricing" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/90 hover:bg-white/10">View pricing</a>
          </div>
          <div className="mt-4 text-xs text-white/60">Works on macOS, Windows, and Web</div>
        </div>
      </div>
    </section>
  );
}
