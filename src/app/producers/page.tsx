import { Metadata } from 'next';
import Image from 'next/image';
import BrandVideo from '@/components/BrandVideo';

export const metadata: Metadata = {
  title: 'つくる人',
};

export default function Producers() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif font-bold mb-12 text-text-main">つくる人</h1>
      
      <div className="relative w-[206px] max-w-full aspect-[206/290] mx-auto mb-12">
        <Image src="/images/producers-illustration.png" alt="海士の本氣米生産組合のメンバー" fill className="object-contain" />
      </div>

      <div className="mb-12">
        <BrandVideo />
      </div>

      <div className="text-center mb-16">
        <a href="https://www.instagram.com/ama_honkimai" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-text-main pb-1 hover:opacity-50 transition-opacity tracking-widest font-bold">
          生産者の日常を発信中（公式Instagram） ↗
        </a>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-6 text-text-main border-b border-text-main/10 pb-4">海士の本氣米生産組合</h2>
        <p className="leading-loose opacity-90 mb-8">
          2016年に設立された「海士の本氣米生産組合」は、法人を含む少数の熱意ある生産者たちで構成されています。島の自然環境を活かすだけでなく、品質を極限まで高めるための厳格なルールを自らに課して米づくりを行っています。
        </p>
        
        <div className="bg-white p-8 border border-text-main/10 mb-8">
          <h3 className="text-lg font-bold mb-4 text-sea-green tracking-widest">主な生産者</h3>
          <ul className="space-y-2 opacity-90">
            <li>波多 剛（組合長）</li>
            <li>竹中 城太郎</li>
            <li>山中 進</li>
            <li>本多 正信</li>
            <li>サンライズうづか</li>
            <li className="text-sm pt-2">※他、計7組の生産者で丹念に栽培しています。</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-bold mb-8 text-text-main">「本氣」を証明する、妥協のない取り決め</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h3 className="font-bold text-lg text-text-main">1. 徹底した個別管理</h3>
            </div>
            <div className="md:w-2/3">
              <p className="leading-loose opacity-90">
                本氣米の出荷検査や販売は、田んぼ（ほ場）ごとに厳密に行われます。たとえ同じ生産者であっても、別の田んぼで収穫したお米を混ぜて出荷することは絶対にありません。
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 border-t border-text-main/10 pt-8">
            <div className="md:w-1/3">
              <h3 className="font-bold text-lg text-text-main">2. 毎年の土壌分析</h3>
            </div>
            <div className="md:w-2/3">
              <p className="leading-loose opacity-90">
                刈取りが終わった後、各生産者は必ず自分の田んぼの土を採取して分析にかけます。科学的なデータと、隠岐牛の完熟堆肥・いわがき春香の牡蠣殻を組み合わせることで、翌年の確かな土づくりへと繋げています。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 border-t border-text-main/10 pt-8">
            <div className="md:w-1/3">
              <h3 className="font-bold text-lg text-text-main">3. 専用ライスセンター</h3>
            </div>
            <div className="md:w-2/3">
              <p className="leading-loose opacity-90">
                収穫した本氣米は、品質を維持するためだけに建設された「専用ライスセンター」で乾燥・調製・保管を行います。また、JAによる厳格な出荷検査を受け、さらに食味値分析まで行うことで、常に高い品質を追求しています。
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
