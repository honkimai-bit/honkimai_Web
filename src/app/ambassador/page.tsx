import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'アンバサダー向け',
};

export default function Ambassador() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-text-main leading-tight">海士町の話を、<br />米と一緒に手渡そう。</h1>
      
      <div className="page-image relative w-full mb-12">
        <Image src="/images/gift-handover.png" alt="米を手渡すイメージ" fill sizes="(max-width: 767px) 90vw, 560px" className="object-contain" />
      </div>
      <div className="bg-white p-8 md:p-12 mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-kinari pb-4">オフィシャルアンバサダーとは</h2>
        <p className="leading-loose mb-6">
          アンバサダーは、販売ノルマを負う営業員ではありません。<br />
          まずはご自身で食べていただき、「おいしい」と思ったら大切な人へお渡しする。そして本氣米を入口に、少しだけ海士町の話を紹介していただく「案内人」です。
        </p>
        <ul className="list-disc pl-5 space-y-3 opacity-90 mb-8">
          <li>まず自分で食べる</li>
          <li>おいしいと思ったら大切な人へ渡す</li>
          <li>本氣米を入口に海士町を紹介する</li>
        </ul>
      </div>

      <div className="bg-kinari p-8 border border-text-main/10">
        <h3 className="text-xl font-bold mb-4 text-text-main">今後の取り組みについて（準備中）</h3>
        <p className="text-sm leading-loose opacity-80">
          ※2合パック、紹介カード、紹介者別QRコード、紹介結果のフィードバック、限定ロット、交流会などの各種施策は、現在実施に向けて準備中です。詳細が決定次第、こちらでお知らせいたします。
        </p>
      </div>
    </div>
  );
}
