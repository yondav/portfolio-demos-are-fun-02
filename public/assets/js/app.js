const body = document.querySelector('body');

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-work');
const navLogo = document.querySelector('.nav-logo');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navAbout = document.querySelector('.nav-about');
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

const appCard = document.querySelectorAll('.app-card');
const appTitle = document.querySelectorAll('.app-title');
const descCard = document.querySelectorAll('.desc-card');
const otherSide = document.querySelector('.other-side');
const yupThumb = document.querySelector('.ytn');
const otherThumb = document.querySelector('.ostn');
const chopsThumb = document.querySelector('.cctn');
const weaThumb = document.querySelector('.watn');
const techThumb = document.querySelector('.tbtn');
const empThumb = document.querySelector('.ettn');

const portThumb = document.querySelector('.ptn');
const portrait = document.querySelector('.portrait-lg');
const slideBack = document.querySelector('.back-btn');
const slideNext = document.querySelector('.next-btn');

const handThumb = document.querySelector('.htn');
const hand = document.querySelector('.hand-lg');
const hSlideBack = document.querySelector('.hand-back-btn');
const hSlideNext = document.querySelector('.hand-next-btn');

const photoThumb = document.querySelector('.phtn');
const photo = document.querySelector('.photo-lg');
const phSlideBack = document.querySelector('.photo-back-btn');
const phSlideNext = document.querySelector('.photo-next-btn');

const presThumb = document.querySelector('.prtn');
const pres = document.querySelector('.pres-lg');
const prSlideBack = document.querySelector('.pres-back-btn');
const prSlideNext = document.querySelector('.pres-next-btn');

let currentItem = 0;

const portraits = [
  {
    name: 'banjo',
    img: './images/portraits/00.png',
  },
  {
    name: 'skaters',
    img: './images/portraits/01.png',
  },
  {
    name: 'bliss',
    img: './images/portraits/02.png',
  },
  {
    name: 'dannyBird',
    img: './images/portraits/03.png',
  },
  {
    name: 'artem',
    img: './images/portraits/04.png',
  },
  {
    name: 'sammy',
    img: './images/portraits/05.png',
  },
  {
    name: 'sheik',
    img: './images/portraits/06.png',
  },
  {
    name: 'yondav',
    img: './images/portraits/07.png',
  },
  {
    name: 'glo',
    img: './images/portraits/08.png',
  },
  {
    name: 'mysteryLights',
    img: './images/portraits/09.png',
  },
  {
    name: 'azad',
    img: './images/portraits/10.png',
  },
  {
    name: 'casey',
    img: './images/portraits/11.png',
  },
  {
    name: 'norm',
    img: './images/portraits/12.png',
  },
  {
    name: 'bigMike',
    img: './images/portraits/13.png',
  },
];
const hands = [
  {
    name: 'thumbsUp',
    img: './images/vector-art/thumbs-up.png',
  },
  {
    name: 'pinkySwear',
    img: './images/vector-art/pinky-swear.png',
  },
  {
    name: 'backHand',
    img: './images/vector-art/hand.png',
  },
];
const photos = [
  {
    img: './images/photo-design/00.jpeg',
  },
  {
    img: './images/photo-design/01.jpeg',
  },
  {
    img: './images/photo-design/02.jpeg',
  },
  {
    img: './images/photo-design/03.jpeg',
  },
  {
    img: './images/photo-design/04.jpeg',
  },
  {
    img: './images/photo-design/05.jpeg',
  },
  {
    img: './images/photo-design/06.jpeg',
  },
  {
    img: './images/photo-design/07.jpeg',
  },
  {
    img: './images/photo-design/08.jpeg',
  },
  {
    img: './images/photo-design/09.jpeg',
  },
  {
    img: './images/photo-design/10.jpeg',
  },
  {
    img: './images/photo-design/11.jpeg',
  },
  {
    img: './images/photo-design/12.jpeg',
  },
];
const presPages = [
  {
    img: './images/presentation-design/00.jpg',
  },
  {
    img: './images/presentation-design/01.jpg',
  },
  {
    img: './images/presentation-design/02.jpg',
  },
  {
    img: './images/presentation-design/03.jpg',
  },
];

const date = new Date();
const year = date.getFullYear();

// for copyright date
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.copy').innerHTML = `&#169 ${year} Yoni David`;
});

// fixed nav
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const headHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headHeight) {
    nav.classList.add('fixed-nav');
    navAbout.classList.remove('hide');
  } else {
    nav.classList.remove('fixed-nav');
    navAbout.classList.add('hide');
  }
});

