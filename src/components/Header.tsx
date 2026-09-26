import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-kinari/95 backdrop-blur border-b border-text-main/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/brand-logo.png" alt="海士の本氣米" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-text-main/80 font-bold tracking-wider">
          <Link href="/taste" className="hover:text-deep-green transition-colors">おいしさと土づくり</Link>
          <Link href="/products" className="hover:text-deep-green transition-colors">商品を選ぶ</Link>
          <Link href="/oseibo" className="text-gold hover:text-deep-green transition-colors">🎁 お歳暮</Link>
          <Link href="/gift" className="hover:text-deep-green transition-colors">贈り物</Link>
          <Link href="/producers" className="hover:text-deep-green transition-colors">つくる人</Link>
          <Link href="/story" className="hover:text-deep-green transition-colors">海士町と本氣米</Link>
        </nav>
      </div>
    </header>
  );
}
