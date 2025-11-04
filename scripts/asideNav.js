document.addEventListener('DOMContentLoaded', () => {
  const iconAndText = document.getElementById('header__icon-and-title');
  const asideNav = document.getElementById('header__aside');
  const closeButton = document.getElementById(
    'header__aside__top-side__head__close-button'
  );

  if (window.innerWidth <= 768) {
    iconAndText.addEventListener('click', () => {
      asideNav.style.display = 'flex';
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      asideNav.style.display = 'none';
    });
  }
});
