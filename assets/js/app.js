const body = document.querySelector('body');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const logoYon = document.querySelector('.yon');
const logoDav = document.querySelector('.dav');
const contrast = document.querySelector('.contrast');

let ready = true;

header.addEventListener('mousemove', (e) => {
  let mouseX = e.clientX;
  let centerX = e.currentTarget.offsetWidth / 2;
  let currentXoffset = Math.abs(centerX - mouseX);

  logo.style.letterSpacing = `${currentXoffset * 0.007}rem`;
  logoColors(logoYon, logoDav);
});

header.addEventListener('mouseleave', () => {
  logo.style = '';
  logoYon.style = '';
  logoDav.style = '';
});

contrast.addEventListener('click', (e) => {
  console.log('you called?');
  e.preventDefault();
  body.classList.toggle('dark');
});

function logoColors(x, y) {
  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#'; // declares a block variable (let) so that there is always a # at the start of the hex color
  if (ready === true) {
    for (let i = 0; i < 6; i++) {
      let xHex = (hexColor += hex[Math.floor(Math.random() * hex.length)]);
      let yHex = (hexColor += hex[Math.floor(Math.random() * hex.length)]);
      x.style.color = xHex;
      y.style.color = yHex;
    }

    ready = false;
    setTimeout(() => {
      ready = true;
    }, 800);
  }
}
