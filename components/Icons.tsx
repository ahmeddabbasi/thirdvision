
import React, { memo } from 'react';

export const Logo = memo<{ className?: string }>(({ className }) => (
  <svg width="240" height="60" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Eye Outline */}
    <path d="M20 50C20 50 50 20 100 20C150 20 180 50 180 50C180 50 150 80 100 80C50 80 20 50 20 50Z" stroke="#BFA35B" strokeWidth="4" />
    <path d="M30 50C30 50 55 28 100 28C145 28 170 50 170 50C170 50 145 72 100 72C55 72 30 50 30 50Z" stroke="#BFA35B" strokeWidth="1" opacity="0.5" />
    
    {/* Pupil */}
    <circle cx="100" cy="50" r="22" fill="#00E5FF" fillOpacity="0.8" />
    <circle cx="100" cy="50" r="22" stroke="#00E5FF" strokeWidth="2" />
    <path d="M100 35V65M85 50H115" stroke="white" strokeWidth="1.5" opacity="0.8" />
    <path d="M100 42L108 50L100 58L92 50L100 42Z" fill="white" />

    {/* Text */}
    <text x="200" y="45" fontFamily="Inter" fontWeight="700" fontSize="38" fill="#00E5FF">Third</text>
    <text x="200" y="82" fontFamily="Inter" fontWeight="700" fontSize="38" fill="#00E5FF">Vision <tspan fill="#BFA35B">AI</tspan></text>
    
    {/* Slogan */}
    <text x="70" y="96" fontFamily="Inter" fontStyle="italic" fontSize="14" fill="#BFA35B" letterSpacing="0.05em">Where Intuition Meets Intelligence</text>
  </svg>
));

Logo.displayName = 'Logo';

export const AnchorBand = memo<{ className?: string }>(({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 7V17" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="10" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

AnchorBand.displayName = 'AnchorBand';

export const CivicCube = memo<{ className?: string }>(({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
));

CivicCube.displayName = 'CivicCube';

export const ChevronRight = memo<{ className?: string }>(({ className }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" />
  </svg>
));

ChevronRight.displayName = 'ChevronRight';
