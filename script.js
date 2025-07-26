const brandData = {
  lamborghini: {
    name: "Lamborghini",
    info: "Lamborghini is an Italian brand known for its luxury sports cars. Founded by Ferruccio Lamborghini in 1963. Now owned by the Volkswagen Group via Audi.",
    image: "images/lambo.jpg"
  },
  ferrari: {
    name: "Ferrari",
    info: "Ferrari is a legendary Italian car manufacturer founded in 1939 by Enzo Ferrari. Known for Formula One and high-performance luxury cars.",
    image: "images/ferrari.jpg"
  },
  tesla: {
    name: "Tesla",
    info: "Tesla, founded by Elon Musk and others in 2003, is an American electric car company focused on clean energy and autonomous driving.",
    image: "images/teslacybertruck.jpg"
  },
  bugatti: {
    name: "Bugatti",
    info: "Bugatti, founded in 1909, is a French luxury car brand known for ultra-high-performance cars like the Veyron and Chiron. Owned by Rimac Group.",
    image: "images/bugatti.jpg"
  },
  porsche: {
    name: "Porsche",
    info: "Porsche is a German automobile manufacturer specializing in high-performance sports cars, SUVs, and sedans. Founded in 1931 by Ferdinand Porsche.",
    image: "images/porsche.jpg"
  }
};

function showInfo(brandKey) {
  const brand = brandData[brandKey];
  document.getElementById('brand-name').textContent = brand.name;
  document.getElementById('brand-info').textContent = brand.info;
  document.getElementById('brand-img').src = brand.image;
  document.getElementById('info-box').classList.remove('hidden');
}

function filterBrands() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const buttons = document.querySelectorAll('#brandButtons button');
  buttons.forEach(button => {
    const brand = button.textContent.toLowerCase();
    button.style.display = brand.includes(query) ? 'inline-block' : 'none';
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
