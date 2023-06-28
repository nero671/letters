var swiper = new Swiper(".detail-good__slider_small", {

  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".details-good__slider", {

  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// const maskPhone = (selector, masked) => {
//   const elems = document.querySelectorAll(selector);

//   function mask(event) {
//     const { keyCode } = event;
//     const template = masked;
//     const def = template.replace(/\D/g, '');
//     const val = this.value.replace(/\D/g, '');
//     let i = 0;
//     // eslint-disable-next-line
//     let newValue = template.replace(/[_\d]/g, (a) => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
//     i = newValue.indexOf('_');
//     if (i !== -1) {
//       newValue = newValue.slice(0, i);
//     }
//     let reg = template.substr(0, this.value.length).replace(/_+/g,
//       (a) => `\\d{1,${a.length}}`).replace(/[+()]/g, '\\$&');
//     reg = new RegExp(`^${reg}$`);

//     // eslint-disable-next-line
//     if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
//       this.value = newValue;
//     }
//     if (event.type === 'blur' && this.value.length < 5) {
//       this.value = '';
//     }
//   }

//   for (const elem of elems) {
//     elem.addEventListener('input', mask);
//     elem.addEventListener('focus', mask);
//     elem.addEventListener('blur', mask);
//   }

// };

// maskPhone('.a', '+375 (__) ___-__-__');
// maskPhone('.tel.active', '+_____________');
$('.tel').mask("+375 (99) 999 99 99");
$('.a').mask('(000) 000 0000');