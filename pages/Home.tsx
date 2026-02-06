
import React from 'react';
import Layout from '../components/Layout';
import { ExecutionStack } from '../components/ExecutionStack';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-16 md:space-y-24">
        
        {/* Hero */}
        <section className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            AI Execution, <span className="text-accent">Re-Anchored</span>.
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/50 font-light leading-snug">
            Architecture decides whether AI is allowed to act.
          </p>
        </section>

        {/* Intro (Short, Direct) */}
        <section className="space-y-6 md:space-y-8 max-w-2xl">
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
            Third Vision AI is building the execution layer that governs if and when artificial intelligence may operate — before outcomes, before automation, before harm.
          </p>
          <div className="space-y-2 font-mono text-[11px] md:text-xs tracking-widest text-white/30 uppercase border-l border-white/10 pl-4 md:pl-6">
            <p>We do not optimize models.</p>
            <p className="text-white">We constrain execution.</p>
          </div>
        </section>

        {/* The Execution Stack */}
        <section className="space-y-8 md:space-y-12">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">The Execution Stack</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
              Every action must pass through a deterministic chain of authority. Intent alone is never sufficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-2 font-mono text-[10px] md:text-[11px] text-white/40 uppercase leading-relaxed py-3 md:py-4 border border-white/5 p-4 md:p-8 bg-white/[0.01]">
                <div className="flex items-center space-x-4"><span>INTENT</span></div>
                <div className="text-white/10 ml-0.5">↓</div>
                <div className="flex items-center space-x-4 text-white"><span>AUTHORITY (Anchor Band)</span></div>
                <div className="text-white/10 ml-0.5">↓</div>
                <div className="flex items-center space-x-4 text-white"><span>CONTEXT (Civic Cube)</span></div>
                <div className="text-white/10 ml-0.5">↓</div>
                <div className="flex items-center space-x-4"><span>ADMISSIBILITY</span></div>
                <div className="text-white/10 ml-0.5">↓</div>
                <div className="flex items-center space-x-4"><span>EXECUTION</span></div>
                <div className="text-white/10 ml-0.5">↓</div>
                <div className="flex items-center space-x-4"><span>PHYSICAL ANCHOR</span></div>
                
                <div className="mt-12 normal-case text-white/20 italic text-[10px]">
                    Execution is conditional. Non-action is a valid outcome.
                </div>
            </div>
            
            <div className="relative group">
                <div className="absolute inset-0 border border-white/5 bg-white/[0.01] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                <ExecutionStack initialTrigger={true} />
            </div>
          </div>
        </section>
        {/* Hardware Layer */}
        <section className="space-y-8 md:space-y-10 py-8 md:py-12 border-t border-white/5">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">Hardware Layer</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
              Physical devices that enforce execution control at the point of authority.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Anchor Band */}
            <a href="#/origin" className="group border border-white/10 p-6 md:p-8 hover:border-[#BFA35B]/50 transition-all bg-white/[0.01] hover:bg-white/[0.02] active:border-accent">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#BFA35B] transition-colors">Anchor Band</h3>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30 border border-white/10 px-2 md:px-3 py-1">Personal</span>
                </div>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  Wearable authority controller. Binds AI execution rights to individual consent through biometric verification and physical presence.
                </p>
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#BFA35B] group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* Civic Cube */}
            <a href="#/studio" className="group border border-white/10 p-6 md:p-8 hover:border-[#BFA35B]/50 transition-all bg-white/[0.01] hover:bg-white/[0.02] active:border-accent">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#BFA35B] transition-colors">Civic Cube</h3>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30 border border-white/10 px-2 md:px-3 py-1">Institutional</span>
                </div>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  Institutional governance node. Provides contextual constraints and admissibility logic for AI operations within organizational boundaries.
                </p>
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#BFA35B] group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>
        </section>
        {/* What We’re Building */}
        <section className="space-y-8 md:space-y-10 py-8 md:py-12 border-t border-white/5">
          <h3 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">Protocols</h3>
            <ul className="space-y-4 md:space-y-6 text-white/70 list-none font-light text-base md:text-lg lg:text-xl">
                <li className="flex items-start space-x-3 md:space-x-4">
                    <span className="text-accent font-mono text-xs md:text-sm mt-1">/01</span>
                    <span>Deterministic execution authority for AI systems</span>
                </li>
                <li className="flex items-start space-x-3 md:space-x-4">
                    <span className="text-accent font-mono text-xs md:text-sm mt-1">/02</span>
                    <span>Physical anchors that bind digital action to human consent</span>
                </li>
                <li className="flex items-start space-x-3 md:space-x-4">
                    <span className="text-accent font-mono text-xs md:text-sm mt-1">/03</span>
                    <span>Governance enforced before runtime, not after failure</span>
                </li>
            </ul>
            <p className="text-sm md:text-base text-white/30 max-w-lg font-mono uppercase tracking-tighter">
                Designed for enterprises, governments, and institutions operating in high-stakes environments.
            </p>
        </section>

        {/* System Status */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-8 md:py-12 border-y border-white/5 font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/40">
            <div className="space-y-2 md:space-y-3">
            <span className="block text-secondary opacity-80 text-[11px] md:text-[12px]">Platform</span>
                <span className="text-white leading-relaxed">Prototype in active development</span>
            </div>
            <div className="space-y-2 md:space-y-3">
            <span className="block text-secondary opacity-80 text-[11px] md:text-[12px]">Hardware</span>
                <span className="text-white leading-relaxed">Anchor Band · Civic Cube</span>
            </div>
            <div className="space-y-3">
            <span className="block text-secondary opacity-80 text-[12px]">Focus</span>
                <span className="text-white leading-relaxed">Execution governance · Admissibility · Auditability</span>
            </div>
        </section>

        {/* Primary Actions */}
        <section className="py-24 space-y-10">
            <div className="flex flex-col space-y-8">
                <a href="mailto:registry@thirdvision.ai?subject=Briefing Request" className="text-white text-2xl font-bold underline underline-offset-[12px] decoration-white/20 hover:decoration-white transition-all w-fit group">
                    Request Briefing
                </a>
                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">Inquiries</span>
                  <a href="mailto:registry@thirdvision.ai" className="text-white/40 text-sm hover:text-white transition-all w-fit font-mono">
                    registry@thirdvision.ai
                  </a>
                </div>
            </div>
        </section>

      </div>
    </Layout>
  );
};

export default Home;
