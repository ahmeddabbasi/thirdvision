
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import AnchorBand from './pages/AnchorBand';
import CivicCube from './pages/CivicCube';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/origin" element={<AnchorBand />} />
        <Route path="/studio" element={<CivicCube />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
