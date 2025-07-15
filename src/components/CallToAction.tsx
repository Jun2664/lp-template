import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB06B] to-[#FF6BCA] opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            今すぐチームの生産性を向上させましょう
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            無料で始められます。クレジットカード不要。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3E6CFF] font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="無料で始める"
            >
              無料で始める
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-200"
              aria-label="お問い合わせ"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};