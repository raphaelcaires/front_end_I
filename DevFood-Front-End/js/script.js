const menu = document.getElementById('menu-hamburguer');
const navbar = document.getElementsByClassName('navbar')[0];

console.log(navbar);

function menuHamburguer() {
  navbar.classList.toggle('active');
}

menu.addEventListener('click', menuHamburguer)