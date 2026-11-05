import { useEffect, useState } from 'react';
import { brand, nav, hero } from '../data/content.js';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" aria-label={brand.name}>
          <Logo />
        </a>
        <nav className="navbar__links" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={brand.bookingUrl} className="btn btn--primary navbar__cta" onClick={() => setOpen(false)}>
            {hero.primaryCta}
          </a>
        </nav>
        <button
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}
