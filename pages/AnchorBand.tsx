
import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const AnchorBand: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-12 py-24 space-y-24">
        
        {/* Hero */}
        <section className="space-y-8 border-b border-white/5 pb-12">
          <div className="flex items-center space-x-4 text-xs font-mono uppercase tracking-widest text-white/40">
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#BFA35B]">Anchor Band</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Anchor Band
          </h1>
          <p className="text-3xl text-white/50 font-light leading-snug max-w-3xl">
            Personal authority controller for AI execution rights.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">Personal Device</span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">Biometric Authority</span>
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-8 max-w-3xl">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Overview</h2>
          <p className="text-2xl text-white/80 leading-relaxed font-light">
            The Anchor Band is a wearable device that serves as the primary authority interface between human operators and AI execution systems.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            It binds AI execution rights to individual consent through continuous biometric verification and physical presence detection. No AI action can proceed without explicit authorization from an authenticated Anchor Band holder.
          </p>
        </section>

        {/* How It Works */}
        <section className="space-y-12">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">How It Works</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Step 01</div>
              <h3 className="text-xl font-bold text-white">Biometric Binding</h3>
              <p className="text-base text-white/60 leading-relaxed">
                The band continuously verifies the wearer's identity through multi-factor biometric sensors (pulse pattern, galvanic skin response, temperature signature). Identity verification occurs at the hardware level, not the software layer.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Step 02</div>
              <h3 className="text-xl font-bold text-white">Authority Assertion</h3>
              <p className="text-base text-white/60 leading-relaxed">
                When an AI system requests execution permission, the Anchor Band receives the intent specification. The wearer reviews and approves or denies through a secure haptic interface — no screens, no voice, only tactile confirmation.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Step 03</div>
              <h3 className="text-xl font-bold text-white">Cryptographic Signing</h3>
              <p className="text-base text-white/60 leading-relaxed">
                Approved intents are cryptographically signed by the band's secure element. This signature travels with the execution request through the entire stack, creating an immutable audit trail of human authorization.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Step 04</div>
              <h3 className="text-xl font-bold text-white">Physical Anchor Verification</h3>
              <p className="text-base text-white/60 leading-relaxed">
                The signature is verified against the physical anchor registry before execution proceeds. If the band is removed, loses biometric lock, or moves outside authorized geofences, all permissions are immediately revoked.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-10 py-12 border-t border-white/5">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Key Capabilities</h2>
          <ul className="space-y-8 text-white/70 list-none font-light text-lg">
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/AUTH</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Continuous Identity Verification</div>
                <div className="text-base text-white/50">Multi-factor biometric monitoring ensures the authorized individual remains in control at all times.</div>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/CONSENT</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Explicit Authorization Protocol</div>
                <div className="text-base text-white/50">Every AI action requires deliberate, conscious approval. Passive consent is architecturally impossible.</div>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/REVOKE</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Instant Revocation</div>
                <div className="text-base text-white/50">Remove the band or trigger emergency shutdown, and all in-flight AI operations terminate immediately.</div>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/AUDIT</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Immutable Authorization Chain</div>
                <div className="text-base text-white/50">Every approval creates a cryptographically signed record that cannot be altered or repudiated.</div>
              </div>
            </li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="space-y-10">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Deployment Contexts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Executive Decision Systems</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                C-suite leaders authorizing AI-driven financial transactions, strategic decisions, or operational changes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Medical Authorization</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Physicians approving AI diagnostic recommendations or automated treatment protocols in clinical settings.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Defense & Security</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Military and law enforcement personnel controlling AI systems with kinetic or surveillance capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="space-y-8 py-12 border-t border-white/5">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-xs uppercase tracking-widest text-white/40">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Authentication</span>
                <span className="text-white leading-relaxed">Multi-modal biometric (PPG, GSR, Temp)</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Connectivity</span>
                <span className="text-white leading-relaxed">Secure BLE 5.2 + Optional Cellular</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Security Chip</span>
                <span className="text-white leading-relaxed">Dedicated secure element (EAL6+)</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Battery Life</span>
                <span className="text-white leading-relaxed">72 hours continuous operation</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Form Factor</span>
                <span className="text-white leading-relaxed">Wearable band (adjustable, medical-grade)</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Status</span>
                <span className="text-white leading-relaxed">Prototype // Q2 2026 Alpha Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-white/10 p-12 bg-white/[0.01] text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Interested in Early Access?</h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto">
            Anchor Band deployment is limited to institutional partners during the prototype phase. Contact our team to discuss integration requirements.
          </p>
          <a 
            href="mailto:registry@thirdvision.ai" 
            className="inline-block text-sm font-mono uppercase tracking-widest text-black bg-[#BFA35B] px-8 py-4 hover:bg-white transition-all"
          >
            Contact Registry
          </a>
        </section>

      </div>
    </Layout>
  );
};

export default AnchorBand;
