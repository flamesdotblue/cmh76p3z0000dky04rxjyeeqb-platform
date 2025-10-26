import React from 'react';
import { Scissors, Layers, Shield, Zap, Rocket, Play } from 'lucide-react';

const features = [
  {
    icon: Scissors,
    title: 'One-click Smart Cuts',
    desc: 'Auto-trim silences and fillers with precision powered by on-device AI.'
  },
  {
    icon: Layers,
    title: 'Non-destructive Layers',
    desc: 'Blend clips, titles, and effects on a flexible, magnetic timeline.'
  },
  {
    icon: Zap,
    title: 'Real-time Rendering',
    desc: 'Preview complex grades and effects instantly without proxies.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Local-first editing with encrypted cloud sync for teams.'
  },
  {
    icon: Rocket,
    title: 'AI Assist',
    desc: 'Generate edits, captions, and color matches from prompts.'
  },
  {
    icon: Play,
    title: 'Optimized Export',
    desc: 'Presets for YouTube, TikTok, and ProRes—fast and accurate.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="mb-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Why FluxCut</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Edit at the speed of thought</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          A carefully crafted toolset that stays out of your way until you need it.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-opacity duration-300 group-hover:opacity-60" />
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
