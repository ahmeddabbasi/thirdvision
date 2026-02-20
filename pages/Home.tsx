
import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import Layout from '../components/Layout';
import { ExecutionStack } from '../components/ExecutionStack';
import EmailCaptureModal from '../components/EmailCaptureModal';

const Home: React.FC = memo(() => {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    // Scroll to hero section when page loads
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <EmailCaptureModal open={modalOpen} onClose={closeModal} />
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-16 md:space-y-24">
        {/* Hero Section */}
        <section ref={heroRef} className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            The End of Identity Risk. The Beginning of Physical Truth.
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl">
            Third Vision AI provides presence-based infrastructure to verify people, actions, and execution events in physical environments — without relying on centralized identity databases.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-4 items-start">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-accent/40 hover:border-accent bg-transparent hover:bg-accent/10 transition-all group"
              id="whitepaper-trigger"
              type="button"
            >
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-accent font-bold text-lg uppercase tracking-wide group-hover:text-white transition-colors">
                Download Flight Manual
              </span>
            </button>
            <a href="mailto:registry@thirdvision.ai?subject=Pilot Inquiry" className="text-white text-lg md:text-xl font-bold underline underline-offset-[8px] decoration-white/20 hover:decoration-white transition-all w-fit group self-center">
              Explore a Pilot / Contact Us
            </a>
          </div>
        </section>

        {/* The Flight Stability Model */}
        <section className="space-y-8 md:space-y-12 py-8 md:py-12 border-t border-white/5">
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">The Flight Stability Model™ (Two Wing Theory)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">Wing 1: Identity Data (Regulatory Anchored)</h3>
              <ul className="list-disc pl-6 text-white/70 space-y-2 text-base md:text-lg">
                <li>Verifies Presence</li>
                <li>Ensures Accountability</li>
                <li>Role-Based Access Control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">Wing 2: Pattern Data (Coherence-Driven)</h3>
              <ul className="list-disc pl-6 text-white/70 space-y-2 text-base md:text-lg">
                <li>Dynamic & Temporal Intelligence</li>
                <li>Behavioral Consistency</li>
                <li>Execution Integrity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The 8-Ball Stack */}
        <section className="space-y-8 md:space-y-12 py-8 md:py-12 border-t border-white/5">
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">The 8-Ball Stack (Vertical Architecture)</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">08 | IronWall Mercurial AI</div>
              <p className="text-white/70 text-base">Adaptive, fluid defense against evolving threats.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">07 | SOUL</div>
              <p className="text-white/70 text-base">The foundational, immutable core of decentralized identity. It acts as the "North Star" of the stack, ensuring every execution event is anchored to a verified, sovereign human presence.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">06 | SERS / RaKa</div>
              <p className="text-white/70 text-base">High-sensitivity analytical layers for total spatial awareness.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">05 | Ethosphere OS</div>
              <p className="text-white/70 text-base">The unified operating environment for physical intelligence.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">04 | Third Vision Protocol</div>
              <p className="text-white/70 text-base">The decentralized backbone removing database liability.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">03 | Pattern Orbit</div>
              <p className="text-white/70 text-base">The dynamic intelligence layer that verifies the flow and intent of movement. It provides real-time validation, ensuring physical actions remain consistent with authorized protocols.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">02 | Civic Cube</div>
              <p className="text-white/70 text-base">Sovereign edge nodes for ground-truth auditability.</p>
            </div>
            <div className="border-l-2 border-accent/30 pl-6">
              <div className="text-accent font-mono text-sm mb-2">01 | Anchor Band</div>
              <p className="text-white/70 text-base">The secure wearable "Key" anchoring the user to the truth.</p>
            </div>
          </div>
        </section>

        {/* Product Modules (Decision Infrastructure) */}
        <section className="space-y-8 md:space-y-12 py-8 md:py-12 border-t border-white/5">
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">Decision Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Anchor Band */}
            <div className="group border border-white/10 p-6 md:p-8 bg-white/[0.01]">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#BFA35B] transition-colors">Anchor Band (Wearable)</h3>
              <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2">A secure human presence key</div>
              <ul className="list-disc pl-6 text-white/70 space-y-1 text-base md:text-lg">
                <li>Verifies physical presence</li>
                <li>Enables consent without biometrics</li>
                <li>Reduces impersonation and fraud</li>
              </ul>
            </div>
            {/* Civic Cube */}
            <div className="group border border-white/10 p-6 md:p-8 bg-white/[0.01]">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#BFA35B] transition-colors">Civic Cube (Hardware)</h3>
              <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2">A sovereign edge verification node</div>
              <ul className="list-disc pl-6 text-white/70 space-y-1 text-base md:text-lg">
                <li>Operates during network outages</li>
                <li>Reduces centralized dependency</li>
                <li>Provides ground-truth auditability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Whitepaper Integration (New Section) */}
        <section className="space-y-6 md:space-y-10 py-8 md:py-12 border-t border-white/5">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Deep Dive into Presence-Based Logic</h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Understand the technical architecture behind decentralized physical verification and execution authority.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-accent/50 hover:border-accent bg-accent/5 hover:bg-accent/10 transition-all group"
            id="whitepaper-trigger-2"
            type="button"
          >
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-accent font-bold text-base uppercase tracking-wider group-hover:text-white transition-colors">
              Download the Flight Manual
            </span>
          </button>
        </section>

        {/* Pre-Flight Deployment Checklist */}
        <section className="space-y-6 md:space-y-10 py-8 md:py-12 border-t border-white/5">
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary mb-6">Pre-Flight Deployment Checklist</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-accent font-bold text-lg mb-2">IDENTITY</h3>
              <p className="text-white/70 text-base">Initialize SOUL and deploy Anchor Band for presence-based verification.</p>
            </div>
            <div>
              <h3 className="text-accent font-bold text-lg mb-2">SPACE</h3>
              <p className="text-white/70 text-base">Deploy Civic Cube for localized auditability during network disruption.</p>
            </div>
            <div>
              <h3 className="text-accent font-bold text-lg mb-2">EXECUTION</h3>
              <p className="text-white/70 text-base">Activate Pattern Orbit for behavioral consistency and intent validation.</p>
            </div>
            <div>
              <h3 className="text-accent font-bold text-lg mb-2">DEFENSE</h3>
              <p className="text-white/70 text-base">Engage IronWall Mercurial AI for adaptive enforcement.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
});

Home.displayName = 'Home';

export default Home;
