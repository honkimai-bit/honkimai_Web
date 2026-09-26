import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '海士町と本氣米',
};

export default function Story() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif font-bold mb-12 text-text-main">海士町と本氣米</h1>
      
      <div className="relative h-64 md:h-96 w-full mb-12 overflow-hidden">
        <Image src="/images/ama-package.png" alt="海士町の風景と本氣米" fill className="object-cover" />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6 text-text-main">ただの米づくりではない、「本氣」の証明</h2>
          <p className="leading-loose opacity-90 mb-6">
            島根県の離島、海士町（あまちょう）。海と山が隣接するこの島ならではの環境で、本氣米の土台となる土づくりが行われています。<br />
            取り組みの始まりは2015年の夏。「海士町の特色ある米づくり」を目指し、有志の生産者が集まりました。
          </p>
          <p className="leading-loose opacity-90">
            翌年、彼らの米に対する並々ならぬ熱意と覚悟から、このお米は「海士の本氣米」と名付けられました。単なるブランド名ではなく、自らに課した厳しいルールの表れでもあります。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold mb-6 text-text-main">品質を守るため、専用の施設を建てる</h2>
          <p className="leading-loose opacity-90 mb-6">
            本氣米の品質への執念は、栽培方法だけにとどまりません。<br />
            純度と品質を極限まで保つため、2017年には本氣米を扱うための「専用ライスセンター」を島内に建設しました。
          </p>
          <p className="leading-loose opacity-90">
            収穫されたお米はすべてこの施設に集められ、徹底した温度管理のもとで乾燥・保管されます。他の品種が混ざることを防ぎ、一年中安定したおいしさをお届けできる体制を整えました。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold mb-6 text-text-main">自然の変化に向き合い、進化を続ける</h2>
          <p className="leading-loose opacity-90 mb-6">
            おいしさを守るためには、変わらないだけではいけません。<br />
            近年の猛暑による品質低下リスクに立ち向かうため、2020年からは暑さに強く食味の安定した「きぬむすめ」の作付けを新たに開始しました。
          </p>
          <p className="leading-loose opacity-90">
            また、効率化が進む現代にあえて手間暇をかける「ハデ干し（天日干し）」米の栽培など、おいしさの可能性を常に模索し続けています。すべては「おかずより先に、ごはんがなくなる」感動を食卓へ届けるためです。
          </p>
        </section>
      </div>
      
    </div>
  );
}
