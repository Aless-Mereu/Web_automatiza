import { brand, footer } from '../data/content.js';
import Logo from './Logo.jsx';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>{footer.tagline}</p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© {year} {brand.name}. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
