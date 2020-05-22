const pricing = document.getElementById('pricing');
const product = document.getElementById('product');
const aboutUs = document.getElementById('about-us');
const careers = document.getElementById('careers');
const community = document.getElementById('community');
const deployMenu = document.getElementById('nav-deploy');
const closeMenu = document.getElementById('nav-deploy-close');
const burguerMenu = document.getElementById('nav-hamburguesa');

burguerMenu.addEventListener('click', openMenu);
closeMenu.addEventListener('click', hideMenu);
pricing.addEventListener('click', hideMenu);
product.addEventListener('click', hideMenu);
aboutUs.addEventListener('click', hideMenu);
careers.addEventListener('click', hideMenu);
community.addEventListener('click', hideMenu);

function openMenu(event) {
  deployMenu.style.display = 'block';
  closeMenu.style.display = 'block';
  burguerMenu.style.display= 'none';
}

function hideMenu() {
  deployMenu.style.display = 'none';
  closeMenu.style.display = 'none';
  burguerMenu.style.display= 'block';
}