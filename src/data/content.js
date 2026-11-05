// =========================================================
// TEXTOS DE LA LANDING
// Edita aquí cualquier texto sin tocar los componentes.
// =========================================================

export const brand = {
  name: 'Automatiza360',
  bookingUrl: '#reservar', // Sustituye por tu enlace de Calendly / Google Calendar
  email: 'hola@automatiza360.com',
};

export const nav = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  badge: 'Diagnóstico gratuito de automatización',
  titleStart: 'Vende más y trabaja menos con',
  titleHighlight: 'automatización e IA',
  subtitle:
    'Implementamos automatizaciones y agentes de IA que conectan tu WhatsApp, email, CRM y calendario para que tu negocio responda antes, haga mejor seguimiento y dependa menos de tareas manuales.',
  primaryCta: 'Reserva una llamada',
  secondaryCta: 'Ver cómo funciona',
  trust: ['Sin compromiso', '30 minutos', 'Plan de acción personalizado'],
};

export const metrics = [
  { value: '+120', label: 'procesos automatizados' },
  { value: '15 h', label: 'ahorradas por semana y equipo' },
  { value: '< 1 min', label: 'tiempo de respuesta a leads' },
  { value: '+32%', label: 'de leads convertidos en ventas' },
];

export const problems = {
  eyebrow: 'Te suena familiar',
  title: 'Tu equipo pierde horas en tareas que no venden',
  subtitle:
    'La mayoría de pymes no tienen un problema de clientes, sino de procesos. Estos son los cuellos de botella que más vemos.',
  items: [
    {
      icon: 'clock',
      title: 'Leads que se enfrían',
      text: 'Respondes horas o días después y el cliente ya ha hablado con tu competencia.',
    },
    {
      icon: 'copy',
      title: 'Copiar y pegar datos',
      text: 'La misma información se introduce a mano en hojas de cálculo, CRM y emails.',
    },
    {
      icon: 'inbox',
      title: 'Seguimiento que se olvida',
      text: 'Presupuestos sin respuesta y oportunidades que nadie vuelve a contactar.',
    },
    {
      icon: 'layers',
      title: 'Herramientas desconectadas',
      text: 'Cada herramienta funciona por separado y nadie tiene la foto completa del cliente.',
    },
  ],
};

export const benefits = {
  eyebrow: 'Beneficios',
  title: 'Un negocio que funciona aunque no estés encima',
  subtitle:
    'Diseñamos sistemas que trabajan en segundo plano para que tu equipo se dedique a lo que de verdad aporta valor.',
  items: [
    {
      icon: 'zap',
      title: 'Respuesta inmediata',
      text: 'Cada lead recibe respuesta en segundos por WhatsApp o email, a cualquier hora.',
    },
    {
      icon: 'target',
      title: 'Seguimiento comercial constante',
      text: 'Recordatorios y mensajes automáticos para que ninguna oportunidad se quede atrás.',
    },
    {
      icon: 'link',
      title: 'Herramientas conectadas',
      text: 'CRM, formularios, calendario y bases de datos sincronizados sin trabajo manual.',
    },
    {
      icon: 'users',
      title: 'Crecer sin contratar más',
      text: 'Absorbe más volumen de clientes con el mismo equipo y menos errores.',
    },
    {
      icon: 'sparkles',
      title: 'IA aplicada a tu negocio',
      text: 'Agentes que clasifican, responden y priorizan según tus propios criterios.',
    },
    {
      icon: 'chart',
      title: 'Visibilidad de resultados',
      text: 'Sabes en todo momento qué se ha automatizado y cuánto tiempo y dinero ahorra.',
    },
  ],
};

export const steps = {
  eyebrow: 'Cómo funciona',
  title: 'De procesos manuales a un sistema automático en 3 pasos',
  items: [
    {
      title: 'Diagnóstico gratuito',
      text: 'Analizamos tus procesos en una llamada y detectamos cuellos de botella, tareas repetitivas y oportunidades con IA.',
    },
    {
      title: 'Diseño e implementación',
      text: 'Construimos las automatizaciones conectando las herramientas que ya usas. Sin cambiar tu forma de trabajar.',
    },
    {
      title: 'Optimización continua',
      text: 'Medimos resultados, ajustamos y escalamos lo que funciona para que el sistema mejore cada mes.',
    },
  ],
};

