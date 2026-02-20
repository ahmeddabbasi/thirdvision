
import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load all pages for better code splitting
const Home = lazy(() => import('./pages/Home'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const AnchorBand = lazy(() => import('./pages/AnchorBand'));
const CivicCube = lazy(() => import('./pages/CivicCube'));
const Recognition = lazy(() => import('./pages/Recognition'));

// Lightweight loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#08080A]">
    <div className="font-mono text-[#BFA35B] text-sm tracking-wider animate-pulse">
      [ LOADING ]
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/origin" element={<AnchorBand />} />
          <Route path="/studio" element={<CivicCube />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
