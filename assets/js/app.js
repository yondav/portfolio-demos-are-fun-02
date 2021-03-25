const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const logoYon = document.querySelector('.yon');
const logoDav = document.querySelector('.dav');

let ready = true;

header.addEventListener('mousemove', (e) => {
  let mouseY = e.clientY;
  let mouseX = e.clientX;
  let transArr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  let randomTrans = transArr[Math.floor(Math.random() * transArr.length)];
  logoColors(logoYon, logoDav);
  if (mouseY && mouseX) {
    logo.style.transform = `translate(${randomTrans}%, ${randomTrans}%)`;
    console.log(randomTrans);
  }
  // if (mouseY < 288 || mouseX < 725) {
  //   logo.style.transform = `translate(${randomTrans}%, ${randomTrans}%)`;
  //   console.log(randomTrans);
  // }
});

header.addEventListener('mouseleave', () => {
  logoYon.style = '';
  logoDav.style = '';
});

// header.addEventListener('mouseup', () => {
//   logo.style.background = 'white';
// });

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
