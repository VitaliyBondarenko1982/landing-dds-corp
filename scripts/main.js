/* eslint-disable max-len */
/* eslint-disable strict */

// move video
const videoHeader = document.querySelector('#video-promo');
const videoAbout = document.querySelector('#video-about');

function enableAutoplay(element) {
  element.autoplay = true;
  element.loop = true;
  element.volume = 0;
  element.play();
}

enableAutoplay(videoHeader);
enableAutoplay(videoAbout);

// icons in products slider
if (window.innerWidth <= 767) {
  const dots = document.querySelectorAll('.products__dots li');

  dots[2].insertAdjacentHTML('afterbegin', `
    <svg width="40" height="34" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11.56L18.9639 23.1298C19.3506 23.3252 19.8087 23.44 20.3024 23.44C20.796 23.44 21.2541 23.3252 21.6408 23.1298H21.6448L39.28 11.56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 17.5C20.8 17.8643 20.5043 18.16 20.14 18.16C19.7757 18.16 19.48 17.8643 19.48 17.5C19.48 17.1356 19.7757 16.84 20.14 16.84C20.5043 16.84 20.8 17.1356 20.8 17.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3 34H2.98C1.88572 34 1 33.1142 1 32.02V8.25997C1 7.16569 1.88572 6.27997 2.98 6.27997H37.3C38.3943 6.27997 39.28 7.16569 39.28 8.25997V32.02C39.28 33.1142 38.3943 34 37.3 34Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4 6.28H12.88V2.98C12.88 1.88572 13.7657 1 14.86 1H25.42C26.5143 1 27.4 1.88572 27.4 2.98V6.28Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);

  dots[1].insertAdjacentHTML('afterbegin', `
    <svg width="24" height="36" viewBox="0 0 25 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5064 32.1151V32.1151C21.4769 30.7622 19.8645 29.9657 18.1508 29.9657H6.77968C5.06593 29.9657 3.45235 30.7622 2.4229 32.1151C1.98842 32.6884 1.67343 33.3413 1.49723 34.0353L1 36H23.9305L23.4332 34.0353C23.2558 33.3413 22.9408 32.6884 22.5064 32.1151Z" stroke="#3C71E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.44769 5.22461L11.8614 10.6555"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.26972 21.1838L7.11426 29.9649H17.8155L15.6601 21.1838"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3442 20.0087C19.3442 20.0087 16.2643 21.5173 12.465 21.5173C8.66462 21.5173 5.58591 20.0087 5.58591 20.0087C5.58591 20.0087 8.66462 18.5001 12.465 18.5001C16.2643 18.5001 19.3442 20.0087 19.3442 20.0087Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7855 4.04251C14.8398 3.84096 14.8784 3.63338 14.8784 3.41373C14.8784 2.08135 13.7983 1 12.4647 1C11.1323 1 10.051 2.08135 10.051 3.41373C10.051 3.63338 10.0896 3.84096 10.1439 4.04251C8.30826 6.31866 7.03381 10.7092 7.03381 12.9323C7.03381 16.0074 9.46565 18.4996 12.4647 18.4996C15.4638 18.4996 17.8956 16.0074 17.8956 12.9323C17.8956 10.7092 16.6212 6.31866 14.7855 4.04251Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);

  dots[0].insertAdjacentHTML('afterbegin', `
    <svg width="36" height="36" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1 33.2H5.9C4.7394 33.2 3.8 32.2606 3.8 31.1V5.89999C3.8 4.73939 4.7394 3.79999 5.9 3.79999H31.1C32.2606 3.79999 33.2 4.73939 33.2 5.89999V31.1C33.2 32.2606 32.2606 33.2 31.1 33.2Z" stroke="#3C71E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 29H29V8H8V29Z" stroke="#3C71E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 3.8V1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 3.8V1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.4 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.8 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 36V33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 36V33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.4 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.8 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.2 8H36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.2 29H36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 12.2H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 16.4H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 20.6H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 24.8H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 8H3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 29H3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 12.2H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 16.4H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 20.6H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 24.8H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);
}
