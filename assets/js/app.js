const header = document.querySelector('header');
const logoYon = document.querySelector('.yon');
const logoDav = document.querySelector('.dav');

header.addEventListener('mousemove', () => {
  setTimeout(() => {
    logoColors(logoYon);
    logoColors(logoDav);
  }, 1500);
});

function logoColors(x) {
  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#'; // declares a block variable (let) so that there is always a # at the start of the hex color
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)]; // for loop says that until the color code starts at 0 characters and adds a character until it reaches 6 characters long. The characters are defined to be a character from the hex variable declared on line 1. += makes it so that we are compounding a string rather than overriding the value of hex by using only =
  }
  x.style.color = hexColor;
}
