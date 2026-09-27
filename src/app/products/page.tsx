import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import styles from './products.module.css';

const shop = 'https://honkimai.thebase.in';
const description = '海と牛が育てる、離島のお米。味わいと育て方を知って、2合のお試し、毎日のごはん、食べ比べ、贈り物から海士の本氣米を選べます。';

export const metadata: Metadata = {
  title: '味と育て方を知って、商品を選ぶ',
  description,
  alternates: { canonical: 'https://honkimai-web.honkimai.workers.dev/products' },
  openGraph: {
    title: '海と牛が育てる、離島のお米。｜海士の本氣米',
    description,
    url: 'https://honkimai-web.honkimai.workers.dev/products',
    images: [{ url: 'https://honkimai-web.honkimai.workers.dev/images/hero-rice.jpg', width: 1024, height: 1024, alt: '海士の本氣米の米袋' }],
    locale: 'ja_JP',
    type: 'website',
  },
};

const choices = [
  { id: 'try', label: 'まずは少量から', title: 'いつもの食卓で、ひと炊き。', detail: 'はじめてなら、コシヒカリの白米2合真空パック。まずはご自身で食べて、甘みや食感を確かめてみてください。', format: 'コシヒカリ白米・2合真空パック', href: `${shop}/items/95775394`, link: '2合パックを見る' },
  { id: 'daily', label: '毎日のごはんに', title: '好きな味を、いつものお米に。', detail: 'コシヒカリときぬむすめ、それぞれに白米と玄米をご用意しています。食べる量に合わせて3kg・5kgなどから。続けて楽しむ方には定期便もあります。', format: '白米・玄米／単品・定期便', href: shop, link: '単品の商品を見る', secondHref: `${shop}/categories/6342511`, secondLink: '定期便を見る' },
  { id: 'compare', label: 'ふたつの品種を食べ比べ', title: 'わが家の「好き」を見つける。', detail: '甘みとコクのコシヒカリ、軽やかな味わいのきぬむすめ。いつものおかずと合わせて、好みの違いを楽しめるセットです。', format: '白米3kgずつ・計6kgのセット', href: `${shop}/items/127992539`, link: '食べ比べセットを見る' },
  { id: 'gift', label: '大切な人への贈り物に', title: 'お米と一緒に、島の話を。', detail: '「隠岐牛と岩牡蠣の恵みで、土をつくっているんです」。贈るときの一言から、生まれた場所や育てる人の話が始まります。', format: '手渡しにも選べる2合真空パック', href: `${shop}/items/95775394`, link: '手渡し用に2合パックを見る' },
];

