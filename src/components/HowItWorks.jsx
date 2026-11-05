import { brand, hero, steps } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';
import Icon from './Icon.jsx';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <SectionHeader eyebrow={steps.eyebrow} title={steps.title} />
        <ol className="steps">
          {steps.items.map((s, i) => (
            <li key={s.title} className={`step reveal delay-${i}`}>
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="steps__cta reveal">
          <a href={brand.bookingUrl} className="btn btn--primary btn--lg">
            {hero.primaryCta}
            <Icon name="arrow" size={18} className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
