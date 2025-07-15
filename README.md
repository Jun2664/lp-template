# プロジェクト管理ツール LP

Next.js 14 + TypeScript + Tailwind CSS で作成したプロジェクト管理ツールのランディングページです。

## 特徴

- 📱 レスポンシブデザイン（390px / 768px / 1280px 対応）
- 🎨 モダンなカラーパレット（#3E6CFF, #FFB06B, #FF6BCA）
- 🔧 TypeScript による型安全性
- 📖 Storybook による UI コンポーネント管理
- ⚡ Vercel での簡単デプロイ

## 技術スタック

- **フレームワーク**: Next.js 14 (app Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 3
- **アイコン**: lucide-react
- **UI カタログ**: Storybook
- **デプロイ**: Vercel

## セクション構成

- `hero`: メインビジュアル + CTA
- `social-proof`: 導入企業ロゴ一覧
- `features`: 3つの主要機能紹介
- `workflow`: 3ステップの使い方説明
- `cta`: 最終アクションセクション
- `footer`: 簡易フッター

## ローカル環境構築

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてください。

### 3. Storybook の起動

```bash
npm run storybook
```

ブラウザで `http://localhost:6006` にアクセスしてください。

## デプロイ手順（Vercel）

### 1. Vercel アカウントの作成

[Vercel](https://vercel.com) でアカウントを作成します。

### 2. プロジェクトのデプロイ

```bash
# Vercel CLI のインストール
npm install -g vercel

# プロジェクトのデプロイ
vercel
```

または、GitHubリポジトリと連携してVercelダッシュボードからデプロイできます。

## ディレクトリ構成

```
/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Features.tsx
│   │   ├── Workflow.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Footer.tsx
│   │   └── LogoCloud.tsx
│   ├── data/
│   │   └── features.ts
│   └── stories/
│       └── Hero.stories.tsx
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── README.md
```

## カラーパレット

```javascript
const palette = {
  primary:  '#3E6CFF',   // プライマリーブルー
  accent1:  '#FFB06B',   // グラデーション1
  accent2:  '#FF6BCA',   // グラデーション2
  grayText: '#687387',   // テキストグレー
}
```

## スクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド後のプレビュー
npm run start

# Storybook 起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 注意事項

- このプロジェクトは学習・デモ目的で作成されています
- 画像はオリジナルのSVGプレースホルダーを使用しています
- 実際のフォーム送信機能は含まれていません（CTA ボタンは mailto: リンクまたはダミーページ）