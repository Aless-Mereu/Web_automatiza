import { useState } from 'react';
import { faq } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';
import Icon from './Icon.jsx';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
        <div className="faq__list reveal">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <Icon name="plus" size={20} className="faq__icon" />
                </button>
                <div className="faq__a" role="region">
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
