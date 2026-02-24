/**
 * Lumière Estética - Dark Luxury Premium
 * Animações, IntersectionObserver e interações
 * 
 * WhatsApp: Substitua 5511999999999 pelo número real (DDD + número, ex: 5511987654321)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSmoothScroll();
  initNumberCounter();
  initScrollAnimations();
  initMobileMenu();
  initHeroParallax();
  initModalTratamento();
});

/**
 * Array central de tratamentos - dados para o modal
 */
const tratamentos = [
  {
    id: 'harmonizacao-glutea',
    titulo: 'Harmonização Glútea',
    imagem: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=90',
    descricao: 'Procedimento avançado para realçar projeção, contorno e firmeza dos glúteos através de bioestimuladores de colágeno. O resultado é natural, progressivo e com melhora visível da qualidade da pele.',
    beneficios: [
      'Aumento de volume natural',
      'Bioestímulo de colágeno',
      'Melhora da textura e firmeza',
      'Levantamento natural',
      'Contorno corporal mais definido'
    ],
    tempo: 'Pacote: Bioestimulador 20mL + 1 sessão de ultrassom microfocado',
    recomendacoes: []
  },
  {
    id: 'detox-corporal',
    titulo: 'Detox Corporal',
    imagem: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=90',
    descricao: 'Protocolo intensivo de desintoxicação que combina técnicas manuais e tecnologias para eliminar líquidos, toxinas e reduzir medidas rapidamente.',
    beneficios: [
      'Redução de inchaço',
      'Acelera o metabolismo',
      'Elimina toxinas',
      'Reduz medidas',
      'Melhora a circulação'
    ],
    tempo: 'Pacote: 10 drenagens + 10 mantas + 5 enzimas detox + 10 lipos sem cortes',
    recomendacoes: []
  },
  {
    id: 'gordura-localizada',
    titulo: 'Gordura Localizada',
    imagem: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=90',
    descricao: 'Tratamento completo para gordura resistente com tecnologias combinadas para definir cintura e abdômen.',
    beneficios: [
      'Reduz gordura localizada',
      'Define abdômen',
      'Melhora contorno corporal',
      'Resultados progressivos'
    ],
    tempo: 'Protocolo Completo: 6 radiofrequências + 6 enzimas + 6 correntes russas + 6 modeladoras — Valor: 6x R$ 141,65',
    recomendacoes: []
  },
  {
    id: 'harmonizacao-facial',
    titulo: 'Harmonização Facial',
    imagem: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800&q=90',
    descricao: 'Procedimentos personalizados para equilibrar os traços, valorizar a beleza natural e promover rejuvenescimento sem exageros.',
    beneficios: [
      'Traços equilibrados',
      'Efeito natural',
      'Rejuvenescimento',
      'Contorno facial refinado',
      'Correção de assimetrias'
    ],
    tempo: 'Consulta personalizada para definição do protocolo',
    recomendacoes: []
  },
  {
    id: 'ultrassom-microfocado',
    titulo: 'Ultrassom Microfocado',
    imagem: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=90',
    descricao: 'Lifting não cirúrgico que estimula o colágeno profundamente, promovendo firmeza e melhora estrutural do rosto.',
    beneficios: [
      'Firmeza imediata',
      'Resultado progressivo',
      'Estímulo profundo de colágeno',
      'Efeito lifting sem cortes'
    ],
    tempo: 'Full Face — Sessão personalizada',
    recomendacoes: []
  },
  {
    id: 'mesoterapia-capilar',
    titulo: 'Mesoterapia Capilar',
    imagem: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=90',
    descricao: 'Tratamento injetável para fortalecer os fios, nutrir o couro cabeludo e reduzir queda de cabelo.',
    beneficios: [
      'Crescimento acelerado',
      'Redução da queda',
      'Nutrição dos fios',
      'Aumento de densidade'
    ],
    tempo: 'Pacote: 10 sessões — R$ 1.299,90',
    recomendacoes: []
  },
  {
    id: 'drenagem-detox',
    titulo: 'Drenagem & Detox',
    imagem: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=90',
    descricao: 'Protocolo de drenagem linfática completo para eliminar líquidos, reduzir inchaço e promover bem-estar imediato.',
    beneficios: [
      'Diminui retenção de líquidos',
      'Melhora circulação',
      'Sensação de leveza',
      'Reduz medidas'
    ],
    tempo: 'Sessões individuais ou pacotes personalizados',
    recomendacoes: []
  },
  {
    id: 'terapias-corporais',
    titulo: 'Terapias Corporais',
    imagem: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=90',
    descricao: 'Conjunto completo de terapias corporais para saúde, relaxamento e estética. Inclui: Massagem terapêutica, Modeladora, Drenagem, Radiofrequência, Carbox, Manthus, Enzimas, Manta térmica e Ventosa.',
    beneficios: [
      'Massagem terapêutica',
      'Modeladora',
      'Drenagem',
      'Radiofrequência',
      'Carbox',
      'Manthus',
      'Enzimas',
      'Manta térmica',
      'Ventosa'
    ],
    tempo: 'Protocolos personalizados conforme necessidade',
    recomendacoes: []
  }
];

