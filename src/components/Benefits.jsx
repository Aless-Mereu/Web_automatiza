import { benefits } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';
import Icon from './Icon.jsx';

export default function Benefits() {
  return (
    <section className="section section--soft" id="beneficios">
      <div className="container">
        <SectionHeader {...benefits} />
        <div className="grid grid--3">
          {benefits.items.map((b, i) => (
            <article key={b.title} className={`card reveal delay-${i % 3}`}>
              <span className="icon-badge"><Icon name={b.icon} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
