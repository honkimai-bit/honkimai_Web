import { Metadata } from 'next';
import Image from 'next/image';
import TrackedLink from '@/components/TrackedLink';

export const metadata: Metadata = {
  title: 'お歳暮・冬の贈り物',
  description:
    '牛と牡蠣が、米の土をつくる。海士町の循環をまるごと届ける、本氣米のお歳暮ギフトセット。',
};

export default function Oseibo() {
  return (
    <div className="bg-white text-text-main font-sans selection:bg-text-main selection:text-white">
      {/* ───────── Hero ───────── */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-kinari">
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
          <p className="text-sm font-bold tracking-[0.3em] mb-8 text-deep-green">
            2026 冬の贈り物
          </p>
          <h1
            className="text-4xl md:text-6xl font-serif leading-[1.8] tracking-[0.15em] mb-12"
          >
            島の循環を、
            <br />
            まるごと届ける。
          </h1>
          <p className="text-base md:text-lg leading-[2.4] tracking-wider opacity-80 max-w-xl mx-auto">
            隠岐牛の堆肥と岩牡蠣の殻でつくった土。
            <br />
            その土から生まれた本氣米と、
            <br />
            島の調味料をひと箱に。
          </p>
        </div>
      </section>

      {/* ───────── 循環ストーリー ───────── */}
      <section className="py-32 md:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-24 tracking-widest leading-[1.8]">
            牛と牡蠣が、
            <br />
            米の土をつくる。
          </h2>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12 text-center">
            <article>
              <div className="text-5xl mb-6">🐂</div>
              <h3 className="text-lg font-bold mb-4 tracking-widest">
                隠岐牛の完熟堆肥
              </h3>
              <p className="text-sm leading-loose opacity-80">
                島で大切に育てられたブランド牛「隠岐牛」の完熟堆肥が、田んぼの土に力を与えます。
              </p>
            </article>
            <article>
              <div className="text-5xl mb-6">🦪</div>
              <h3 className="text-lg font-bold mb-4 tracking-widest">
                岩牡蠣の殻のミネラル
              </h3>
              <p className="text-sm leading-loose opacity-80">
                ブランド岩牡蠣「いわがき春香」の殻を粉末にし、土壌にミネラルを還元しています。
              </p>
            </article>
            <article>
              <div className="text-5xl mb-6">🌾</div>
              <h3 className="text-lg font-bold mb-4 tracking-widest">
                甘くてもっちりした米
              </h3>
              <p className="text-sm leading-loose opacity-80">
                牛と牡蠣が育てた土から生まれた、おかずより先になくなる、島のお米です。
              </p>
            </article>
          </div>

          <p className="text-center mt-20 text-sm opacity-60 tracking-widest">
            海から山へ、山から田んぼへ。島の中で循環する農業を、ひと箱に詰めました。
          </p>
        </div>
      </section>

      {/* ───────── セット紹介 ───────── */}
      <section className="py-32 md:py-48 bg-kinari">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 tracking-widest">
            島のごちそう箱
          </h2>
          <p className="text-center text-sm tracking-widest opacity-60 mb-20">
            常温でお届け ─ 届いたその日から楽しめます
          </p>

          {/* セット内容 */}
          <div className="bg-white p-8 md:p-12 mb-16">
            <h3 className="text-xl font-serif font-bold mb-10 tracking-widest border-b border-text-main/10 pb-4">
              セット内容
            </h3>
            <ul className="space-y-8">
              <li className="flex gap-6 items-start">
                <span className="text-2xl shrink-0">🍚</span>
                <div>
                  <p className="font-bold tracking-wider mb-1">
                    海士の本氣米（2合）× 2袋
                  </p>
                  <p className="text-sm opacity-70 leading-relaxed">
                    コシヒカリときぬむすめの食べ比べ。真空パックで鮮度を保持。
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-2xl shrink-0">🧂</span>
                <div>
                  <p className="font-bold tracking-wider mb-1">海士乃塩</p>
                  <p className="text-sm opacity-70 leading-relaxed">
                    保々見湾の海水を薪の平釜で炊き上げた天然塩。塩むすびで米の甘みが引き立ちます。
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-2xl shrink-0">🫙</span>
                <div>
                  <p className="font-bold tracking-wider mb-1">小醤油みそ</p>
                  <p className="text-sm opacity-70 leading-relaxed">
                    島の大豆と小麦だけで仕込んだ伝統の発酵調味料。焼きおにぎりに塗ると絶品です。
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-2xl shrink-0">🍛</span>
                <div>
                  <p className="font-bold tracking-wider mb-1">
                    島じゃ常識 さざえカレー
                  </p>
                  <p className="text-sm opacity-70 leading-relaxed">
                    隠岐のサザエの身と肝バターを練り込んだ、海士町の家庭の味。本氣米との相性は抜群です。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* おすすめの楽しみ方 */}
          <div className="bg-white p-8 md:p-12 mb-16">
            <h3 className="text-xl font-serif font-bold mb-10 tracking-widest border-b border-text-main/10 pb-4">
              おすすめの楽しみ方
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl mb-4">🍙</p>
                <p className="font-bold text-sm mb-2 tracking-wider">
                  一日目：塩むすび
                </p>
                <p className="text-xs opacity-70 leading-relaxed">
                  炊き立てのコシヒカリを海士乃塩だけで握る。お米の甘さを一番感じる食べ方。
                </p>
              </div>
              <div>
                <p className="text-3xl mb-4">🔥</p>
                <p className="font-bold text-sm mb-2 tracking-wider">
                  二日目：味噌焼きおにぎり
                </p>
                <p className="text-xs opacity-70 leading-relaxed">
                  冷ごはんに小醤油みそを塗り、トースターで香ばしく焼く。島のソウルフード。
                </p>
              </div>
              <div>
                <p className="text-3xl mb-4">🍽️</p>
                <p className="font-bold text-sm mb-2 tracking-wider">
                  三日目：さざえカレー
                </p>
                <p className="text-xs opacity-70 leading-relaxed">
                  きぬむすめを炊いて、さざえカレーをかける。あっさりした米と濃厚カレーの好相性。
                </p>
              </div>
            </div>
          </div>

          {/* 価格・CTA */}
          <div className="text-center">
            <p className="text-sm tracking-widest opacity-60 mb-4">
              常温便でお届け ─ のし対応可
            </p>
            {/* 価格は確定後に更新 */}
            {/* <p className="text-3xl font-serif font-bold mb-8">¥3,980<span className="text-sm font-sans ml-2">（税込）</span></p> */}
            <TrackedLink
              href="https://honkimai.thebase.in/"
              isExternal
              eventName="click_oseibo_cta"
              className="inline-block bg-deep-green text-white px-12 py-5 tracking-widest font-bold hover:bg-text-main transition-colors"
            >
              お歳暮セットを購入する
            </TrackedLink>
            <p className="mt-6 text-xs opacity-50">
              ※ 公式ショップ（BASE）での販売です。包装・のし等の詳細はショップページをご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* ───────── ストーリー導線 ───────── */}
      <section className="py-32 md:py-40 bg-white text-center px-6">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 tracking-widest leading-[1.8]">
          おいしいから食べる。
          <br />
          結果として、島の営みが続いていく。
        </h2>
        <p className="text-sm leading-[2.2] opacity-80 max-w-xl mx-auto mb-12">
          お歳暮に添えるストーリーカードには、海士町の循環型農業と生産者の想いを記しています。
          <br />
          贈り物が、島の話をするきっかけになりますように。
        </p>
        <TrackedLink
          href="/story"
          eventName="click_oseibo_to_story"
          className="inline-block border-b border-text-main pb-1 hover:opacity-50 transition-opacity tracking-widest font-bold"
        >
          海士町と本氣米のストーリー
        </TrackedLink>
      </section>
    </div>
  );
}
