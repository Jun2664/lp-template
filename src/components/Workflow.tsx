import React from 'react';
import { Plus, Users, TrendingUp } from 'lucide-react';

const workflowSteps = [
  {
    number: '01',
    title: 'プロジェクト作成',
    description: 'チームの目標に合わせてプロジェクトを簡単に作成',
    Icon: Plus,
  },
  {
    number: '02',
    title: 'タスク割当',
    description: 'メンバーにタスクを割り当てて、責任を明確化',
    Icon: Users,
  },
  {
    number: '03',
    title: '進捗可視化',
    description: 'リアルタイムで進捗を確認し、成果を最大化',
    Icon: TrendingUp,
  },
];

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            使い方は簡単3ステップ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            誰でもすぐに始められるシンプルなワークフロー
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#3E6CFF] rounded-full flex items-center justify-center">
                    <step.Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#FFB06B] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-24">
                  <div className="w-0.5 h-16 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};