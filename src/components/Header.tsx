'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['/taste', 'おいしさと土づくり'],
  ['/products#choose', '商品を選ぶ'],
  ['/oseibo', 'お歳暮（準備中）'],
  ['/gift', '贈り物'],
  ['/producers', 'つくる人'],
  ['/story', '海士町と本氣米'],
  ['/faq', 'よくある質問'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape') setOpen(false);
    }}>
      <div className="site-header-inner">
        <Link href="/" className="site-brand" onClick={() => setOpen(false)}>
          <img src="/images/brand-logo-base.jpg" alt="海士の本氣米" width={460} height={180} />
        </Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? '閉じる' : 'メニュー'}
        </button>
        <nav id="site-navigation" aria-label="メインメニュー" className={`site-nav${open ? ' is-open' : ''}`}>
          {links.map(([href, label]) => href === '/products#choose' ? (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ) : (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
