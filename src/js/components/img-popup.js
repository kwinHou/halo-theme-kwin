/**
 * Set up image popup
 *
 * See: https://github.com/dimsemenov/Magnific-Popup
 */

export function imgPopup() {
  preImg();
  
  if ($('.popup').length <= 0) {
    return;
  }

  $('.popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    showCloseBtn: false,
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out'
    }
  });
}

function preImg() {
  const imgSelector = '.content p img';
  const images = document.querySelectorAll(imgSelector);
  images.forEach((img) => {
    let anchorElement = document.createElement('a')
    let divElement = document.createElement('div')
    anchorElement.setAttribute('href', img.getAttribute('src'));
    anchorElement.classList.add('popup');
    anchorElement.classList.add('img-link')
    setWidth(img, anchorElement)

    img.style["border-radius"] = "0.625rem";
    img.parentNode.insertBefore(divElement, img);
    divElement.appendChild(anchorElement);
    anchorElement.appendChild(img);
  })
}

const setWidth = (img, anchorElement) => {
  if (img.getAttribute('width'))
    anchorElement.style.width = img.getAttribute('width')
  if (img.getAttribute('height'))
    anchorElement.style.height = img.getAttribute('height')
  img.removeAttribute('width')
  img.removeAttribute('height')
}