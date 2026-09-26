import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '贈り物',
};

export default function Gift() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif font-bold mb-12 text-text-main">贈り物</h1>
      <div className="page-image relative w-full mb-12">
        <Image src="/images/gift-set.png" alt="複数個セット・贈答セット" fill sizes="(max-width: 767px) 90vw, 560px" className="object-contain" />
      </div>
      <h2 className="text-2xl font-serif font-bold mb-6 text-text-main">米だけではなく、話したくなる背景まで。</h2>
      <p className="leading-loose mb-8">
        大切な人へ贈るものは、味への納得はもちろん、会話のきっかけになるものが嬉しい。<br />
        海士の本氣米は、隠岐牛や岩牡蠣を使った土づくり、島根県海士町の豊かな自然など、お渡しする際に「背景まで話したくなる」お米です。
      </p>
      <ul className="list-disc pl-5 mb-12 space-y-3 opacity-90">
        <li>贈った相手との会話が生まれる</li>
        <li>海士町の食と風景を紹介できる</li>
        <li>産地と育て方を説明できる</li>
      </ul>
      <p className="text-sm opacity-80 mb-8 border-l-4 border-gold pl-4 py-2 bg-white">
        包装、のし等の対応につきましては、公式ショップで提供している内容をご確認ください。
      </p>
      <a href="https://honkimai.thebase.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-deep-green text-white px-8 py-4 hover:bg-text-main transition-colors text-sm tracking-widest font-bold">
        贈り物を選ぶ（公式ショップへ） ↗
      </a>
    </div>
  );
}
