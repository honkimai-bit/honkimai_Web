import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-text-main text-kinari py-16 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <div className="mb-6 bg-white inline-block px-4 py-2 border border-text-main/20">
            <img src="/images/brand-logo-base.jpg" alt="海士の本氣米" width={460} height={180} className="w-[230px] max-w-full h-auto" />
          </div>
          <p className="text-sm opacity-90 leading-loose">
            島根県隠岐郡海士町<br />
            隠岐牛と岩牡蠣が、米の土をつくる。
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm opacity-90 tracking-wider">
          <Link href="/" className="hover:opacity-50 transition-opacity">トップページ</Link>
          <Link href="/faq" className="hover:opacity-50 transition-opacity">よくある質問</Link>
          <Link href="/ambassador" className="hover:opacity-50 transition-opacity">アンバサダー向け</Link>
          <a href="https://honkimai.thebase.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity mt-4">
            公式オンラインショップ (BASE) ↗
          </a>
          <a href="https://www.instagram.com/ama_honkimai" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
            公式Instagram ↗
          </a>
          <a href="https://youtu.be/q6ovwLu0o7A" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
            公式プロモーションムービー (YouTube) ↗
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-kinari/20 text-xs opacity-70 text-center tracking-widest">
        &copy; {new Date().getFullYear()} 海士の本氣米
      </div>
    </footer>
  );
}
