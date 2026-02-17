import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Add noindex meta tag for SEO
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    // Track page view
    console.log('Thank you page visited');
    
    // Optional: Track with analytics service (Google Analytics, Plausible, etc.)
    // Example: gtag('event', 'view_thank_you_page');
    
    return () => {
      // Cleanup: remove meta tag when component unmounts
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <Layout showNav={false}>
      <div className="min-h-[70vh] flex items-center justify-center flex-col space-y-12 px-6 pt-24 md:pt-12">
        <div className="max-w-2xl space-y-8 text-center">
          <h1 className="text-accent font-mono text-3xl md:text-4xl tracking-[0.3em] uppercase">
            Thank You
          </h1>
          
          <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
            Check your inbox for the download link.
          </p>

          <div className="border border-white/10 p-8 bg-white/[0.02] space-y-6">
            <div className="text-white/70 text-base leading-relaxed">
              We've sent you an email with your Execution Authority Framework document.
            </div>
            
            <div className="text-accent text-sm font-mono">
              ✓ Email sent to your inbox
            </div>

            <div className="text-white/60 text-sm leading-relaxed pt-4">
              Don't see it? Check your spam folder or contact us at <a href="mailto:jay@thirdvisionai.com" className="text-accent hover:underline">jay@thirdvisionai.com</a>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-white/60 text-sm">
              Interested in a pilot deployment?
            </p>
            <a 
              href="mailto:registry@thirdvision.ai?subject=Pilot Inquiry" 
              className="inline-block text-white text-base font-bold underline underline-offset-[8px] decoration-white/20 hover:decoration-white transition-all"
            >
              Contact Our Team
            </a>
          </div>

          <button 
            onClick={() => window.location.href = '/#/'}
            className="text-base font-bold text-accent border-2 border-accent px-8 py-3 hover:bg-accent hover:text-black transition-all mt-8 uppercase tracking-wider"
          >
            Return to Home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;
