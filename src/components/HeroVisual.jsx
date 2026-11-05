import Icon from './Icon.jsx';

// Visual del hero: panel tipo dashboard con un flujo de automatización.
const flow = [
  { icon: 'magnet', title: 'Nuevo lead', meta: 'Formulario web · hace 2 s', tone: 'blue' },
  { icon: 'sparkles', title: 'IA clasifica el lead', meta: 'Prioridad alta · 92/100', tone: 'violet' },
  { icon: 'message', title: 'WhatsApp enviado', meta: 'Respuesta personalizada', tone: 'green' },
  { icon: 'calendar', title: 'Reunión agendada', meta: 'Jueves 10:30 · CRM actualizado', tone: 'cyan' },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__window">
        <div className="hero-visual__bar">
          <span /><span /><span />
          <p>Flujo · Captación y cita</p>
          <em className="hero-visual__live">En vivo</em>
        </div>
        <ol className="hero-visual__flow">
          {flow.map((step, i) => (
            <li key={step.title} className={`flow-step flow-step--${step.tone}`} style={{ '--i': i }}>
              <span className="flow-step__icon"><Icon name={step.icon} size={18} /></span>
              <div>
                <strong>{step.title}</strong>
                <small>{step.meta}</small>
              </div>
              <span className="flow-step__check"><Icon name="check" size={14} /></span>
            </li>
          ))}
        </ol>
      </div>

      <div className="hero-visual__float hero-visual__float--top">
        <small>Tiempo de respuesta</small>
        <strong>38 s</strong>
        <span className="trend">−96%</span>
      </div>
      <div className="hero-visual__float hero-visual__float--bottom">
        <small>Horas ahorradas este mes</small>
        <strong>64 h</strong>
        <div className="mini-bars">
          {[40, 55, 48, 70, 62, 85, 92].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
