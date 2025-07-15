import React from 'react';
import { LogoCloud } from './LogoCloud';

const placeholderLogos = [
  {
    name: 'Company A',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full text-gray-400">
        <rect x="10" y="10" width="20" height="20" rx="2" />
        <rect x="40" y="15" width="70" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Company B',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full text-gray-400">
        <circle cx="20" cy="20" r="10" />
        <rect x="40" y="15" width="70" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Company C',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full text-gray-400">
        <polygon points="20,10 30,30 10,30" />
        <rect x="40" y="15" width="70" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Company D',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full text-gray-400">
        <rect x="10" y="10" width="20" height="20" rx="10" />
        <rect x="40" y="15" width="70" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Company E',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full text-gray-400">
        <path d="M10,20 L20,10 L30,20 L20,30 Z" />
        <rect x="40" y="15" width="70" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Company F',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full text-gray-400">
        <rect x="10" y="10" width="20" height="20" rx="4" />
        <circle cx="50" cy="20" r="5" />
        <rect x="70" y="15" width="40" height="10" rx="2" />
      </svg>
    ),
  },
];

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 text-lg">
          多くの企業に信頼されています
        </p>
        <LogoCloud logos={placeholderLogos} />
      </div>
    </section>
  );
};