const PROTOCOLS = [
  {
    id: 'preenchimento-labial',
    category: 'facial',
    badge: 'Destaque',
    title: 'Preenchimento Labial & Contorno',
    subtitle: 'Volume equilibrado, hidratação profunda e definição natural dos lábios e queixo.',
    highlight: 'Planejamento anatômico individualizado',
    image: 'assets/img/protocolos/preenchimento-labial.png'
  },
  {
    id: 'full-face',
    category: 'facial',
    badge: 'Harmonização',
    title: 'Full Face & Contorno Facial',
    subtitle: 'Equilíbrio global das proporções do rosto para devolver sustentação sem perder sua identidade.',
    highlight: 'Naturalidade em cada detalhe',
    image: 'assets/img/protocolos/Full Face & Contorno Facial.png'
  },
  {
    id: 'rinomodelacao',
    category: 'facial',
    badge: 'Sem Cirurgia',
    title: 'Rinomodelação',
    subtitle: 'Alinhamento estético do dorso e projeção sutil da ponta nasal em consultório, sem afastamento.',
    highlight: 'Resultado imediato e seguro',
    image: 'assets/img/protocolos/Rinomodelação.png'
  },
  {
    id: 'botox-preventivo',
    category: 'facial',
    badge: 'Prevenção',
    title: 'Toxina Botulínica (Botox)',
    subtitle: 'Suavização de linhas de expressão e prevenção de marcas profundas com leveza no olhar.',
    highlight: 'Expressão descansada e natural',
    image: 'assets/img/protocolos/Toxina Botulínica (Botox).png'
  },
  {
    id: 'bioestimulador',
    category: 'colageno',
    badge: 'Firmeza',
    title: 'Bioestimulador de Colágeno',
    subtitle: 'Combate à flacidez com estímulo gradual e duradouro do próprio colágeno da pele.',
    highlight: 'Mais densidade e sustentação',
    image: 'assets/img/protocolos/Bioestimulador de Colágeno.png'
  },
  {
    id: 'lifting-ultrassom',
    category: 'colageno',
    badge: 'Tecnologia',
    title: 'Lifting Facial & Ultrassom',
    subtitle: 'Efeito lifting sem cirurgia atuando nas camadas profundas para reposicionar tecidos e definir contornos.',
    highlight: 'Firmeza sem cortes',
    image: 'assets/img/protocolos/Lifting Facial & Ultrassom.png'
  },
  {
    id: 'laser-co2',
    category: 'colageno',
    badge: 'Inovação',
    title: 'Laser de CO₂ & Skin Reset',
    subtitle: 'Renovação celular intensa para melhorar textura, poros, cicatrizes e preparar a pele para datas especiais.',
    highlight: 'Pele renovada e luminosa',
    image: 'assets/img/protocolos/Laser de CO₂ & Skin Reset.png'
  },
  {
    id: 'corporal-gluteos',
    category: 'corporal',
    badge: 'Corporal',
    title: 'Protocolo Glúteos & Contorno',
    subtitle: 'Bioestimulação, firmeza e melhora da qualidade da pele corporal com protocolos personalizados.',
    highlight: 'Sustentação e textura uniforme',
    image: 'assets/img/protocolos/Protocolo Glúteos & Contorno.png'
  },
  {
    id: 'harmonizacao-intima',
    category: 'corporal',
    badge: 'Bem-estar',
    title: 'Harmonização Íntima & Laser',
    subtitle: 'Tratamentos estéticos e funcionais com discrição absoluta, conforto e tecnologias avançadas.',
    highlight: 'Autoestima e cuidado íntimo',
    image: 'assets/img/protocolos/Harmonização Íntima & Laser.png'
  },
  {
    id: 'harmonizacao-masculina',
    category: 'masculino',
    badge: 'Masculino & Capilar',
    title: 'Harmonização Masculina & Capilar',
    subtitle: 'Definição de mandíbula sem artificialidade, laser na região da barba e protocolos contra calvície.',
    highlight: 'Resultados discretos e assertivos',
    image: 'assets/img/protocolos/Harmonização Masculina & Capilar.png'
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