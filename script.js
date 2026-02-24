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
    id: 'harmonizacao',
    titulo: 'Harmonização Facial',
    imagem: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=90',
    descricao: 'A Harmonização Facial é um conjunto de procedimentos estéticos que visa equilibrar as proporções do rosto, realçando a beleza natural de cada paciente. Utilizamos técnicas avançadas e seguras, com ácido hialurônico de última geração, para criar resultados sutis, elegantes e extremamente naturais. O tratamento é personalizado conforme a análise facial e os objetivos de cada mulher, garantindo harmonia e simetria sem perder a identidade.',
    beneficios: [
      'Equilíbrio facial e proporções harmoniosas',
      'Naturalidade nos traços preservada',
      'Técnicas avançadas e seguras',
      'Resultados duradouros e progressivos',
      'Personalização total do protocolo'
    ],
    tempo: 'Duração média: 60 a 90 minutos',
    recomendacoes: ['Evitar exposição solar intensa 48h antes', 'Não ingerir bebidas alcoólicas 24h antes']
  },
  {
    id: 'skinbooster',
    titulo: 'Skinbooster',
    imagem: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=90',
    descricao: 'O Skinbooster é um tratamento revolucionário de hidratação profunda com ácido hialurônico de baixo peso molecular. Aplicado em microgotas na camada superficial da pele, promove hidratação intensa de dentro para fora, melhorando a textura, o viço e a luminosidade. Ideal para peles desidratadas, opacas ou que buscam prevenção do envelhecimento com resultados naturais e duradouros.',
    beneficios: [
      'Hidratação intensa e profunda',
      'Melhora significativa da textura da pele',
      'Aumento do viço e luminosidade natural',
      'Estimulação de colágeno',
      'Efeito preenchedor leve e natural'
    ],
    tempo: 'Duração média: 40 a 50 minutos',
    recomendacoes: ['Sessões em intervalo de 4 semanas', 'Evitar maquiagem nas primeiras 12h']
  },
  {
    id: 'preenchimento-labial',
    titulo: 'Preenchimento Labial',
    imagem: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800&q=90',
    descricao: 'O Preenchimento Labial com ácido hialurônico é um dos procedimentos mais procurados para realçar a beleza dos lábios. Oferecemos volume, definição e contorno com resultados naturais e elegantes. Utilizamos técnicas que respeitam a anatomia natural, criando lábios mais volumosos, definidos e simétricos, sem exageros. O ácido hialurônico também hidrata e estimula o colágeno local.',
    beneficios: [
      'Volume e definição naturais',
      'Contorno labial refinado',
      'Hidratação e estimulação de colágeno',
      'Resultados imediatos e duradouros',
      'Correção de assimetrias'
    ],
    tempo: 'Duração média: 45 a 60 minutos',
    recomendacoes: ['Evitar anticoagulantes 7 dias antes', 'Não beijar ou fazer movimentos exagerados nas primeiras 24h']
  },
  {
    id: 'botox',
    titulo: 'Botox',
    imagem: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=90',
    descricao: 'A aplicação de Botox (Toxina Botulínica) é um dos procedimentos mais seguros e eficazes para suavizar linhas de expressão e prevenir o envelhecimento. Aplicamos a toxina com técnica refinada e precisão milimétrica, relaxando os músculos responsáveis pelas rugas da testa, entre as sobrancelhas e ao redor dos olhos. O resultado é um aspecto mais jovem, descansado e natural, sem perder a expressividade.',
    beneficios: [
      'Suavização de linhas de expressão',
      'Prevenção do envelhecimento',
      'Aspecto descansado e rejuvenescido',
      'Técnica refinada e natural',
      'Resultados em 3 a 7 dias'
    ],
    tempo: 'Duração média: 20 a 30 minutos',
    recomendacoes: ['Manter-se em posição vertical 4h após', 'Evitar massagens na região por 24h']
  },
  {
    id: 'limpeza-pele',
    titulo: 'Limpeza de Pele',
    imagem: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=90',
    descricao: 'A Limpeza de Pele profissional é um tratamento fundamental para manter a saúde e a beleza da pele. Realizamos extração de cravos e impurezas, esfoliação suave e aplicação de máscaras adequadas ao seu tipo de pele. O resultado é uma pele mais limpa, radiante, revitalizada e preparada para absorver melhor os tratamentos subsequentes. Essencial para quem busca um visual impecável.',
    beneficios: [
      'Remoção profunda de impurezas',
      'Pele radiante e revitalizada',
      'Prevenção de acne e cravos',
      'Melhor absorção de ativos',
      'Relaxamento e bem-estar'
    ],
    tempo: 'Duração média: 60 minutos',
    recomendacoes: ['Evitar sol nas 48h seguintes', 'Usar protetor solar diariamente']
  },
  {
    id: 'microagulhamento',
    titulo: 'Microagulhamento',
    imagem: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=90',
    descricao: 'O Microagulhamento é um procedimento que utiliza microagulhas para criar microcanais na pele, estimulando a produção natural de colágeno e elastina. Indicado para melhora de textura, cicatrizes de acne, estrias, poros dilatados e rejuvenescimento. Associamos o procedimento a ativos como vitamina C, ácido hialurônico ou peptídeos para potencializar os resultados. A pele fica mais firme, uniforme e luminosa.',
    beneficios: [
      'Estimulação natural do colágeno',
      'Textura da pele refinada',
      'Redução de cicatrizes e estrias',
      'Poros mais fechados',
      'Rejuvenescimento progressivo'
    ],
    tempo: 'Duração média: 60 a 75 minutos',
    recomendacoes: ['Sessões mensais para melhores resultados', 'Evitar maquiagem por 24h']
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
