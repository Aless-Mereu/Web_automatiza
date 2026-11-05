import { problems } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';
import Icon from './Icon.jsx';
import './Problems.css';

export default function Problems() {
  return (
    <section className="section problems">
      <div className="container">
        <SectionHeader {...problems} />
        <div className="grid grid--4">
          {problems.items.map((p, i) => (
            <article key={p.title} className={`card problem-card reveal delay-${i % 4}`}>
              <span className="icon-badge"><Icon name={p.icon} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
