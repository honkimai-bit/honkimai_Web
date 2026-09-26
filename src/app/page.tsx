import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

export default function Home() {
  return (
    <div className="bg-white text-text-main font-sans selection:bg-text-main selection:text-white">

      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-origin">島根県・海士町　海士の本氣米</p>
          <h1>おかずより先に、<br />ごはんがなくなる。</h1>
          <p className="home-hero-lead">白いごはんが、食事の主役になる。</p>
          <TrackedLink href="https://honkimai.thebase.in/" isExternal eventName="click_hero_shop" className="home-button">
            公式ショップで商品を見る <span aria-hidden="true">↗</span>
          </TrackedLink>
        </div>
        <div className="home-hero-photo">
          <Image src="/images/hero-rice.jpg" alt="海士の本氣米の米袋" width={1024} height={1024} sizes="(max-width: 767px) 100vw, 50vw" priority />
        </div>
      </section>

      {/* 2. 白い余白を広く使った食味の説明 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-8 leading-[1.8] tracking-widest">
            白いごはんが、<br className="md:hidden" />食事の主役になる。
          </h2>
          <p className="text-base md:text-lg leading-[2.5] tracking-widest opacity-90">
            ふたを開けた瞬間に立ち上る、<br className="md:hidden" />炊きたての湯気と香り。<br />
            ひとくち食べればわかる、<br className="md:hidden" />程よい甘さともっちりとした食感。<br /><br />
            試食された方々からは<br className="md:hidden" />「冷めてもおいしい」という感想を<br className="md:hidden" />多くいただいています。<br />
            おにぎりやお弁当など、<br className="md:hidden" />毎日の食卓に寄り添うお米です。
          </p>
        </div>
      </section>

      <section className="home-soil">
        <div className="home-soil-photo">
          <Image src="/images/ama-package.png" alt="海辺に置かれた海士の本氣米の米袋" width={1024} height={1024} sizes="(max-width: 767px) 100vw, 45vw" />
        </div>
        <div className="home-soil-copy">
          <h2>牛と牡蠣が、<br />米の土をつくる。</h2>
              <p className="text-base leading-[2.2] tracking-wider opacity-90">
                島根県海士町が誇るブランド「隠岐牛」の完熟堆肥と、「いわがき春香」の牡蠣殻粉末を土づくりに利用しています。<br /><br />
                豊かな森から海へ注ぐ島の水と、海から得られるミネラルを田んぼへ還す循環型の農業。<br /><br />
                農薬や化学肥料の使用を適切に管理・配慮し、丁寧に育てています。
              </p>
        </div>
      </section>

      {/* 4. 数字と文章による品質管理の説明（雑誌のエディトリアル風） */}
      <section className="py-20 md:py-28 bg-white border-b border-text-main/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-3xl md:text-5xl font-serif tracking-widest">品質への誓い</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12">
            <article>
              <div className="text-5xl font-serif text-text-main/20 mb-6">01</div>
              <h3 className="text-xl font-bold mb-6 tracking-widest border-l-2 border-text-main pl-4">徹底した個別管理</h3>
              <p className="text-sm leading-loose opacity-80">
                本氣米の出荷検査や販売は、田んぼ（ほ場）ごとに厳密に行われます。同じ生産者であっても、別の田んぼで収穫したお米を混ぜて出荷することは絶対にありません。
              </p>
            </article>
            <article>
              <div className="text-5xl font-serif text-text-main/20 mb-6">02</div>
              <h3 className="text-xl font-bold mb-6 tracking-widest border-l-2 border-text-main pl-4">毎年の土壌分析</h3>
              <p className="text-sm leading-loose opacity-80">
                刈取りが終わった後、各生産者は必ず自分の田んぼの土を採取して分析にかけます。科学的なデータに基づき、翌年の確かな土づくりへと繋げています。
              </p>
            </article>
            <article>
              <div className="text-5xl font-serif text-text-main/20 mb-6">03</div>
              <h3 className="text-xl font-bold mb-6 tracking-widest border-l-2 border-text-main pl-4">専用ライスセンター</h3>
              <p className="text-sm leading-loose opacity-80">
                品質を維持するためだけに建設された「専用ライスセンター」で乾燥・調製・保管を行います。JAによる厳格な出荷検査と食味値分析を徹底しています。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-producers">
        <Image src="/images/producers-illustration.png" alt="海士の本氣米 生産者のイラスト" width={206} height={290} className="home-producers-art" />
        <div>
          <h2>つくる人の、本氣。</h2>
          <p>波多 剛をはじめとする、海士の本氣米生産組合のメンバー。<br />妥協のない米づくりを行っています。</p>
          <TrackedLink href="/producers" eventName="click_producers_page" className="home-text-link">生産者の本氣のルールを見る <span aria-hidden="true">→</span></TrackedLink>
        </div>
      </section>

      {/* 6. 購入商品を用途別に縦に並べる */}
      <section className="py-20 md:py-28 bg-kinari">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif tracking-widest text-center mb-12">商品を選ぶ</h2>

          <div className="home-products">
            {/* はじめて */}
            <div className="home-product">
              <span className="text-sm font-bold tracking-[0.2em] mb-4 opacity-60">はじめての方へ</span>
              <div className="home-product-photo">
                <Image src="/images/gift-set.png" alt="二つの品種を食べ比べる" fill sizes="(max-width: 767px) 90vw, 33vw" className="object-contain" />
              </div>
              <h3 className="text-xl font-serif mb-4">二つの品種を食べ比べる</h3>
              <p className="leading-loose opacity-80 mb-8 max-w-lg">
                コシヒカリときぬむすめのセット。<br />
                まずは「海士の本氣米」の二つの顔を味わってみてください。
              </p>
              <TrackedLink href="https://honkimai.thebase.in/" isExternal eventName="click_compare_product" className="home-button">
                公式ショップで購入
              </TrackedLink>
            </div>



            {/* 毎日 */}
            <div className="home-product">
              <span className="text-sm font-bold tracking-[0.2em] mb-4 opacity-60">毎日の食卓へ</span>
              <div className="home-product-photo">
                <Image src="/images/product-package.jpg" alt="毎日のごはん" fill sizes="(max-width: 767px) 90vw, 33vw" className="object-contain" />
              </div>
              <h3 className="text-xl font-serif mb-4">毎日のごはん（単品・定期便）</h3>
              <p className="leading-loose opacity-80 mb-8 max-w-lg">
                お好みの品種を3kg・5kgなどから選べます。<br />
                毎月決まった時期にお届けする定期便もご用意しています。
              </p>
              <TrackedLink href="https://honkimai.thebase.in/" isExternal eventName="click_daily_product" className="home-button">
                公式ショップで購入
              </TrackedLink>
            </div>



            {/* 贈る */}
            <div className="home-product">
              <span className="text-sm font-bold tracking-[0.2em] mb-4 opacity-60">大切な人へ贈る</span>
              <div className="home-product-photo">
                <Image src="/images/gift-handover.png" alt="贈り物" fill sizes="(max-width: 767px) 90vw, 33vw" className="object-contain" />
              </div>
              <h3 className="text-xl font-serif mb-4">贈り物・アンバサダー</h3>
              <p className="leading-loose opacity-80 mb-8 max-w-lg">
                海士町の話を、米と一緒に手渡そう。<br />
                包装やのし対応など、ギフトに最適なセットです。
              </p>
              <TrackedLink href="/gift" eventName="click_gift_page" className="inline-block border-b border-text-main pb-1 hover:opacity-50 transition-opacity tracking-widest font-bold">
                贈り物について詳しく
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 海士町の背景（地域課題を購入者へ押しつけない） */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-8 leading-[1.8] tracking-wider">
            おいしいから食べる。<br />
            結果として、島の営みが続いていく。
          </h2>
          <p className="text-base leading-[2.5] tracking-widest opacity-90 max-w-2xl mx-auto">
            海士町は、豊富な水と豊かな自然に恵まれた離島です。<br /><br />
            まずは純粋に「おいしい」と感じていただけたら嬉しいです。<br />
            おいしいから食べ続けられる。<br />
            その結果として、島の営みが自然と続いていきます。
          </p>
          <div className="mt-16">
             <TrackedLink href="/story" eventName="click_story_page" className="inline-block border-b border-text-main pb-1 hover:opacity-50 transition-opacity tracking-widest font-bold">
              海士町と本氣米のストーリー
            </TrackedLink>
          </div>
        </div>
      </section>

    </div>
  );
}