export const useCases = {
  eyebrow: 'Casos de uso',
  title: 'Automatizaciones que generan impacto desde el primer mes',
  items: [
    { icon: 'magnet', title: 'Captación automática de leads', text: 'Formularios, anuncios y webs que vuelcan cada contacto directamente en tu CRM.' },
    { icon: 'message', title: 'Seguimiento por email o WhatsApp', text: 'Secuencias personalizadas que acompañan al cliente hasta la compra.' },
    { icon: 'calendar', title: 'Agendado automático de reuniones', text: 'El cliente elige hueco, recibe confirmación y recordatorios sin intervención.' },
    { icon: 'sparkles', title: 'Clasificación de leads con IA', text: 'La IA puntúa y prioriza cada contacto para que ventas hable primero con los mejores.' },
    { icon: 'headset', title: 'Atención al cliente automatizada', text: 'Un agente de IA resuelve las dudas frecuentes y deriva los casos complejos.' },
    { icon: 'file', title: 'Presupuestos y recordatorios', text: 'Genera presupuestos al instante y recuerda pagos o renovaciones a tiempo.' },
    { icon: 'refresh', title: 'Sincronización CRM y herramientas', text: 'Datos coherentes entre CRM, facturación, hojas de cálculo y herramientas internas.' },
  ],
  // Tarjeta final destacada que lleva a la reserva
  ctaCard: {
    title: '¿Tienes otro proceso en mente?',
    text: 'Cuéntanoslo en la llamada y te decimos cómo automatizarlo.',
    link: 'Reserva una llamada',
  },
};

export const testimonials = {
  eyebrow: 'Testimonios',
  title: 'Negocios que ya trabajan de otra manera',
  items: [
    {
      quote:
        'Antes tardábamos un día en responder a cada solicitud. Ahora el cliente recibe respuesta y cita en minutos. Hemos cerrado un 30% más de ventas en tres meses.',
      name: 'Laura Martín',
      role: 'Directora, Clínica Dental Sonríe',
    },
    {
      quote:
        'Nos han quitado de encima horas de copiar datos entre herramientas. El equipo comercial por fin se dedica a vender.',
      name: 'Javier Ortega',
      role: 'CEO, Ortega Consultores',
    },
    {
      quote:
        'El agente de IA atiende más de la mitad de las consultas de alumnos. Escalamos el lanzamiento sin contratar a nadie más.',
      name: 'Marta Ruiz',
      role: 'Fundadora, Academia Online Impulsa',
    },
  ],
};

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas',
  items: [
    {
      q: '¿Necesito conocimientos técnicos?',
      a: 'No. Nos encargamos de todo el diseño, la implementación y el mantenimiento. Tú solo nos cuentas cómo trabajas.',
    },
    {
      q: '¿Con qué herramientas trabajáis?',
      a: 'WhatsApp, Gmail y Outlook, CRMs como HubSpot o Pipedrive, Google Calendar, formularios, hojas de cálculo, bases de datos y más. Si tiene API, normalmente se puede conectar.',
    },
    {
      q: '¿Cuánto tarda la implementación?',
      a: 'Las primeras automatizaciones suelen estar funcionando en 2 a 4 semanas, según la complejidad de tus procesos.',
    },
    {
      q: '¿Qué incluye el diagnóstico gratuito?',
      a: 'Una llamada de unos 30 minutos en la que analizamos tus procesos y te entregamos las oportunidades de automatización con más impacto. Sin compromiso.',
    },
    {
      q: '¿Mis datos están seguros?',
      a: 'Sí. Trabajamos con herramientas que cumplen el RGPD, con accesos mínimos y siempre bajo tu control.',
    },
  ],
};

export const finalCta = {
  title: 'Descubre cuántas horas puedes ahorrar cada semana',
  subtitle:
    'Reserva tu diagnóstico gratuito y sal de la llamada con un plan claro de qué automatizar primero.',
  cta: 'Reserva una llamada',
  note: 'Gratis · 30 minutos · Sin compromiso',
};

export const footer = {
  tagline: 'Automatización e inteligencia artificial para pymes y negocios digitales.',
  columns: [
    { title: 'Empresa', links: [{ label: 'Beneficios', href: '#beneficios' }, { label: 'Cómo funciona', href: '#como-funciona' }, { label: 'Testimonios', href: '#testimonios' }] },
    { title: 'Soluciones', links: [{ label: 'Captación de leads', href: '#casos' }, { label: 'Atención con IA', href: '#casos' }, { label: 'Integración de CRM', href: '#casos' }] },
    { title: 'Legal', links: [{ label: 'Aviso legal', href: '#' }, { label: 'Privacidad', href: '#' }, { label: 'Cookies', href: '#' }] },
  ],
};