// smooth scroll
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

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
    contrast.innerHTML = `<i class="fas fa-moon fa-lg"></i>`;
  } else {
    contrast.innerHTML = `<i class="fas fa-sun fa-lg"></i>`;
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
  popUpFunc();
});

navAbout.addEventListener('click', () => {
  popUpFunc();
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

// mouse event for dev thumbnails
appCard.forEach((app) => {
  app.addEventListener('mouseover', (e) => {
    app.style.transform = 'scale(1.2)';
    app.style.boxShadow = `rgba(0, 0, 0, 0.35) 0.95px 4.95px 7.6px`;
    app.style.backgroundSize = 'cover';

    descCard.forEach((card) => {
      card.classList.remove('fade-out');
      card.classList.add('fade-in');
    });

    appTitle.forEach((title) => {
      title.classList.remove('fade-out');
      title.classList.add('fade-in');
    });

    // yup thumbnail
    if (e.target === yupThumb) {
      yupThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/yup.gif)`;
      yupThumb.style.borderRadius = '0';
    }
    if (e.target === otherThumb) {
      otherThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/other-side.gif)`;
      otherThumb.style.borderRadius = '0';
    }
    if (e.target === chopsThumb) {
      chopsThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/coding-chops.gif)`;
      chopsThumb.style.borderRadius = '0';
    }
    if (e.target === weaThumb) {
      weaThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/weather.gif)`;
      weaThumb.style.borderRadius = '0';
    }
    if (e.target === techThumb) {
      techThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/tech-blog.gif)`;
      techThumb.style.borderRadius = '0';
    }
    if (e.target === empThumb) {
      empThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/employee-tracker.gif)`;
      empThumb.style.borderRadius = '0';
    }
    if (e.target === portThumb) {
      portThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/portraits/00.png)`;
      portThumb.style.borderRadius = '0';
    }
    if (e.target === handThumb) {
      handThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/vector-art/thumbs-up.png)`;
      handThumb.style.borderRadius = '0';
    }
    if (e.target === photoThumb) {
      photoThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/photo-design/00.jpeg)`;
      photoThumb.style.borderRadius = '0';
    }
    if (e.target === presThumb) {
      presThumb.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.8), rgba(20, 20, 20, 0.8)), url(./images/presentation-design/00.jpg)`;
      presThumb.style.borderRadius = '0';
    }

    app.addEventListener('mouseleave', () => {
      app.style.transform = '';
      app.style.borderRadius = '';
      app.style.boxShadow = '';

      descCard.forEach((card) => {
        card.classList.add('fade-out');
        card.classList.remove('fade-in');
      });

      appTitle.forEach((title) => {
        title.classList.add('fade-out');
        title.classList.remove('fade-in');
      });

      if (e.target === yupThumb) {
        yupThumb.style.backgroundImage = '';
        yupThumb.style.borderRadius = '50%';
      }
      if (e.target === otherThumb) {
        otherThumb.style.backgroundImage = '';
        otherThumb.style.borderRadius = '50%';
      }
      if (e.target === chopsThumb) {
        chopsThumb.style.backgroundImage = '';
        chopsThumb.style.borderRadius = '50%';
      }
      if (e.target === weaThumb) {
        weaThumb.style.backgroundImage = '';
        weaThumb.style.borderRadius = '50%';
      }
      if (e.target === techThumb) {
        techThumb.style.backgroundImage = '';
        techThumb.style.borderRadius = '50%';
      }
      if (e.target === empThumb) {
        empThumb.style.backgroundImage = '';
        empThumb.style.borderRadius = '50%';
      }
      if (e.target === portThumb) {
        portThumb.style.backgroundImage = '';
        portThumb.style.borderRadius = '50%';
      }
      if (e.target === handThumb) {
        handThumb.style.backgroundImage = '';
        handThumb.style.borderRadius = '50%';
      }
      if (e.target === photoThumb) {
        photoThumb.style.backgroundImage = '';
        photoThumb.style.borderRadius = '50%';
      }
      if (e.target === presThumb) {
        presThumb.style.backgroundImage = '';
        presThumb.style.borderRadius = '50%';
      }
    });
  });
});

// portrait slider
portThumb.addEventListener('click', () => {
  const slider = document.querySelector('.portrait-card');
  document.querySelector('.portraits').classList.add('hide');
  slider.classList.remove('hide');

  if (!slider.classList.contains('slide-side-out')) {
    slider.classList.add('slide-side');
  } else {
    slider.classList.remove('slide-side-out');
    slider.classList.add('slide-side');
  }
});

