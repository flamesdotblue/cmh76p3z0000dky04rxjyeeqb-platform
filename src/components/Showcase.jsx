import React from 'react';
import { Play, Scissors, Layers } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-8 flex flex-col items-center text-center">
        <span className="mb-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Interface</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A timeline you already know</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Minimal, responsive, and thoughtfully animated—so you can focus on the story.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl">
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="text-xs text-white/60">FluxCut Project — Intro Reel</div>
          <div className="flex items-center gap-2 text-xs">
            <button className="rounded-md bg-white/10 px-2 py-1 hover:bg-white/15">Share</button>
            <button className="rounded-md bg-white px-2 py-1 font-medium text-black hover:bg-white/90">Export</button>
          </div>
        </div>

        {/* Preview + Tools */}
        <div className="grid gap-4 md:grid-cols-[1fr,260px]">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-black">
            <div className="absolute left-4 top-4 rounded-md bg-black/50 px-2 py-1 text-[10px] uppercase tracking-widest text-white/70">Preview</div>
            <div className="absolute inset-0 grid place-items-center">
              <button className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-black shadow">
                <Play className="h-4 w-4" /> Play
              </button>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-3">
            <div className="mb-3 flex items-center justify-between text-xs text-white/70">
              <span>Tools</span>
              <span>AI</span>
            </div>
            <div className="grid gap-2">
              <button className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
                <div className="flex items-center gap-2">
                  <Scissors className="h-4 w-4" />
                  Smart Cut
                </div>
                <span className="text-xs text-white/60">⌘X</span>
              </button>
              <button className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Auto Layers
                </div>
                <span className="text-xs text-white/60">⌘L</span>
              </button>
              <button className="rounded-lg border border-white/10 bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 p-3 text-left hover:from-indigo-500/40 hover:to-fuchsia-500/40">
                <div className="text-sm">Describe your edit</div>
                <div className="mt-1 text-xs text-white/70">“Cut pauses, brighten, and add clean captions.”</div>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
          <div className="mb-2 flex items-center justify-between text-xs text-white/60">
            <span>Timeline</span>
            <span>00:01:23:12</span>
          </div>
          <div className="h-24 w-full rounded-lg bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:16px_100%,100%_16px]">
            <div className="relative h-full w-full">
              <div className="absolute left-2 top-2 flex gap-2">
                <div className="h-8 w-24 rounded bg-blue-500/70" />
                <div className="h-8 w-36 rounded bg-fuchsia-500/70" />
                <div className="h-8 w-20 rounded bg-emerald-500/70" />
              </div>
              <div className="absolute left-2 bottom-2 flex gap-2">
                <div className="h-6 w-28 rounded bg-white/20" />
                <div className="h-6 w-12 rounded bg-white/20" />
                <div className="h-6 w-36 rounded bg-white/20" />
              </div>
              <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
