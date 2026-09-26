'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
}

export default function TrackedLink({ href, eventName, eventParams, className, children, isExternal }: TrackedLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams);
    }
  };

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
