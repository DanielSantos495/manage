
const deployMenu = document.getElementById('nav-deploy');
const closeMenu = document.getElementById('nav-deploy-close');
const burgerMenu = document.getElementById('nav-hamburguesa');
const mediaQueryMenuDeploy = matchMedia('(min-width: 1023px)');

function openMenu(event) {
  if(deployMenu.classList.contains('show')) {
    deployMenu.classList.remove('show');
    closeMenu.classList.remove('show');
    burgerMenu.style.display = 'block';
  } else {
    deployMenu.classList.add('show');
    closeMenu.classList.add('show');
    burgerMenu.style.display= 'none';
  }
}

const changeSize = (mQ) => {
  if (mediaQueryMenuDeploy.matches) {
    burgerMenu.removeEventListener('click', openMenu);
    deployMenu.removeEventListener('click', openMenu);
  } else {
    burgerMenu.addEventListener('click', openMenu);
    deployMenu.addEventListener('click', openMenu);
  }
}

mediaQueryMenuDeploy.addListener(changeSize);
changeSize(mediaQueryMenuDeploy);






