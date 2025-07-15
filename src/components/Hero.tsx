import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              チームの仕事を、もっとシンプルに。
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              タスク管理からレポートまで。Asana ライクなワークスペースを体験しよう。
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-8 py-4 bg-[#3E6CFF] text-white font-semibold rounded-lg hover:bg-[#2E5CEF] transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="無料で始める"
              >
                無料で始める
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB06B] to-[#FF6BCA] rounded-3xl opacity-90"></div>
            <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Image
                src="/dashboard-preview.svg"
                alt="ダッシュボードのプレビュー"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};