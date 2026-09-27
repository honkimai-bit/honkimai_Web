import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お歳暮・冬の贈り物｜準備中',
  description: '本氣米のお歳暮・冬の贈り物は、ただいま準備中です。通常の商品は商品一覧からご覧いただけます。',
};

export default function Oseibo() {
  return (
    <section className="bg-kinari px-6 py-20 md:py-28 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-bold tracking-widest text-deep-green mb-6">お歳暮・冬の贈り物</p>
        <h1 className="text-3xl md:text-5xl font-serif leading-relaxed tracking-wider mb-8">ただいま準備中です。</h1>
        <p className="text-sm md:text-base leading-loose mb-10">お歳暮のご案内は、準備が整い次第お知らせします。<br />通常の商品は、商品一覧からご覧いただけます。</p>
        <a href="/products#choose" className="inline-block bg-deep-green text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-text-main transition-colors">通常の商品を見る</a>
      </div>
    </section>
  );
}
