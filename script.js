const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('nav');
const closeButton = document.querySelector('.nav-close');
const backdrop = document.querySelector('.nav-backdrop');

const setMenuOpen = (isOpen) => {
  navigation.classList.toggle('open', isOpen);
  backdrop.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  backdrop.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('menu-open', isOpen);
};

menuButton.addEventListener('click', () => setMenuOpen(true));
closeButton.addEventListener('click', () => setMenuOpen(false));
backdrop.addEventListener('click', () => setMenuOpen(false));

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});
