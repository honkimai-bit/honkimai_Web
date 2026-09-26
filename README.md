# 海士の本氣米 公式ブランドサイト

海士町（あまちょう）のブランド米「海士の本氣米」の公式サイトです。

## 技術スタック
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: Vercel 推奨

## ローカルでの開発・動作確認
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:3000)
npm run dev

# プロダクションビルド
npm run build
```

## コンテンツの更新方法
本サイトは静的生成（SSG）を基本としています。
- **テキストの変更**: `src/app/` 以下の各 `page.tsx` のテキストを直接編集してください。
- **よくある質問（FAQ）の追加**: `src/app/faq/page.tsx` 内の `faqs` 配列に質問と回答を追加するだけで、画面上の表示と構造化データ（JSON-LD）の両方が自動更新されます。
- **アクセス解析（GA4）の設定**: `.env.local` ファイルを作成し、`NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` と設定してください。

## 画像の差し替え方法
現在、画像はプレースホルダー（SVG）になっています。正式な写真が用意でき次第、`public/images/` 以下の同名ファイルを上書きしてください。

対象ファイル：
- `hero-rice.jpg` または `hero-rice.svg` (メインビジュアル: 炊きたてのごはん)
- `rice-koshihikari.jpg` または `rice-koshihikari.svg` (コシヒカリ)
- `rice-kinumusume.jpg` または `rice-kinumusume.svg` (きぬむすめ)
- `soil-cattle.jpg` または `soil-cattle.svg` (隠岐牛の完熟堆肥)
- `soil-oyster-shell.jpg` または `soil-oyster-shell.svg` (牡蠣殻粉末)
- `ama-rice-field.jpg` または `ama-rice-field.svg` (海士町の田んぼ)
- `producer-group.jpg` または `producer-group.svg` (生産者)
- `gift-package.jpg` または `gift-package.svg` (贈答用パッケージ)

※ `svg` から `jpg` など拡張子が変わる場合は、対応する `page.tsx` 側の `src="/images/xxx.svg"` というパスも `.jpg` に変更してください。

## Vercelへのデプロイ方法
1. GitHubへこのリポジトリをPushします。（※まずはプライベートリポジトリ推奨）
2. Vercelのダッシュボードから「Add New...」>「Project」を選択します。
3. Pushしたリポジトリをインポートします。
4. Framework Preset が「Next.js」になっていることを確認し、「Deploy」をクリックします。
5. （必要に応じて）Settings > Environment Variables から `NEXT_PUBLIC_GA_ID` を設定し、再デプロイしてください。
