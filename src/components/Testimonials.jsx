import { testimonials } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';
import './Testimonials.css';

const initials = (name) => name.split(' ').map((n) => n[0]).join('').slice(0, 2);

export default function Testimonials() {
  return (
    <section className="section section--soft" id="testimonios">
      <div className="container">
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div className="grid grid--3">
          {testimonials.items.map((t, i) => (
            <figure key={t.name} className={`card testimonial reveal delay-${i}`}>
              <div className="testimonial__stars" aria-label="5 de 5 estrellas">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial__avatar">{initials(t.name)}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
