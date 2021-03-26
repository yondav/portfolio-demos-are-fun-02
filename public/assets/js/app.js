const body = document.querySelector('body');

const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const logoYon = document.querySelector('.yon');
const logoDav = document.querySelector('.dav');
const contrast = document.querySelector('.contrast');
const icons = document.querySelectorAll('.icon');
const aboutBtn = document.querySelector('.about-btn');
const btn = document.querySelectorAll('.btn');

const bioCard = document.querySelector('.bio-card');
const contactBtn = document.querySelector('.contact-btn');
const popUp = document.querySelector('.pop-up');
const contactCard = document.querySelector('.contact-card');
const formTitle = document.querySelector('.lets-chat');
const formTitleLets = document.querySelector('.lets');
const formTitleChat = document.querySelector('.chat');
const close = document.querySelector('.close');
const back = document.querySelector('.back');

const form = document.querySelector('form');
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

// event listeners for header
// logo animation
header.addEventListener('mousemove', (e) => {
  let mouseX = e.clientX;
  let centerX = e.currentTarget.offsetWidth / 2;
  let currentXoffset = Math.abs(centerX - mouseX);

  logo.style.letterSpacing = `${currentXoffset * 0.007}rem`;
  logoColors(logoYon, logoDav);
});

// defaults style to hardcoded when mouse leaves header
header.addEventListener('mouseleave', () => {
  logo.style = '';
  logoYon.style = '';
  logoDav.style = '';
});

// toggle day night and changes icon
contrast.addEventListener('click', (e) => {
  console.log('you called?');
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    contrast.innerHTML = `<i class="fas fa-moon"></i>`;
  } else {
    contrast.innerHTML = `<i class="fas fa-sun"></i>`;
  }
});

// mouseover for about btn
btn.forEach((button) => {
  let chevron = document.querySelectorAll('.fa-chevron-right');
  chevron.forEach((arrow) => {
    button.addEventListener('mouseover', () => {
      button.style.color = 'rgb(215, 186, 125)';
      arrow.style.color = 'rgb(155, 220, 254)';
      arrow.classList.remove('hide');
      button.style.transform = `scale(1.1)`;

      button.addEventListener('mouseleave', () => {
        arrow.classList.add('hide');
        button.style.transform = '';
        button.style.color = '';
      });
    });
  });
});

// toggle pop-up bio/contact
aboutBtn.addEventListener('click', () => {
  if (popUp.classList.contains('slide-out')) {
    popUp.classList.remove('slide-out');
  }
  if (bioCard.classList.contains('fade-out')) {
    bioCard.classList.remove('fade-out');
  }

  popUp.classList.add('slide');
  bioCard.classList.add('fade-in');

  close.addEventListener('click', () => {
    if (contactCard.classList.contains('slide-side')) {
      contactCard.classList.add('slide-side-out');
      back.classList.add('hide');
    }
    if (contactBtn.classList.contains('hide')) {
      contactBtn.classList.remove('hide');
    }

    popUp.classList.add('slide-out');
    bioCard.classList.remove('fade-in');
    bioCard.classList.add('fade-out');
  });
});

// form title animation
popUp.addEventListener('mousemove', (e) => {
  let mouseX = e.clientX;
  let centerX = e.currentTarget.offsetWidth / 2;
  let currentXoffset = Math.abs(centerX - mouseX);

  formTitle.style.letterSpacing = `${currentXoffset * 0.0012}rem`;

  logoColors(formTitleLets, formTitleChat);
});

// toggle slide over contact from bio
contactBtn.addEventListener('click', () => {
  if (contactCard.classList.contains('slide-side-out')) {
    contactCard.classList.remove('slide-side-out');
  }
  contactCard.classList.add('slide-side');
  contactBtn.classList.add('hide');
  bioCard.classList.remove('fade-in');
  bioCard.classList.add('fade-out');
  back.classList.remove('hide');

  back.addEventListener('click', () => {
    contactCard.classList.add('slide-side-out');
    back.classList.add('hide');
    contactBtn.classList.remove('hide');
    bioCard.classList.remove('fade-out');
    bioCard.classList.add('fade-in');
  });
});

// triggers bounce animation on everything in icon class
icons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('bounce');
  });
  icon.addEventListener('animationend', (e) => {
    icon.classList.remove('bounce');
  });
});

// form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('email sent');
      fullName.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('something went wrong');
    }
  };
  xhr.send(JSON.stringify(formData));
});
// functions

let ready = true;

// generates random hexcode for changing logo colors
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
