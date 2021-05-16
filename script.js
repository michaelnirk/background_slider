const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

leftBtn.addEventListener('click', () => {
  if (activeSlide > 0) {
    activeSlide--;
    setBgToBody();
    setActiveSlide();
    evaluateArrows();
  }
});

rightBtn.addEventListener('click', () => {
  if (activeSlide < slides.length - 1) {
    activeSlide++;
    setBgToBody();
    setActiveSlide();
    evaluateArrows();
  }
});

setBgToBody();
setActiveSlide();
evaluateArrows();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  for(const [index, slide] of slides.entries()) {
    if (index === activeSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  }
}

function evaluateArrows() {
  if (activeSlide === 0) {
    leftBtn.classList.add('inactive');
  } else if (activeSlide === slides.length - 1) {
    rightBtn.classList.add('inactive');
  } else {
    leftBtn.classList.remove('inactive')
    rightBtn.classList.remove('inactive')
  }
}
