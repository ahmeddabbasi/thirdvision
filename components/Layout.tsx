
import React, { useState, useEffect } from 'react';
import { Logo } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNav = true }) => {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-system">
      {/* Header (Top, Minimal) */}
      <header className="h-32 flex items-center px-12 justify-between sticky top-0 bg-system/80 backdrop-blur-sm z-50">
        <div className="flex items-center">
          <Logo className="h-12 w-auto" />
        </div>
        
        {showNav && (
          <nav className="flex space-x-10 text-[13px] font-mono font-semibold uppercase tracking-[0.2em] text-[#BFA35B]">
            <a href="#/unleashed?from=foundation" className="hover:text-white transition-colors">Foundation</a>
            <a href="#/origin" className="hover:text-white transition-colors">Origin</a>
            <a href="#/studio" className="hover:text-white transition-colors">Studio</a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer (Minimal, Required) */}
      <footer className="p-12 border-t border-white/5 bg-[#050507] font-mono text-[10px] text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="space-y-2 uppercase tracking-widest">
            <div className="flex space-x-4">
              <span>SYSTEM_STATUS:</span>
              <span className="text-white">PROTOTYPE_ACTIVE</span>
            </div>
            <div className="flex space-x-4">
              <span>TIMESTAMP:</span>
              <span className="text-white tabular-nums">{timestamp}</span>
            </div>
            <div className="flex space-x-4">
              <span>CONTACT:</span>
              <a href="mailto:registry@thirdvision.ai" className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white">registry@thirdvision.ai</a>
            </div>
          </div>
          
          <div className="md:text-right space-y-4">
            <div className="text-secondary opacity-70 uppercase tracking-[0.2em] leading-relaxed italic max-w-xs ml-auto">
              You are not building a website. You are building a controlled environment for trust transfer.
            </div>
            <div className="text-[9px] uppercase tracking-widest">
              &copy; 2024 Third Vision Systems // Execution Governed
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
