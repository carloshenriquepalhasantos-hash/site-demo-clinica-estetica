document.addEventListener('DOMContentLoaded', () => {
  // 1. Acordeão exclusivo nas Dúvidas Frequentes
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });

  // 2. Revela os elementos conforme entram na tela, em qualquer direção de rolagem
  if ('IntersectionObserver' in window) {
    const revealSelector = [
      '.hero-content > *',
      '.strip-list > *',
      '.section-header > *',
      '.filter-tabs',
      '.protocol-card',
      '.doctor-card-visual',
      '.doctor-copy > *',
      '.quiz-box > *',
      '.faq-item',
      '.site-footer .footer-inner > *'
    ].join(', ');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px'
    });

    const observeReveal = (element) => {
      if (element.classList.contains('scroll-reveal')) return;

      const siblingIndex = Array.prototype.indexOf.call(
        element.parentElement.children,
        element
      );
      element.style.setProperty(
        '--reveal-delay',
        `${Math.min(siblingIndex, 4) * 80}ms`
      );
      element.classList.add('scroll-reveal');
      revealObserver.observe(element);
    };

    document.querySelectorAll(revealSelector).forEach(observeReveal);

    const protocolsGrid = document.getElementById('protocols-grid');
    if (protocolsGrid) {
      const protocolsObserver = new MutationObserver(() => {
        protocolsGrid.querySelectorAll('.protocol-card').forEach(observeReveal);
      });
      protocolsObserver.observe(protocolsGrid, { childList: true });
    }
  }

  const protocolsGrid = document.getElementById('protocols-grid');
  const mobileProtocolCards = window.matchMedia('(max-width: 600px)');

  if (protocolsGrid && mobileProtocolCards.matches) {
    let updateFrame = 0;

    const updateCenteredCard = () => {
      updateFrame = 0;
      const cards = Array.from(protocolsGrid.querySelectorAll('.protocol-card'));
      const viewportCenter = window.innerHeight / 2;
      const activationDistance = window.innerHeight * 0.2;
      let centeredCard = null;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;

        const distance = Math.abs((rect.top + rect.bottom) / 2 - viewportCenter);
        if (distance < closestDistance) {
          centeredCard = card;
          closestDistance = distance;
        }
      });

      cards.forEach((card) => {
        card.classList.toggle(
          'is-centered',
          card === centeredCard && closestDistance <= activationDistance
        );
      });
    };

    const scheduleCenteredCardUpdate = () => {
      if (updateFrame) return;
      updateFrame = window.requestAnimationFrame(updateCenteredCard);
    };

    window.addEventListener('scroll', scheduleCenteredCardUpdate, { passive: true });
    window.addEventListener('resize', scheduleCenteredCardUpdate);
    new MutationObserver(scheduleCenteredCardUpdate).observe(protocolsGrid, {
      childList: true
    });
    scheduleCenteredCardUpdate();
  }

});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  if (window.scrollY > 36) {
    header.style.backgroundColor = "rgba(250, 247, 245, 0.9)";
    header.style.backdropFilter = "blur(10px)";
    header.style.borderBottom = "1px solid var(--color-nude-200)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    header.style.borderBottom = "none";
  }
}, { passive: true });