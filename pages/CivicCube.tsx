
import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const CivicCube: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-16 md:space-y-24">
        
        {/* Hero */}
        <section className="space-y-6 md:space-y-8 border-b border-white/5 pb-8 md:pb-12">
          <div className="flex items-center space-x-3 md:space-x-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/40">
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#BFA35B]">Civic Cube</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Civic Cube
          </h1>
          <p className="text-2xl md:text-3xl text-white/50 font-light leading-snug max-w-3xl">
            Institutional governance node for contextual AI constraints.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">Institutional Hardware</span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2">Context Layer</span>
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-6 md:space-y-8 max-w-3xl">
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">Overview</h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
            The Civic Cube is a physical hardware node that provides the contextual governance layer for organizational AI execution.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            It sits between authorized users (via Anchor Band) and AI systems, enforcing organizational policies, regulatory constraints, and contextual admissibility rules before any execution occurs. The Cube is the institutional anchor — a physically present, air-gapped decision arbiter.
          </p>
        </section>

        {/* How It Works */}
        <section className="space-y-8 md:space-y-12">
          <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">How It Works</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <div className="border border-white/10 p-6 md:p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-[10px] md:text-xs uppercase tracking-widest">Layer 01</div>
              <h3 className="text-lg md:text-xl font-bold text-white">Intent Reception</h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                The Civic Cube receives cryptographically signed execution requests from Anchor Band holders. Each request includes the AI action, target system, and required permissions.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Layer 02</div>
              <h3 className="text-xl font-bold text-white">Context Matching</h3>
              <p className="text-base text-white/60 leading-relaxed">
                The request is evaluated against contextual constraints: organizational policies, regulatory requirements, temporal restrictions, data classification rules, and operational boundaries.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Layer 03</div>
              <h3 className="text-xl font-bold text-white">Admissibility Determination</h3>
              <p className="text-base text-white/60 leading-relaxed">
                The Cube runs a deterministic admissibility algorithm. If the request passes all constraints, it proceeds. If not, it is rejected with a detailed reason code. There are no probabilistic decisions.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <div className="text-[#BFA35B] font-mono text-xs uppercase tracking-widest">Layer 04</div>
              <h3 className="text-xl font-bold text-white">Execution Authorization</h3>
              <p className="text-base text-white/60 leading-relaxed">
                Approved requests are forwarded to the AI system with an institutional authorization token. The Cube maintains continuous monitoring and can revoke permission mid-execution if context changes.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-10 py-12 border-t border-white/5">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Key Capabilities</h2>
          <ul className="space-y-8 text-white/70 list-none font-light text-lg">
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/POLICY</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Policy Enforcement Engine</div>
                <div className="text-base text-white/50">Define complex organizational rules as formal logic. The Cube evaluates every request against these rules before execution proceeds.</div>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/CONTEXT</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Dynamic Contextual Awareness</div>
                <div className="text-base text-white/50">Integrates with organizational data sources to understand compliance requirements, data sensitivity, operational state, and environmental constraints.</div>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/AUDIT</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Comprehensive Audit Trail</div>
                <div className="text-base text-white/50">Every decision is logged with full context, creating an immutable record for compliance review and incident investigation.</div>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <span className="text-[#BFA35B] font-mono text-sm mt-1 min-w-[60px]">/ISOLATION</span>
              <div className="space-y-2">
                <div className="text-white font-semibold">Air-Gapped Architecture</div>
                <div className="text-base text-white/50">Critical governance logic runs on isolated hardware. No cloud dependency, no external API calls during admissibility determination.</div>
              </div>
            </li>
          </ul>
        </section>

        {/* Governance Model */}
        <section className="space-y-10">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Governance Constraints</h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
            The Civic Cube enforces institutional constraints through configurable policy modules. Organizations define what is admissible within their operational boundaries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <h3 className="text-lg font-bold text-white">Regulatory Compliance</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Industry-specific regulations (HIPAA, GDPR, SOC2, FedRAMP) are encoded as formal constraints. The Cube blocks any action that would violate compliance requirements.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <h3 className="text-lg font-bold text-white">Data Classification</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                AI systems cannot access data above their clearance level. The Cube enforces data sensitivity boundaries regardless of user authorization.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <h3 className="text-lg font-bold text-white">Operational Boundaries</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Time-based restrictions, geographic limits, and system dependencies are enforced. AI cannot act outside authorized operational windows.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.01] space-y-4">
              <h3 className="text-lg font-bold text-white">Risk Thresholds</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                High-risk actions (financial transactions, infrastructure changes, data deletion) require additional authorization layers or are blocked entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="space-y-10 py-12 border-t border-white/5">
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-secondary">Deployment Contexts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Financial Institutions</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Regulate AI trading systems, loan approval algorithms, and fraud detection tools to ensure compliance with banking regulations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Healthcare Systems</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Enforce HIPAA constraints, patient consent requirements, and clinical protocol adherence for medical AI applications.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Government Agencies</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Control AI systems operating on classified networks, ensuring adherence to security clearance levels and operational protocols.
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
                <span className="block text-secondary opacity-80 text-[11px]">Architecture</span>
                <span className="text-white leading-relaxed">Air-gapped node with secure enclave</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Connectivity</span>
                <span className="text-white leading-relaxed">Dedicated fiber / Secure LAN only</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Policy Engine</span>
                <span className="text-white leading-relaxed">Formal logic evaluation (sub-ms latency)</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Throughput</span>
                <span className="text-white leading-relaxed">10K+ authorization decisions/sec</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Form Factor</span>
                <span className="text-white leading-relaxed">Rackmount appliance / Edge deployment</span>
              </div>
              <div className="space-y-3">
                <span className="block text-secondary opacity-80 text-[11px]">Status</span>
                <span className="text-white leading-relaxed">STATUS: INSTITUTIONAL PILOT PHASE</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-white/10 p-12 bg-white/[0.01] text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Enterprise Deployment</h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto">
            Civic Cube deployment requires institutional partnership and custom integration planning. Contact our team to discuss governance requirements and pilot programs.
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

export default CivicCube;
