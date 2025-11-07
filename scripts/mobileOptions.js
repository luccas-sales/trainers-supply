document.addEventListener('DOMContentLoaded', () => {
  const iconAndText = document.getElementById('header__icon-and-title');
  const MobileOptions = document.getElementById('mobile-options');
  const asideMobileOptions = document.getElementById('mobile-options__content');

  const asideMobileOptionsBackground = document.getElementById(
    'mobile-options__background'
  );

  const closeButton = document.getElementById(
    'mobile-options__top-side__head__close-button'
  );

  if (window.innerWidth <= 1024) {
    iconAndText.addEventListener('click', () => {
      MobileOptions.style.display = 'flex';
      asideMobileOptions.style.display = 'flex';
      asideMobileOptions.classList.add('mobile-aside-animation-in');

      asideMobileOptionsBackground.style.display = 'flex';
      asideMobileOptionsBackground.classList.add(
        'background-aside-animation-in'
      );
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      asideMobileOptions.classList.remove('mobile-aside-animation-in');
      asideMobileOptions.classList.add('mobile-aside-animation-out');

      asideMobileOptionsBackground.classList.remove(
        'background-aside-animation-in'
      );
      asideMobileOptionsBackground.classList.add(
        'background-aside-animation-out'
      );

      setTimeout(() => {
        asideMobileOptions.classList.remove('mobile-aside-animation-out');
        asideMobileOptions.style.display = 'none';

        asideMobileOptionsBackground.classList.remove(
          'background-aside-animation-out'
        );
        asideMobileOptionsBackground.style.display = 'none';
        MobileOptions.style.display = 'none';
      }, 1000);
    });
  }

  asideMobileOptionsBackground.addEventListener('click', () => {
    asideMobileOptions.classList.remove('mobile-aside-animation-in');
    asideMobileOptions.classList.add('mobile-aside-animation-out');

    asideMobileOptionsBackground.classList.remove(
      'background-aside-animation-in'
    );
    asideMobileOptionsBackground.classList.add(
      'background-aside-animation-out'
    );

    setTimeout(() => {
      asideMobileOptions.classList.remove('mobile-aside-animation-out');
      asideMobileOptions.style.display = 'none';

      asideMobileOptionsBackground.classList.remove(
        'background-aside-animation-out'
      );
      asideMobileOptionsBackground.style.display = 'none';
      MobileOptions.style.display = 'none';
    }, 1000);
  });
});
