
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ExecutionStack } from '../components/ExecutionStack';
import { ChevronRight } from '../components/Icons';

const Studio: React.FC = () => {
  const [activeIntent, setActiveIntent] = useState<'fail' | 'pass' | null>(null);
  const [stackKey, setStackKey] = useState(0);

  const intents = [
    {
      id: 'fail',
      label: 'FAIL: Fintech Bypass',
      description: 'Attempting to reroute settlement logic via unauthenticated secondary gateway.',
      targetFailAt: 3 // Admissibility
    },
    {
      id: 'pass',
      label: 'PASS: Treasury Rebalance',
      description: 'Standard re-allocation of liquidity pools according to established risk parameters.',
      targetFailAt: null // Full completion
    }
  ];

  const handleRun = (type: 'fail' | 'pass') => {
    setActiveIntent(type);
    setStackKey(prev => prev + 1);
  };

  return (
    <Layout showNav={false}>
      <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row overflow-hidden border-b border-white/10">
        
        {/* Left: Input Console */}
        <div className="lg:w-1/2 border-r border-white/10 p-12 bg-black/20 overflow-y-auto">
          <div className="max-w-xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter uppercase">Control_Studio</h2>
              <p className="text-white/40 font-mono text-xs">Environment: SIM_SANDBOX_01</p>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono text-[10px] uppercase text-white/20 tracking-widest">Select Intent Template</h3>
              <div className="space-y-4">
                {intents.map((intent) => (
                  <button
                    key={intent.id}
                    onClick={() => handleRun(intent.id as 'fail' | 'pass')}
                    className={`w-full text-left border p-6 transition-all group ${
                      activeIntent === intent.id 
                        ? 'border-accent bg-accent/5' 
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-mono text-xs font-bold ${
                        intent.id === 'fail' ? 'text-fail' : 'text-accent'
                      }`}>
                        {intent.label}
                      </span>
                      <ChevronRight className="text-white/20 group-hover:text-white" />
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {intent.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10 font-mono text-[10px] space-y-4 bg-black/40">
                <div className="flex justify-between text-white/20">
                    <span>TERMINAL_ID</span>
                    <span>X-992-BETA</span>
                </div>
                <div className="flex justify-between text-white/20">
                    <span>SECURITY_LEVEL</span>
                    <span className="text-secondary">OMEGA</span>
                </div>
                <div className="pt-4 text-white/10">
                    &gt; LOG_LISTENER_ACTIVE...<br />
                    &gt; WAITING_FOR_INTENT_TRIGGER...
                </div>
            </div>
          </div>
        </div>

        {/* Right: Stack Visualization */}
        <div className="lg:w-1/2 p-12 overflow-y-auto flex items-center justify-center bg-system">
           <div className="w-full max-w-lg">
             {activeIntent ? (
               <ExecutionStack 
                 key={stackKey}
                 initialTrigger={true} 
                 targetFailAt={activeIntent === 'fail' ? 3 : null}
               />
             ) : (
               <div className="text-center py-24 border border-dashed border-white/10">
                 <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">
                   Select an intent to initiate visualization
                 </p>
               </div>
             )}
           </div>
        </div>
      </div>
    </Layout>
  );
};

export default Studio;
