import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '商品を選ぶ',
};

export default function Products() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif font-bold mb-12 text-text-main">商品を選ぶ</h1>
      <p className="leading-loose mb-12">
        公式オンラインショップで販売中の商品ラインナップです。価格や在庫状況は公式ショップにてご確認ください。
      </p>
      <div className="text-center">
        <a href="https://honkimai.thebase.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-deep-green text-white px-8 py-4 hover:bg-text-main transition-colors text-sm tracking-widest font-bold">
          BASE公式ショップを見る ↗
        </a>
      </div>
    </div>
  );
}
