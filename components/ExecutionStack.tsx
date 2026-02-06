
import React, { useState, useEffect, useCallback } from 'react';
import { STACK_LAYERS, StackState, Layer } from '../types';

interface ExecutionStackProps {
  initialTrigger?: boolean;
  onComplete?: (success: boolean) => void;
  targetFailAt?: number | null;
}

export const ExecutionStack: React.FC<ExecutionStackProps> = ({ 
  initialTrigger = false, 
  onComplete,
  targetFailAt = null 
}) => {
  const [layers, setLayers] = useState<Layer[]>(
    STACK_LAYERS.map(label => ({
      id: label,
      label,
      status: 'idle',
      logs: [`SYSTEM_AWAITING_SIGNAL`]
    }))
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const resetStack = useCallback(() => {
    setLayers(STACK_LAYERS.map(label => ({
      id: label,
      label,
      status: 'idle',
      logs: [`SYSTEM_AWAITING_SIGNAL`]
    })));
    setIsProcessing(false);
  }, []);

  const runSequence = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    for (let i = 0; i < STACK_LAYERS.length; i++) {
      // 1. Initial Scanning
      setLayers(prev => prev.map((l, idx) => idx === i ? { 
        ...l, 
        status: 'scanning', 
        logs: [`METRICS_ACQUISITION_L${i+1}`] 
      } : l));
      await new Promise(r => setTimeout(r, 600));

      // 2. Admissibility Logic Check
      const willFail = targetFailAt === i;
      
      if (willFail) {
        setLayers(prev => prev.map((l, idx) => idx === i ? { 
            ...l, 
            status: 'fail', 
            logs: [`ADMISSIBILITY_VIOLATION`, `TERMINATED`] 
        } : l));
        
        if (i >= 3) { // Layer 04 is ADMISSIBILITY (index 3)
             setLayers(prev => prev.map((l, idx) => idx > i ? { ...l, status: 'suppressed', logs: [`EXECUTION_PREVENTED`] } : l));
        }
        
        setIsProcessing(false);
        onComplete?.(false);
        return;
      }

      // 3. Success Phase
      setLayers(prev => prev.map((l, idx) => idx === i ? { 
        ...l, 
        status: 'pass', 
        logs: [`STATE_VERIFIED_0x${(Math.random()*1000).toString(16).slice(0,4)}`] 
      } : l));
      await new Promise(r => setTimeout(r, 300));
    }

    setIsProcessing(false);
    onComplete?.(true);
  }, [isProcessing, targetFailAt, onComplete]);

  useEffect(() => {
    if (initialTrigger) runSequence();
  }, [initialTrigger, runSequence]);

  return (
    <div className="w-full bg-[#0C0C0E] border border-white/10 p-1 flex flex-col h-full shadow-2xl">
      <div className="bg-[#141417] p-4 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 ${isProcessing ? 'bg-accent animate-pulse' : 'bg-white/20'}`} />
            <h3 className="font-mono text-[11px] font-bold tracking-widest text-white/80 uppercase">Execution_Stack_V0</h3>
        </div>
        <span className="font-mono text-[9px] text-white/40 uppercase">Cluster: AX-9</span>
      </div>

      <div className="flex-grow p-4 space-y-2 overflow-y-auto bg-[#08080A]">
        {layers.map((layer, idx) => (
          <div key={layer.id} className={`group transition-all duration-200 border-l-2 ${
            layer.status === 'scanning' ? 'border-accent bg-accent/5' :
            layer.status === 'pass' ? 'border-accent/40 bg-white/[0.02]' :
            layer.status === 'fail' ? 'border-red-500 bg-red-500/5' :
            layer.status === 'suppressed' ? 'border-white/5 bg-white/[0.01]' : 'border-white/10'
          }`}>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-mono text-[10px] text-white/20 w-4">0{idx + 1}</span>
                <span className={`text-xs font-bold tracking-tight uppercase ${
                  layer.status === 'pass' ? 'text-accent' : 
                  layer.status === 'fail' ? 'text-red-500' : 
                  layer.status === 'suppressed' ? 'text-white/20' : 'text-white/60'
                }`}>
                  {layer.label}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`font-mono text-[9px] uppercase tracking-tighter ${
                  layer.status === 'pass' ? 'text-accent' : 
                  layer.status === 'fail' ? 'text-red-500' : 
                  layer.status === 'scanning' ? 'text-accent animate-pulse' : 'text-white/20'
                }`}>
                  {layer.status}
                </span>
              </div>
            </div>
            
            {(layer.status !== 'idle' && layer.status !== 'suppressed') && (
              <div className="px-11 pb-3 font-mono">
                {layer.logs.map((log, lIdx) => (
                  <div key={lIdx} className="text-[9px] text-white/30 lowercase leading-tight py-0.5 border-t border-white/[0.03]">
                    <span className="text-white/10 mr-2">sys:</span>{log}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#141417] border-t border-white/5 flex justify-between items-center">
        <div className="text-[9px] font-mono text-white/30">
            SYSTEM_AWAITING_INTENT
        </div>
        {!isProcessing && (
          <button 
            onClick={() => { resetStack(); setTimeout(runSequence, 100); }}
            className="text-accent underline underline-offset-4 font-bold text-[10px] tracking-widest uppercase hover:text-white transition-all"
          >
            Run Stack
          </button>
        )}
      </div>
    </div>
  );
};
