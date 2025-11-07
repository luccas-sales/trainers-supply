document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('header__user-and-bag__bag');
  const ShoppingCart = document.getElementById('shopping-cart');
  const asideShoppingCart = document.getElementById('shopping-cart__content');

  const asideShoppingCartBackground = document.getElementById(
    'shopping-cart__background'
  );

  const closeButton = document.getElementById(
    'shopping-cart__content__top-side__close-button'
  );

  cartIcon.addEventListener('click', () => {
    ShoppingCart.style.display = 'flex';
    asideShoppingCart.style.display = 'flex';
    asideShoppingCart.classList.add('cart-aside-animation-in');

    asideShoppingCartBackground.style.display = 'flex';
    asideShoppingCartBackground.classList.add('background-aside-animation-in');
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      asideShoppingCart.classList.remove('cart-aside-animation-in');
      asideShoppingCart.classList.add('cart-aside-animation-out');

      asideShoppingCartBackground.classList.remove(
        'background-aside-animation-in'
      );
      asideShoppingCartBackground.classList.add(
        'background-aside-animation-out'
      );

      setTimeout(() => {
        asideShoppingCart.classList.remove('cart-aside-animation-out');
        asideShoppingCart.style.display = 'none';

        asideShoppingCartBackground.classList.remove(
          'background-aside-animation-out'
        );
        asideShoppingCartBackground.style.display = 'none';

        ShoppingCart.style.display = 'none';
      }, 1000);
    });
  }

  asideShoppingCartBackground.addEventListener('click', () => {
    asideShoppingCart.classList.remove('cart-aside-animation-in');
    asideShoppingCart.classList.add('cart-aside-animation-out');

    asideShoppingCartBackground.classList.remove(
      'background-aside-animation-in'
    );
    asideShoppingCartBackground.classList.add('background-aside-animation-out');

    setTimeout(() => {
      asideShoppingCart.classList.remove('cart-aside-animation-out');
      asideShoppingCart.style.display = 'none';

      asideShoppingCartBackground.classList.remove(
        'background-aside-animation-out'
      );
      asideShoppingCartBackground.style.display = 'none';

      ShoppingCart.style.display = 'none';
    }, 1000);
  });
});