/**
 * Header - Efeito ao rolar
 */
function initHeader() {
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Estado inicial
}

/**
 * Scroll suave para âncoras
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Contagem animada dos números - IntersectionObserver
 * Só inicia quando a seção entra no viewport
 */
function initNumberCounter() {
  const numerosCards = document.querySelectorAll('.numeros__card');
  const numerosSection = document.getElementById('numeros');
  
  if (!numerosSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        numerosCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
            animateValue(card);
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  observer.observe(numerosSection);
}

/**
 * Anima o valor numérico de 0 até o target
 */
function animateValue(card) {
  const valueEl = card.querySelector('.numeros__value');
  const suffixEl = card.querySelector('.numeros__suffix');
  
  if (!valueEl) return;
  
  const target = parseInt(valueEl.dataset.target, 10);
  const suffix = suffixEl ? suffixEl.textContent : '';
  const duration = 2000;
  const startTime = performance.now();
  
  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const currentValue = Math.floor(easedProgress * target);
    
    valueEl.textContent = currentValue.toLocaleString('pt-BR');
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      valueEl.textContent = target.toLocaleString('pt-BR');
    }
  }
  
  requestAnimationFrame(update);
}

/**
 * Animações ao rolar - fade-up, glow
 * IntersectionObserver para elementos com classe .visible
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.servicos__card, .galeria__item'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });
  
  animatedElements.forEach((el, index) => {
    el.style.transitionDelay = `${index % 6 * 0.1}s`;
    observer.observe(el);
  });
}

/**
 * Menu mobile - burger toggle
 */
function initMobileMenu() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const cta = document.querySelector('.header__cta');
  
  if (!burger) return;
  
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.contains('active');
    
    if (isOpen) {
      burger.classList.remove('active');
      menu?.classList.remove('active');
      cta?.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      burger.classList.add('active');
      menu?.classList.add('active');
      cta?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  
  // Fechar ao clicar em link
  document.querySelectorAll('.header__menu a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      menu?.classList.remove('active');
      cta?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Modal de Tratamento - Dark Luxury
 */
function initModalTratamento() {
  const modal = document.getElementById('modalTratamento');
  const modalContent = modal?.querySelector('.modal');
  const backdrop = modal?.querySelector('.modal-backdrop');
  const closeBtn = modal?.querySelector('.modal__close');
  const saibaBtns = document.querySelectorAll('.servicos__btn--saiba');

  if (!modal || !modalContent) return;

  const WHATSAPP_NUMBER = '5511999999999';

  function openModal(tratamentoId) {
    const tratamento = tratamentos.find(t => t.id === tratamentoId);
    if (!tratamento) return;

    // Preencher conteúdo
    modal.querySelector('.modal__img').src = tratamento.imagem;
    modal.querySelector('.modal__img').alt = tratamento.titulo;
    modal.querySelector('#modalTitle').textContent = tratamento.titulo;
    modal.querySelector('.modal__desc').textContent = tratamento.descricao;
    modal.querySelector('.modal__tempo').textContent = tratamento.tempo;

    // Benefícios
    const beneficiosEl = modal.querySelector('.modal__beneficios');
    beneficiosEl.innerHTML = tratamento.beneficios
      .map(b => `<li>${b}</li>`)
      .join('');

    // Recomendações (opcional)
    const recEl = modal.querySelector('.modal__recomendacoes');
    if (tratamento.recomendacoes && tratamento.recomendacoes.length) {
      recEl.style.display = 'block';
      recEl.innerHTML = `
        <p class="modal__rec-title">Recomendações:</p>
        <ul class="modal__rec-list">
          ${tratamento.recomendacoes.map(r => `<li>${r}</li>`).join('')}
        </ul>
      `;
    } else {
      recEl.style.display = 'none';
    }

    // Link WhatsApp com mensagem personalizada
    const ctaEl = modal.querySelector('.modal__cta');
    const msg = encodeURIComponent(`Olá! Gostaria de agendar uma consulta para ${tratamento.titulo}.`);
    ctaEl.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

    // Abrir
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  saibaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal');
      if (id) openModal(id);
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Parallax sutil no hero - efeito cinematográfico
 */
function initHeroParallax() {
  const heroImg = document.querySelector('.hero__img');
  
  if (!heroImg) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = Math.min(scrolled * 0.2, 80);
    heroImg.style.transform = `translate3d(0, ${rate}px, 0)`;
  }, { passive: true });
}
