import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 TaskFlow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-200"
              aria-label="特定商取引法に基づく表記"
            >
              特定商取引法に基づく表記
            </a>
            <a
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
              aria-label="プライバシーポリシー"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};