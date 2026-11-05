import { brand } from '../data/content.js';

export default function Logo() {
  return (
    <span className="logo">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#logo-g)" />
        <path d="M9 21l5-10 4 7 2-3 3 6" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo__text">{brand.name}</span>
    </span>
  );
}
