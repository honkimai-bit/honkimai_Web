'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['/taste', 'おいしさと土づくり'],
  ['/products', '商品を選ぶ'],
  ['/oseibo', 'お歳暮'],
  ['/gift', '贈り物'],
  ['/producers', 'つくる人'],
  ['/story', '海士町と本氣米'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape') setOpen(false);
    }}>
      <div className="site-header-inner">
        <Link href="/" className="site-brand" onClick={() => setOpen(false)}>
          <img src="/images/brand-logo.png" alt="" width={34} height={48} />
          <span>海士の本氣米</span>
        </Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? '閉じる' : 'メニュー'}
        </button>
        <nav id="site-navigation" aria-label="メインメニュー" className={`site-nav${open ? ' is-open' : ''}`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
