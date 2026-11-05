import { brand, hero } from '../data/content.js';
import Icon from './Icon.jsx';
import HeroVisual from './HeroVisual.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            {hero.badge}
          </span>
          <h1 className="hero__title">
            {hero.titleStart} <span className="text-gradient">{hero.titleHighlight}</span>
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__ctas">
            <a href={brand.bookingUrl} className="btn btn--primary btn--lg">
              {hero.primaryCta}
              <Icon name="arrow" size={18} className="arrow" />
            </a>
            <a href="#como-funciona" className="btn btn--ghost btn--lg">
              {hero.secondaryCta}
            </a>
          </div>
          <ul className="hero__trust">
            {hero.trust.map((t) => (
              <li key={t}>
                <Icon name="check" size={16} />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
