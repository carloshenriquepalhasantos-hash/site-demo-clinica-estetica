const DIAGNOSIS_OPTIONS = [
  {
    id: 'furo',
    label: 'Furo Humanizado',
    protocol: 'Furo Humanizado',
    description:
      'Conheça a apresentação demonstrativa do serviço. Personalize com o método e as orientações reais da profissional.'
  },
  {
    id: 'pele',
    label: 'Pele',
    protocol: 'Cuidados com a Pele',
    description:
      'Use este espaço para apresentar cuidados e tratamentos faciais realmente oferecidos.'
  },
  {
    id: 'hof',
    label: 'HOF',
    protocol: 'Harmonização Orofacial (HOF)',
    description:
      'Destaque as técnicas de Harmonização Orofacial realizadas pela profissional e as informações confirmadas.'
  },
  {
    id: 'estetica-facial',
    label: 'Estética Facial',
    protocol: 'Estética Facial',
    description:
      'Apresente os cuidados de estética facial que fazem parte da atuação da profissional.'
  }
];

function initDiagnosisQuiz() {
  const optionsContainer = document.getElementById('quiz-options');
  const resultContainer = document.getElementById('quiz-result');
  if (!optionsContainer || !resultContainer) return;

  optionsContainer.innerHTML = DIAGNOSIS_OPTIONS.map(
    (opt) => `
      <button type="button" class="quiz-option-btn" data-diagnosis="${opt.id}">
        ${opt.label}
      </button>
    `
  ).join('');

  optionsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-diagnosis]');
    if (!button) return;

    optionsContainer
      .querySelectorAll('.quiz-option-btn')
      .forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');

    const selected = DIAGNOSIS_OPTIONS.find(
      (item) => item.id === button.dataset.diagnosis
    );
    if (!selected) return;

    resultContainer.hidden = false;
    resultContainer.innerHTML = `
      <span class="eyebrow">Área selecionada</span>
      <h3>${selected.protocol}</h3>
      <p>${selected.description}</p>
      <p style="font-size: 0.8rem; margin-top: 0.5rem;">
        *Este conteúdo é demonstrativo e não substitui avaliação profissional.
      </p>
      <a href="#contato" class="btn btn-primary">
        Ver exemplo de agendamento
      </a>
    `;

    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

document.addEventListener('DOMContentLoaded', initDiagnosisQuiz);