
import React, { useState, useEffect, memo, useCallback } from 'react';
import { Logo } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = memo(({ children, showNav = true }) => {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [children]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-system">
      {/* Header (Responsive) */}
      <header className="h-20 md:h-32 flex items-center px-6 md:px-12 justify-between sticky top-0 bg-system/80 backdrop-blur-sm z-50">
        <a href="#/" className="flex items-center cursor-pointer">
          <Logo className="h-8 md:h-12 w-auto" />
        </a>
        
        {showNav && (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 text-[13px] font-mono font-semibold uppercase tracking-[0.2em] text-[#BFA35B]">
              <a href="#/origin" className="hover:text-white transition-colors">Origin</a>
              <a href="#/studio" className="hover:text-white transition-colors">Studio</a>
              <a href="#/recognition" className="hover:text-white transition-colors">Recognition</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1 p-2 border border-white/10 hover:border-[#BFA35B] transition-colors"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-[#BFA35B]"></span>
              <span className="block w-5 h-0.5 bg-[#BFA35B]"></span>
              <span className="block w-4 h-0.5 bg-[#BFA35B]"></span>
            </button>
          </>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {showNav && mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#08080A] bg-opacity-98 z-40 flex items-center justify-center">
          <nav className="flex flex-col space-y-8 text-center">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-4">
              [ SYSTEM_MENU ]
            </div>
            <a 
              href="#/origin" 
              className="text-2xl font-mono font-semibold uppercase tracking-[0.2em] text-[#BFA35B] hover:text-white transition-colors active:text-accent"
            >
              Origin
            </a>
            <a 
              href="#/studio" 
              className="text-2xl font-mono font-semibold uppercase tracking-[0.2em] text-[#BFA35B] hover:text-white transition-colors active:text-accent"
            >
              Studio
            </a>
            <a 
              href="#/recognition" 
              className="text-2xl font-mono font-semibold uppercase tracking-[0.2em] text-[#BFA35B] hover:text-white transition-colors active:text-accent"
            >
              Recognition
            </a>
            <button 
              onClick={closeMenu}
              className="mt-8 text-xs font-mono uppercase tracking-widest text-white/40 border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all"
            >
              Close
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer (Responsive with Safe Areas) */}
      <footer 
        className="p-6 md:p-12 border-t border-white/5 bg-[#050507] font-mono text-[10px] text-white/40"
        style={{
          paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
          paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="space-y-3 tracking-wide">
            <div className="flex space-x-4">
              <span className="font-semibold">SYSTEM_STATUS:</span>
              <span className="text-white">STATUS: INSTITUTIONAL PILOT PHASE</span>
            </div>
            <div className="flex space-x-4">
              <span className="font-semibold">TIMESTAMP:</span>
              <span className="text-white tabular-nums">{timestamp}</span>
            </div>
            
            <div className="pt-4 space-y-3 text-[11px] normal-case tracking-normal text-[#BFA35B]">
              <div className="text-white font-semibold uppercase tracking-wider">Third Vision AI</div>
              
              <div className="space-y-1">
                <div>Head Office — South Africa</div>
                <div>Breakwater Boulevard</div>
                <div>V&A Waterfront</div>
                <div>Cape Town, South Africa</div>
                <div className="pt-1">
                  <span>General Inquiries: </span>
                  <a href="mailto:jay@thirdvisionai.com" className="hover:text-white transition-colors">jay@thirdvisionai.com</a>
                </div>
              </div>
              
              <div className="space-y-1 pt-2">
                <div>U.S. Offices</div>
                <div>Boston, Massachusetts, USA 02215</div>
                <div className="pt-1">
                  <a href="mailto:winn@thirdvisionai.com" className="hover:text-white transition-colors">winn@thirdvisionai.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:text-right space-y-4">
            <div className="text-accent/90 uppercase tracking-[0.15em] leading-relaxed font-semibold max-w-xs ml-auto">
              Third Vision AI<br />
              <span className="text-white/60 text-[10px] tracking-[0.2em]">Infrastructure for Controlled Trust Transfer</span>
            </div>
            <div className="text-[9px] uppercase tracking-widest">
              &copy; 2024 Third Vision Systems // Execution Governed
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
