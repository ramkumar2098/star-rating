const stars = document.querySelectorAll('.star');

let clicked = false;
let starsCount;

const fillColor = '#ffc107';
const unfillColor = '#ececec';

function color(index, color, _color, display) {
  if (!clicked) {
    for (let i = 0; i <= index; i++) {
      stars[i].style.fill = color;
    }
  }

  if (index >= starsCount) {
    for (let i = starsCount; i <= index; i++) {
      stars[i].style.fill = color;
    }
  }

  if (index <= starsCount) {
    for (let i = index + 1; i < starsCount; i++) {
      stars[i].style.fill = _color;
    }
  }

  starsCount && (reset.style.display = display);
}

function setStars(index) {
  clicked = true;
  starsCount = index + 1;

  color(index, fillColor);
  reset.style.display = 'block';
}

stars.forEach((star, index) =>
  ['mouseenter', 'mouseleave', 'click'].forEach(event => {
    star.addEventListener(event, () => {
      event === 'mouseenter'
        ? color(index, fillColor, unfillColor, 'block')
        : event === 'mouseleave'
        ? color(index, unfillColor, fillColor, 'none')
        : setStars(index);
    });
  })
);

const reset = document.querySelector('.reset');

function unsetStars() {
  for (let i = 0; i < starsCount; i++) {
    stars[i].style.fill = unfillColor;
  }

  starsCount = 0;
  reset.style.display = 'none';
}

['mouseenter', 'mouseleave', 'click'].forEach(event => {
  reset.addEventListener(event, () => {
    event === 'mouseenter'
      ? (reset.style.display = 'block')
      : event === 'mouseleave'
      ? (reset.style.display = 'none')
      : unsetStars();
  });
});
