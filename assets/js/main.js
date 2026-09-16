(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) { target.classList.add('is-visible'); observer.unobserve(target); }
    });
  }, { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
})();
