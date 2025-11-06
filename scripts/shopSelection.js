document.addEventListener('DOMContentLoaded', async function () {
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return [];
    }
  }

  const productsJson = await fetchData('./products.json');

  const urlParams = new URLSearchParams(window.location.search);
  const categorie = urlParams.get('category');

  const description = document.getElementById(
    'main__description-and-filters__description'
  );

  const products = document.getElementById('main__products');

  const descriptionCategories = {
    Pokeboll: 'Discover Pokéballs as rare as the Legendary Pokémon themselves',
    Medicine: 'Discover miraculous healing items to save your toughest battle',
    Candy: "Discover the legendary sweets that elevate your Pokémon's power",
    Berry: 'Discover Berries with unique effects that can turn any battle',
    All: 'Discover vital items with unique effects that can turn any battle',
  };

  function layout(categorie, json) {
    const productsDivs = new DocumentFragment();
    const descriptionCategorie = descriptionCategories[categorie];

    if (categorie === 'All') {
      json.forEach((product) => {
        const productDivElement = document.createElement('div');
        productDivElement.setAttribute('id', 'main__products__product');
        productDivElement.innerHTML = `
        <div id="main__products__product__image">
        <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.categorie} - ${product.name}</h3>
        <p>$${product.price}</p>
        `;

        productsDivs.appendChild(productDivElement);
      });
    } else {
      json.forEach((product) => {
        if (product.categorie === categorie) {
          const productDivElement = document.createElement('div');
          productDivElement.setAttribute('id', 'main__products__product');
          productDivElement.innerHTML = `
        <div id="main__products__product__image">
        <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.categorie} - ${product.name}</h3>
        <p>$${product.price}</p>
        `;

          productsDivs.appendChild(productDivElement);
        }
      });
    }

    setTimeout(() => {
      products.innerHTML = ' ';
      products.appendChild(productsDivs);
      description.innerHTML = ' ';
      description.innerHTML = `
    <div id="main__description-and-filters__description__page-identification">
                    <p>Home <i class="bi bi-chevron-right"></i> <span>${
                      categorie === 'All' ? 'All Items' : categorie
                    }</span></p>
                </div>

                <div id="main__description-and-filters__description__title-and-description">
                    <h1>${
                      categorie === 'All' ? 'All Items' : categorie
                    } Page</h1>
                    <p>${descriptionCategorie}</p>
                </div>
    `;

      ScrollTrigger.refresh();
    }, 1000);
  }

  if (categorie === 'pokeboll') {
    layout('Pokeboll', productsJson);
  }

  if (categorie === 'medicine') {
    layout('Medicine', productsJson);
  }

  if (categorie === 'candy') {
    layout('Candy', productsJson);
  }

  if (categorie === 'berry') {
    layout('Berry', productsJson);
  }

  if (categorie === 'all') {
    layout('All', productsJson);
  }
});
