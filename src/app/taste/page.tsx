import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'おいしさと土づくり',
};

export default function Taste() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif font-bold mb-12 text-text-main">おいしさと土づくり</h1>
      <p className="leading-loose mb-12">
        ただのお米ではありません。豊かな土と水、そして独自の工夫から生まれる「海士の本氣米」の味わいと、その裏側にある土づくりについてご紹介します。
      </p>
      {/* 詳細はトップページと重複するため、ここでは構成の枠のみ */}
    </div>
  );
}
