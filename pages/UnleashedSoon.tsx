
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const UnleashedSoon: React.FC = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <Layout showNav={false}>
      <div className="h-[70vh] flex items-center justify-center flex-col space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-accent font-mono text-2xl tracking-[0.5em] uppercase animate-pulse">
            to be unleashed soon
          </h1>
          <p className="text-white/20 font-mono text-xs uppercase tracking-widest">
            Module Access: Restricted // Layering Protocols in Progress
          </p>
        </div>

        <div className="border border-white/10 p-8 bg-white/[0.02] flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-xs text-white/40 uppercase">Automatic Redirection in:</span>
            <span className="text-white font-mono text-xl tabular-nums font-bold">{seconds}s</span>
          </div>
          
          <button 
            onClick={() => navigate('/')}
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 border border-white/10 px-6 py-2 hover:bg-white hover:text-black transition-all"
          >
            Manual Return
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UnleashedSoon;
