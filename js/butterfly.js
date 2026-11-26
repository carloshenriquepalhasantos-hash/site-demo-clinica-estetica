document.addEventListener('DOMContentLoaded', () => {
  const perch = document.getElementById('butterfly-perch');
  if (!perch) return;

  const butterfly = document.createElement('div');
  butterfly.className = 'editorial-butterfly flying';
  butterfly.setAttribute('aria-hidden', 'true');

  butterfly.innerHTML = `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wingGold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#E5D3B8" />
          <stop offset="55%" stop-color="#C8A97E" />
          <stop offset="100%" stop-color="#681D48" />
        </linearGradient>
      </defs>
      <!-- Asa Esquerda -->
      <g class="wing-left">
        <path d="M23 23C16 10 4 9 5 20C6 27 14 28 22 25Z" fill="url(#wingGold)" fill-opacity="0.92" stroke="#3A0D27" stroke-width="0.9"/>
        <path d="M22 26C14 27 8 33 12 38C16 42 22 35 23 28Z" fill="#C8A97E" fill-opacity="0.88" stroke="#3A0D27" stroke-width="0.9"/>
      </g>
      <!-- Asa Direita -->
      <g class="wing-right">
        <path d="M25 23C32 10 44 9 43 20C42 27 34 28 26 25Z" fill="url(#wingGold)" fill-opacity="0.92" stroke="#3A0D27" stroke-width="0.9"/>
        <path d="M26 26C34 27 40 33 36 38C32 42 26 35 25 28Z" fill="#C8A97E" fill-opacity="0.88" stroke="#3A0D27" stroke-width="0.9"/>
      </g>
      <!-- Corpo e Antenas -->
      <ellipse cx="24" cy="25" rx="1.3" ry="7.5" fill="#3A0D27"/>
      <path d="M23.5 18C22 14 20 13 18.5 13.5" stroke="#3A0D27" stroke-width="0.9" stroke-linecap="round"/>
      <path d="M24.5 18C26 14 28 13 29.5 13.5" stroke="#3A0D27" stroke-width="0.9" stroke-linecap="round"/>
    </svg>
  `;

  document.body.appendChild(butterfly);

  // Posição inicial fora/canto superior direito
  let startX = window.innerWidth * 0.78;
  let startY = 90;
  butterfly.style.transform = `translate(${startX}px, ${startY}px) rotate(-18deg)`;

  function landOnLetter(instant = false) {
    const rect = perch.getBoundingClientRect();
    const targetX = rect.left + rect.width * 0.5 - 17;
    const targetY = rect.top - 20;

    if (instant) {
      butterfly.style.transition = 'none';
      butterfly.style.transform = `translate(${targetX}px, ${targetY}px) rotate(12deg)`;
      requestAnimationFrame(() => {
        butterfly.style.transition = '';
      });
      return;
    }

    // Ponto intermediário para curva natural de voo
    const midX = (startX + targetX) / 2 - 45;
    const midY = Math.min(startY, targetY) - 35;

    setTimeout(() => {
      butterfly.style.transform = `translate(${midX}px, ${midY}px) rotate(-25deg)`;
    }, 250);

    setTimeout(() => {
      butterfly.style.transform = `translate(${targetX}px, ${targetY}px) rotate(12deg)`;
    }, 1650);

    setTimeout(() => {
      butterfly.classList.remove('flying');
      butterfly.classList.add('perched');
    }, 3100);
  }

  landOnLetter(false);

  window.addEventListener('resize', () => {
    if (butterfly.classList.contains('perched')) {
      landOnLetter(true);
    }
  });

  // Ao clicar ou passar o mouse perto do título, ela dá um pequeno voo e pousa de novo
  perch.parentElement?.addEventListener('mouseenter', () => {
    if (!butterfly.classList.contains('perched')) return;
    butterfly.classList.remove('perched');
    butterfly.classList.add('flying');
    startX = parseFloat(butterfly.style.transform.split('(')[1]) + 55;
    startY = parseFloat(butterfly.style.transform.split(',')[1]) - 45;
    butterfly.style.transform = `translate(${startX}px, ${startY}px) rotate(-20deg)`;
    landOnLetter(false);
  });
});