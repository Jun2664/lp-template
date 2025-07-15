import React from 'react';
import { features } from '@/src/data/features';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            主な機能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            生産性を最大化する3つの主要機能
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-[#3E6CFF] rounded-lg flex items-center justify-center mb-6">
                <feature.Icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};