
import React, { useEffect, useRef, memo } from 'react';
import Layout from '../components/Layout';

const Recognition: React.FC = memo(() => {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to center the portrait when the page loads
    if (portraitRef.current) {
      setTimeout(() => {
        portraitRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-24 space-y-8 md:space-y-12">
        {/* Header */}
        <header className="border-b border-white/20 pb-6 md:pb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">Recognition & Leadership</h1>
          <p className="font-mono text-xs text-white/40 mt-2">AI Safety & Ethics Excellence</p>
        </header>

        {/* Portrait Section */}
        <section ref={portraitRef} className="flex flex-col items-center space-y-6 md:space-y-8 py-8 md:py-12">
          {/* Portrait */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-accent/30 overflow-hidden bg-white/5 shadow-2xl shadow-accent/20">
            <img 
              src="/resources/jayshree-mallaya.jpeg" 
              alt="Jayshree Mallaya" 
              className="w-full h-full object-cover object-center grayscale"
            />
          </div>

          {/* Name */}
          <div className="text-center space-y-2 md:space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Jayshree Mallaya
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-accent font-mono tracking-wider">
              AI Safety & Ethics Leader
            </p>
          </div>
        </section>

        {/* Rankings Section */}
        <section className="space-y-4 md:space-y-6 py-6 md:py-8 border-t border-white/5">
          <h3 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">
            Flavikon Rankings
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/5 p-6 md:p-8 border border-accent/20 space-y-3 md:space-y-4">
              <div className="text-accent font-mono text-xs md:text-sm uppercase tracking-wider">
                South Africa
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white">
                #2
              </div>
              <p className="text-white/70 text-sm md:text-base">
                AI Safety and Ethics
              </p>
            </div>

            <div className="bg-white/5 p-6 md:p-8 border border-accent/20 space-y-3 md:space-y-4">
              <div className="text-accent font-mono text-xs md:text-sm uppercase tracking-wider">
                Global
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white">
                #404
              </div>
              <p className="text-white/70 text-sm md:text-base">
                AI Safety and Ethics Worldwide
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-8 md:space-y-10 py-8 md:py-12 border-t border-white/5">
          <h3 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-secondary">
            About
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Founder */}
            <div className="group bg-white/5 border-l-4 border-accent p-6 md:p-8 hover:bg-white/[0.07] transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-accent text-3xl md:text-4xl">●</div>
                <div className="space-y-1">
                  <div className="text-accent font-mono text-xs uppercase tracking-wider">Role</div>
                  <p className="text-white text-lg md:text-xl font-semibold">Founder of Third Vision AI</p>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="group bg-white/5 border-l-4 border-accent p-6 md:p-8 hover:bg-white/[0.07] transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-accent text-3xl md:text-4xl">●</div>
                <div className="space-y-1">
                  <div className="text-accent font-mono text-xs uppercase tracking-wider">Expertise</div>
                  <p className="text-white text-lg md:text-xl font-semibold">Recognized AI Safety & Tech Ethics Leader</p>
                </div>
              </div>
            </div>

            {/* Ranking */}
            <div className="group bg-white/5 border-l-4 border-accent p-6 md:p-8 hover:bg-white/[0.07] transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-accent text-3xl md:text-4xl">●</div>
                <div className="space-y-1">
                  <div className="text-accent font-mono text-xs uppercase tracking-wider">Recognition</div>
                  <p className="text-white text-lg md:text-xl font-semibold">Ranked #2 in South Africa</p>
                </div>
              </div>
            </div>

            {/* Focus */}
            <div className="group bg-white/5 border-l-4 border-accent p-6 md:p-8 hover:bg-white/[0.07] transition-all">
              <div className="flex items-start space-x-4">
                <div className="text-accent text-3xl md:text-4xl">●</div>
                <div className="space-y-1">
                  <div className="text-accent font-mono text-xs uppercase tracking-wider">Focus Areas</div>
                  <p className="text-white text-lg md:text-xl font-semibold">Governance, Accountability, and Safe AI Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-12 opacity-20 font-mono text-[10px] text-center">
          Excellence in AI Safety and Ethics
        </footer>
      </div>
    </Layout>
  );
});

Recognition.displayName = 'Recognition';

export default Recognition;
