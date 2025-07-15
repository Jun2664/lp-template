import { LucideIcon, CheckCircle2, Users, BarChart3 } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: 'タスク管理',
    description: 'チームのタスクを一元管理。期限やアサインも簡単に設定できます。',
    Icon: CheckCircle2,
  },
  {
    title: 'チームコラボレーション',
    description: 'リアルタイムでの共同作業。コメントやファイル共有もスムーズに。',
    Icon: Users,
  },
  {
    title: '進捗レポート',
    description: 'プロジェクトの進捗を可視化。データに基づいた意思決定をサポート。',
    Icon: BarChart3,
  },
];