export default function Products() {
  return (
    <div className={styles.page}>
      <section className={`${styles.container} ${styles.hero}`} aria-labelledby="products-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>島根県・海士町 ｜ 商品を選ぶ</p>
          <h1 id="products-title">海と牛が育てる、<br />離島のお米。</h1>
          <p className={styles.heroLead}>おいしいから食べる。<br />誰かに話したくなる。</p>
          <p className={styles.body}>隠岐牛の堆肥と、いわがき春香の牡蠣殻で土をつくる。海士町の水と人の手で育つ、本氣米です。味わいと育て方を知って、ご自宅にも、大切な人への贈り物にも。</p>
          <div className={styles.actions}>
            <a href="#choose" className={styles.button}>用途から商品を選ぶ <span aria-hidden="true">↓</span></a>
            <a href="#taste" className={styles.textLink}>ふたつの品種を知る</a>
          </div>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src="/images/hero-rice.jpg" alt="島の風景を背景に置かれた海士の本氣米の米袋" width={1024} height={1024} sizes="(max-width: 767px) 100vw, 48vw" priority />
          <figcaption>海士町から、いつもの食卓へ。</figcaption>
        </figure>
      </section>

      <section id="taste" className={`${styles.container} ${styles.section}`} aria-labelledby="taste-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>味わいから選ぶ</p>
          <h2 id="taste-title">甘みともっちり感。<br className={styles.mobileBreak} />それとも、軽やかさ。</h2>
          <p>毎日食べるものだから、自分の好きな味を。<br />同じ島で育つふたつの品種にも、それぞれの持ち味があります。</p>
        </div>
        <div className={styles.varieties}>
          <article>
            <p className={styles.varietyTaste}>甘み・コク・もっちり</p>
            <h3>コシヒカリ</h3>
            <p>ふっくら炊き上がり、もっちりとした食感。ごはんそのものの甘みとコクを楽しみたい方に。</p>
            <TrackedLink href={`${shop}/items/37024519`} isExternal eventName="click_products_koshihikari" className={styles.textLink}>コシヒカリの商品を見る <span aria-hidden="true">↗</span></TrackedLink>
          </article>
          <article>
            <p className={styles.varietyTaste}>弾力・あっさり・軽やか</p>
            <h3>きぬむすめ</h3>
            <p>美しい炊き上がりと、一粒一粒の弾力。コシヒカリよりも軽やかで、あっさりした味わいがお好みの方に。</p>
            <TrackedLink href={`${shop}/items/37024548`} isExternal eventName="click_products_kinumusume" className={styles.textLink}>きぬむすめの商品を見る <span aria-hidden="true">↗</span></TrackedLink>
          </article>
        </div>
      </section>

      <section className={styles.growing} aria-labelledby="growing-title">
        <div className={`${styles.container} ${styles.growingInner}`}>
          <div>
            <p className={styles.eyebrow}>育て方を知る</p>
            <h2 id="growing-title">海と牛の恵みを、<br />田んぼの土へ。</h2>
            <p className={styles.body}>海士町の隠岐牛の堆肥と、ブランド岩牡蠣「いわがき春香」の牡蠣殻。島にある恵みを土づくりに生かすことが、本氣米の米づくりの出発点です。</p>
            <Link href="/taste" className={styles.textLink}>おいしさと土づくりを知る <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.quality}>
            <p className={styles.eyebrow}>生産管理の確かさ</p>
            <h3>美味しまねゴールド認証</h3>
            <p>海士町の公式紹介では、2023年に認証を取得。食の安全、環境保全、作業者の安全など、125の生産管理基準をクリアしたことを紹介しています。</p>
            <p className={styles.note}>栽培や生産管理に関する認証です。おいしさを点数で評価するものではありません。</p>
            <a href="https://www.town.ama.shimane.jp/torikumi-shisetsu/torikumi/honkimai" target="_blank" rel="noopener noreferrer" className={styles.textLink}>海士町の公式紹介を読む <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section id="choose" className={`${styles.container} ${styles.section}`} aria-labelledby="choose-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>暮らしや贈る相手に合わせて</p>
          <h2 id="choose-title">あなたの食べ方で、<br className={styles.mobileBreak} />本氣米を選ぶ。</h2>
          <p>ひと炊きから、毎日のごはんへ。<br />おいしいと思ったら、誰かにも。</p>
        </div>
        <div className={styles.choices}>
          {choices.map((choice) => (
            <article key={choice.id} className={styles.choice}>
              <p className={styles.choiceLabel}>{choice.label}</p>
              <h3>{choice.title}</h3>
              <p>{choice.detail}</p>
              <p className={styles.format}>{choice.format}</p>
              <div className={styles.choiceLinks}>
                <TrackedLink href={choice.href} isExternal eventName={`click_products_${choice.id}`} className={styles.textLink}>{choice.link} <span aria-hidden="true">↗</span></TrackedLink>
                {choice.secondHref && <TrackedLink href={choice.secondHref} isExternal eventName="click_products_subscription" className={styles.textLink}>{choice.secondLink} <span aria-hidden="true">↗</span></TrackedLink>}
              </div>
            </article>
          ))}
        </div>
        <div className={styles.purchaseNote}>
          <h3>ご購入の前に</h3>
          <p>価格・在庫・送料は、公式ショップの商品ページでご確認ください。贈り物の包装・のしの対応可否や、複数のお届け先への注文方法は、ご注文前に公式ショップへお問い合わせください。</p>
          <Link href="/faq" className={styles.textLink}>よくある質問を見る <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={`${styles.container} ${styles.connection}`} aria-labelledby="connection-title">
        <Image src="/images/gift-handover.png" alt="海士の本氣米の米袋を贈り物として包んだイメージ" width={1024} height={1024} sizes="(max-width: 767px) 100vw, 40vw" />
        <div>
          <p className={styles.eyebrow}>海士町を知っているあなたへ</p>
          <h2 id="connection-title">島とのつながりを、<br />いつもの食卓に。</h2>
          <p>旅先で出会った人や、心に残った景色。家で本氣米を食べる時間が、海士町を思い出すきっかけに。誰かに手渡せば、あなたが知っている島の話をするきっかけにもなります。</p>
          <p>まず自分で食べる。おいしいと思ったら、大切な人へ。関わり方は、それぞれのペースで。</p>
          <div className={styles.connectionLinks}>
            <Link href="/ambassador" className={styles.textLink}>アンバサダーの方へ <span aria-hidden="true">→</span></Link>
            <Link href="/producers" className={styles.textLink}>本氣米をつくる人を知る <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>海士の本氣米が大切にしていること</p>
          <h2 id="closing-title">おいしいから食べる。<br />誰かに話したくなる。</h2>
          <p>味に納得し、育てる人を知り、また食べたくなる。<br />その日々の先に、島の米づくりが続いていくことを願っています。</p>
          <TrackedLink href={shop} isExternal eventName="click_products_bottom_shop" className={styles.button}>公式ショップで本氣米を選ぶ <span aria-hidden="true">↗</span></TrackedLink>
          <Link href="/story" className={styles.textLink}>海士町と本氣米の物語を読む</Link>
        </div>
      </section>
    </div>
  );
}
