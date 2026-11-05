import { metrics } from '../data/content.js';
import './Metrics.css';

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Resultados">
      <div className="container">
        <ul className="metrics__list reveal">
          {metrics.map((m) => (
            <li key={m.label}>
              <strong className="text-gradient">{m.value}</strong>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
