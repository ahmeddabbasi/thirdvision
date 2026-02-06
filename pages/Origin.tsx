
import React from 'react';
import Layout from '../components/Layout';

const Origin: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-8 py-24 space-y-16">
        <header className="border-b border-white/20 pb-8">
          <h1 className="text-3xl font-bold tracking-tighter uppercase">Constitutional Protocol_Origin</h1>
          <p className="font-mono text-xs text-white/40 mt-2">Document Ref: 3V-AI-2024-ALPHA</p>
        </header>

        <section className="space-y-8 text-white/80 leading-relaxed font-inter">
          <p>
            Third Vision AI was established not as a tool for creation, but as a system for control. 
            In an era of non-deterministic intelligence, the requirement for an anchored execution 
            layer becomes the primary bottleneck for institutional trust.
          </p>

          <div className="space-y-4 font-mono text-sm bg-white/5 p-8 border border-white/10">
            <h2 className="text-accent font-bold">I. THE DETERMINISTIC CLAUSE</h2>
            <p className="text-xs text-white/60">
              All intelligence must pass through the six-layer Execution Stack. Any outcome that bypasses 
              the ADMISSIBILITY layer is considered null and void. Execution is anchored to physical 
              infrastructure to ensure non-malleability of the governance protocol.
            </p>
          </div>

          <p>
            Traditional AI deployments suffer from 'drift'—the gradual decoupling of intent from 
            governance. Third Vision AI implements the 'Civic Cube' architecture, wherein 
            the INTENT is matched against AUTHORITY and CONTEXT before a single token of 
            EXECUTION is permitted.
          </p>

          <p>
            The physical anchor is the final truth. Our hardware nodes are air-gapped from 
            commercial internet protocols, utilizing dedicated fiber links for transmission. 
            This is not a cloud service. This is infrastructure.
          </p>

          <div className="grid grid-cols-2 gap-12 py-8 border-y border-white/10">
            <div>
                <h4 className="font-mono text-xs text-secondary mb-4 uppercase">Governance Model</h4>
                <ul className="text-xs space-y-2 text-white/40 list-disc pl-4">
                    <li>Strict Admissibility Filtering</li>
                    <li>Hardware-Level Anchoring</li>
                    <li>Zero-Trust Identity Protocol</li>
                </ul>
            </div>
            <div>
                <h4 className="font-mono text-xs text-secondary mb-4 uppercase">Compliance Layer</h4>
                <ul className="text-xs space-y-2 text-white/40 list-disc pl-4">
                    <li>ISO/IEC 42001 (AI Systems)</li>
                    <li>Cryptographic Audit Logs</li>
                    <li>Immutable Event Streams</li>
                </ul>
            </div>
          </div>

          <p className="text-white/40 italic">
            "Trust is a property of systems, not individuals."
          </p>
        </section>

        <footer className="pt-24 opacity-20 font-mono text-[10px] text-center">
             You are not building a website. You are building a controlled environment for trust transfer.
        </footer>
      </div>
    </Layout>
  );
};

export default Origin;
