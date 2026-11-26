const PROTOCOLS = [
  {
    id: 'furo-humanizado',
    category: 'furo',
    badge: 'Furo Humanizado',
    title: 'Furo Humanizado',
    subtitle: 'Personalize esta apresentação com o método, os materiais e as orientações adotados pela profissional.',
    highlight: 'Acolhimento e orientação',
    image: 'assets/img/protocolos/furo-humanizado.svg'
  },
  {
    id: 'pele',
    category: 'pele',
    badge: 'Pele',
    title: 'Cuidados com a Pele',
    subtitle: 'Apresente os cuidados e tratamentos faciais voltados às necessidades de cada pele.',
    highlight: 'Cuidado personalizado',
    image: 'assets/img/protocolos/Bioestimulador de Colágeno.png'
  },
  {
    id: 'hof',
    category: 'hof',
    badge: 'HOF',
    title: 'Harmonização Orofacial',
    subtitle: 'Destaque as técnicas de HOF realmente realizadas pela profissional e personalize esta descrição.',
    highlight: 'Planejamento individualizado',
    image: 'assets/img/protocolos/Full Face & Contorno Facial.png'
  },
  {
    id: 'estetica-facial',
    category: 'estetica-facial',
    badge: 'Estética Facial',
    title: 'Estética Facial',
    subtitle: 'Apresente os cuidados faciais oferecidos e ajuste esta área aos serviços confirmados pela profissional.',
    highlight: 'Beleza e cuidado facial',
    image: 'assets/img/Tratamento Facial em Clínica Elegante.png'
  }
];

function renderProtocols(filter = 'all') {
  const grid = document.getElementById('protocols-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PROTOCOLS
    : PROTOCOLS.filter((item) => item.category === filter);

  grid.innerHTML = filtered.map((item) => {
    const hasImage = Boolean(item.image);

    const mediaMarkup = hasImage
      ? `
        <img src="${item.image}" alt="${item.title}" class="protocol-card__bg" loading="lazy" />
        <div class="protocol-card__overlay" aria-hidden="true"></div>
      `
      : '';

    return `
      <article class="protocol-card ${hasImage ? 'protocol-card--has-media' : ''}">
        ${mediaMarkup}
        <div class="protocol-card__content">
          <span class="protocol-badge">${item.badge}</span>
          <h3>${item.title}</h3>
          <p>${item.subtitle}</p>
          <div class="protocol-meta">
            <span>${item.highlight}</span>
          </div>
          <a href="#contato" class="btn-card">
            Ver exemplo de agendamento
          </a>
        </div>
      </article>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProtocols('all');

  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProtocols(btn.dataset.filter);
    });
  });
});