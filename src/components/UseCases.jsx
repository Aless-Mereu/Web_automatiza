import { brand, useCases } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';
import Icon from './Icon.jsx';
import './UseCases.css';

export default function UseCases() {
  return (
    <section className="section section--dark use-cases" id="casos">
      <div className="container">
        <SectionHeader eyebrow={useCases.eyebrow} title={useCases.title} />
        <div className="use-cases__grid">
          {useCases.items.map((u, i) => (
            <article key={u.title} className={`use-case reveal delay-${i % 3}`}>
              <span className="use-case__icon"><Icon name={u.icon} /></span>
              <div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            </article>
          ))}
          <a href={brand.bookingUrl} className="use-case use-case--cta reveal">
            <div>
              <h3>{useCases.ctaCard.title}</h3>
              <p>{useCases.ctaCard.text}</p>
              <span className="use-case__link">
                {useCases.ctaCard.link} <Icon name="arrow" size={16} className="arrow" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
