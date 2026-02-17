
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ExecutionStack } from '../components/ExecutionStack';
import EmailCaptureModal from '../components/EmailCaptureModal';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Layout>
      <EmailCaptureModal open={modalOpen} onClose={closeModal} />
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-16 md:space-y-24">
        {/* Hero Section */}
        <section className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            From Audit to Enforcement
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/50 font-light leading-snug">
            Why identity verification alone fails in critical infrastructure.
          </p>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl">
            Discover how Presence-Based Infrastructure mitigates operational risk at the precise moment of execution — not after consequence.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-4">
            <button
              className="text-accent text-lg md:text-xl font-bold underline underline-offset-[8px] decoration-accent/20 hover:decoration-accent transition-all w-fit group"
              id="whitepaper-trigger"
              type="button"
              onClick={openModal}
            >
              Access the Execution Authority Framework
            </button>
            <a href="mailto:registry@thirdvision.ai?subject=Pilot Inquiry" className="text-white text-lg md:text-xl font-bold underline underline-offset-[8px] decoration-white/20 hover:decoration-white transition-all w-fit group">
              Explore a Pilot / Contact Us
            </a>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Problem We Solve</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2 text-base md:text-lg">
              <li>Identity systems that fail in the field</li>
              <li>Rising fraud and unverifiable execution</li>
              <li>Loss of human execution authority</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Presence-Based Verification (The Solution)</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2 text-base md:text-lg">
              <li>Verification is <span className="text-accent font-bold">local, contextual, and time-bound</span></li>
              <li>No permanent identity databases</li>
              <li>Authority is enforced at execution time</li>
            </ul>
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
              <div className="text-red-400 text-xs font-mono mb-2">Do NOT label or describe this as an IoT device</div>
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
            className="text-accent text-lg md:text-xl font-bold underline underline-offset-[8px] decoration-accent/20 hover:decoration-accent transition-all w-fit group"
            id="whitepaper-trigger-2"
            type="button"
            onClick={openModal}
          >
            Access the Execution Authority Framework
          </button>
        </section>

        {/* Deployment & Governance */}
        <section className="space-y-6 md:space-y-10 py-8 md:py-12 border-t border-white/5">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Deployment & Governance</h2>
          <ul className="list-disc pl-6 text-white/70 space-y-2 text-base md:text-lg">
            <li>Cities & Civic Services</li>
            <li>Healthcare</li>
            <li>Utilities & Logistics</li>
            <li>Insurance & Compliance</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
