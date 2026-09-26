# 海士の本氣米 公式ブランドサイト

海士町（あまちょう）のブランド米「海士の本氣米」の公式サイトです。

## 技術スタック
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: Cloudflare Workers（静的アセット配信）

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

## Cloudflare Workersへのデプロイ方法
本サイトは `next build` で静的HTML・CSS・JavaScriptを `out/` に生成します。
`wrangler.jsonc` にビルドコマンドと配信フォルダを定義しています。
`next/image` は元画像を配信し、サーバー側の画像最適化は使用しません。

Cloudflare Workers Builds の設定：
- リポジトリ: `honkimai-bit/honkimai_Web`
- プロダクションブランチ: `main`
- ルートディレクトリ: `/`
- ビルドコマンド: 空欄（Wranglerが `npm run build` を実行）
- デプロイコマンド: `npx wrangler deploy`
- Worker名: `honkimai-web`

ローカルでの配信確認・デプロイ：
```bash
npm start
npm run deploy
```

どちらも配信前にビルドを実行します。`npm run deploy` にはCloudflareへの認証が必要です。
GA4を使用する場合は、Cloudflareのビルド変数に `NEXT_PUBLIC_GA_ID` を設定して再ビルドしてください。

## ロゴ・動画・FAQの参照元
- ヘッダー・フッターのロゴ: BASE公式ショップで使用中の本氣米ロゴ（`public/images/brand-logo-base.jpg`）。元画像を改変せず使用。
  - https://baseec-img-mng.akamaized.net/images/user/logo/b56adaa811b6326db60047ad30ed87f9.jpg
- 動画: 既存の本氣米プロモーション映像（https://youtu.be/q6ovwLu0o7A）。トップと「つくる人」で共通コンポーネント `BrandVideo` を使用。
- 品種比較FAQ: BASEの商品説明を参照（2026年9月26日確認）。
  - コシヒカリ: https://honkimai.thebase.in/items/37024519
  - きぬむすめ: https://honkimai.thebase.in/items/37024548
