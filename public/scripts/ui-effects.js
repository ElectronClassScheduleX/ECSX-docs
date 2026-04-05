/**
 * 卡片光晕追踪效果
 * 监听鼠标移动并更新 CSS 变量
 */
function initCardGlowEffect() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * 页面元素渐入动画
 * 为关键元素添加 staggered 动画效果
 */
function initStaggeredReveal() {
  const heroElements = document.querySelectorAll('.hero > *');
  
  heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${0.1 + index * 0.15}s, transform 0.6s ease ${0.1 + index * 0.15}s`;
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
}

/**
 * 滚动触发动画
 * 当元素进入视口时添加动画
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  const animatedElements = document.querySelectorAll('.card, .sl-markdown-content h2, .sl-markdown-content p');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/**
 * 添加 CSS 类用于动画
 */
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    @media (prefers-reduced-motion: no-preference) {
      .card, .hero, .sl-link-button {
        will-change: transform;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * 初始化所有效果
 */
function init() {
  addAnimationStyles();
  
  if (document.querySelector('[data-has-hero]')) {
    initStaggeredReveal();
  }
  
  setTimeout(() => {
    initCardGlowEffect();
    initScrollAnimations();
  }, 200);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
