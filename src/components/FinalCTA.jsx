import { brand, finalCta } from '../data/content.js';
import Icon from './Icon.jsx';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta" id="reservar">
      <div className="container">
        <div className="final-cta__box reveal">
          <div className="final-cta__glow" aria-hidden="true" />
          <h2>{finalCta.title}</h2>
          <p>{finalCta.subtitle}</p>
          <a href={brand.bookingUrl} className="btn btn--primary btn--lg final-cta__btn">
            {finalCta.cta}
            <Icon name="arrow" size={18} className="arrow" />
          </a>
          <small>{finalCta.note}</small>
        </div>
      </div>
    </section>
  );
}
