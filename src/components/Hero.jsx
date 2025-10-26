import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 backdrop-blur">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">FluxCut</span>
        </div>
        <nav className="hidden gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#cta" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">Get started</a>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-12 pb-24 text-center md:pt-20">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          New: AI-assisted edits in real-time
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Sleek, powerful video editing for the creative era
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Cut faster, color smarter, and publish anywhere. FluxCut brings studio-grade tools into a modern, minimal interface powered by AI.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 hover:bg-white/90">
            <Rocket className="h-4 w-4" />
            Try for free
          </a>
          <a href="#showcase" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-3 text-sm text-white/90 backdrop-blur hover:bg-black/60">
            <Play className="h-4 w-4" />
            Watch demo
          </a>
        </div>
      </div>
    </section>
  );
}
