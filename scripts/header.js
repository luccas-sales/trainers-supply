document.addEventListener('DOMContentLoaded', () => {
  const iconAndText = document.getElementById('header__icon-and-title');
  const iconAndTextAside = document.getElementById(
    'header__aside__top-side__head__icon-and-title'
  );
  const asideNav = document.getElementById('header__aside');
  const closeButton = document.getElementById(
    'header__aside__top-side__head__close-button'
  );

  if (window.innerWidth <= 768) {
    iconAndText.addEventListener('click', () => {
      asideNav.style.display = 'flex';
      asideNav.classList.add('aside-animation-in');
    });

    iconAndTextAside.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  } else {
    iconAndText.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      asideNav.classList.remove('aside-animation-in');
      asideNav.classList.add('aside-animation-out');

      setTimeout(() => {
        asideNav.classList.remove('aside-animation-out');
        asideNav.style.display = 'none';
      }, 1000);
    });
  }
});