document.querySelector('.portrait-close').addEventListener('click', () => {
  const slider = document.querySelector('.portrait-card');
  slider.classList.add('slide-side-out');
  slider.classList.add('hide');
  document.querySelector('.portraits').classList.remove('hide');
  showNextItem(portraits, currentItem, portrait);
});

slideBack.addEventListener('click', () => {
  console.log('click');
  currentItem--;
  if (currentItem < 0) {
    currentItem = portraits.length - 1;
  }
  showNextItem(portraits, currentItem, portrait);
});

slideNext.addEventListener('click', () => {
  currentItem++;
  if (currentItem > portraits.length - 1) {
    currentItem = 0;
  }
  showNextItem(portraits, currentItem, portrait);
});

// vector-art (previously hands) gallery
handThumb.addEventListener('click', () => {
  const gal = document.querySelector('.hands-card');
  document.querySelector('.hands').classList.add('hide');
  gal.classList.remove('hide');

  if (!gal.classList.contains('slide-side-out')) {
    gal.classList.add('slide-side');
  } else {
    gal.classList.remove('slide-side-out');
    gal.classList.add('slide-side');
  }
});

document.querySelector('.hand-close').addEventListener('click', () => {
  const gal = document.querySelector('.hands-card');
  gal.classList.add('slide-side-out');
  gal.classList.add('hide');
  document.querySelector('.hands').classList.remove('hide');
  showNextItem(hands, currentItem, hand);
});

hSlideBack.addEventListener('click', () => {
  console.log('click');
  currentItem--;
  if (currentItem < 0) {
    currentItem = hands.length - 1;
  }
  showNextItem(hands, currentItem, hand);
});

hSlideNext.addEventListener('click', () => {
  currentItem++;
  if (currentItem > hands.length - 1) {
    currentItem = 0;
  }
  showNextItem(hands, currentItem, hand);
});

// photo slider
photoThumb.addEventListener('click', () => {
  const slider = document.querySelector('.photos-card');
  document.querySelector('.photos').classList.add('hide');
  slider.classList.remove('hide');

  if (!slider.classList.contains('slide-side-out')) {
    slider.classList.add('slide-side');
  } else {
    slider.classList.remove('slide-side-out');
    slider.classList.add('slide-side');
  }
});

document.querySelector('.photo-close').addEventListener('click', () => {
  const slider = document.querySelector('.photos-card');
  slider.classList.add('slide-side-out');
  slider.classList.add('hide');
  document.querySelector('.photos').classList.remove('hide');
  showNextItem(photos, currentItem, photo);
});

phSlideBack.addEventListener('click', () => {
  console.log('click');
  currentItem--;
  if (currentItem < 0) {
    currentItem = photos.length - 1;
  }
  showNextItem(photos, currentItem, photo);
});

phSlideNext.addEventListener('click', () => {
  currentItem++;
  if (currentItem > photos.length - 1) {
    currentItem = 0;
  }
  showNextItem(photos, currentItem, photo);
});

// photo slider
presThumb.addEventListener('click', () => {
  const slider = document.querySelector('.pres-card');
  document.querySelector('.pres').classList.add('hide');
  slider.classList.remove('hide');

  if (!slider.classList.contains('slide-side-out')) {
    slider.classList.add('slide-side');
  } else {
    slider.classList.remove('slide-side-out');
    slider.classList.add('slide-side');
  }
});

document.querySelector('.pres-close').addEventListener('click', () => {
  const slider = document.querySelector('.pres-card');
  slider.classList.add('slide-side-out');
  slider.classList.add('hide');
  document.querySelector('.pres').classList.remove('hide');
  showNextItem(presPages, currentItem, pres);
});

prSlideBack.addEventListener('click', () => {
  console.log('click');
  currentItem--;
  if (currentItem < 0) {
    currentItem = presPages.length - 1;
  }
  showNextItem(presPages, currentItem, pres);
});

prSlideNext.addEventListener('click', () => {
  currentItem++;
  if (currentItem > presPages.length - 1) {
    currentItem = 0;
  }
  showNextItem(presPages, currentItem, pres);
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

// about/contact toggle
function popUpFunc() {
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
}

function showNextItem(x, y, z) {
  const item = x[y];
  z.src = item.img;
  console.log(item);
}
