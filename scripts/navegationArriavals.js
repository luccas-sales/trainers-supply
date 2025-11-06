document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById(
    'main__new-arrivals__products'
  );
  const leftBtn = document.getElementById('main__new-arrivals__button-left');
  const rightBtn = document.getElementById('main__new-arrivals__button-right');

  leftBtn.addEventListener('click', () => {
    productsContainer.scrollLeft -= productsContainer.clientWidth;
  });

  rightBtn.addEventListener('click', () => {
    productsContainer.scrollLeft += productsContainer.clientWidth;
  });

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
  });
});
