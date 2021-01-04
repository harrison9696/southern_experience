// Generic slideshow function
function makeSlideshow(key) {
  // Naming the variables
  const slides = document.querySelectorAll(`.${key}__slide`);
  const next = document.querySelector(`.${key}__btn--next`);
  const prev = document.querySelector(`.${key}__btn--prev`);
  const auto = true;
  const intervalTime = 5000;
  let slideInterval;

  // Show the next slide
  const nextSlide = () => {
      // get --current slide
      const current = document.querySelector(`.${key}__slide--current`);
      // remove --current class from slide
      current.classList.remove(`${key}__slide--current`);
      // check for next slide
      if(current.nextElementSibling && current.nextElementSibling.classList.contains(`${key}__slide`)) {
          // add --current to next sibling
          current.nextElementSibling.classList.add(`${key}__slide--current`);
      } else {
          // add --current to start
          slides[0].classList.add(`${key}__slide--current`);
      }

      setTimeout(() => current.classList.remove(`${key}__slide--current`));
  }

  // Show the previous slide
  const prevSlide = () => {
      // get --current slide
      const current = document.querySelector(`.${key}__slide--current`);
      // remove --current class from slide
      current.classList.remove(`${key}__slide--current`);
      // check for previous slide
      if(current.previousElementSibling) {
          // add --current to previous sibling
          current.previousElementSibling.classList.add(`${key}__slide--current`);
      } else {
          // add --current to last
          slides[slides.length -1].classList.add(`${key}__slide--current`);
      }
      
      setTimeout(() => current.classList.remove(`${key}__slide--current`));
  }

  // Button Events
  next.addEventListener('click', e => {
      nextSlide();
      if(auto) {
          // reset the interval
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, intervalTime);
      }
  });

  prev.addEventListener('click', e => {
      prevSlide();
      if(auto) {
          // reset the interval
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, intervalTime);
      }
  });

  // Auto slide
  if(auto) {
      // run next slide at interval time
      slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Mouse enter/leave Events
  slides.forEach(slide => slide.addEventListener('mouseenter', e => {
      clearInterval(slideInterval);
  }));

  slides.forEach(slide => slide.addEventListener('mouseleave', e => {
      slideInterval = setInterval(nextSlide, intervalTime);
  }));
}

makeSlideshow('home');
makeSlideshow('about');
makeSlideshow('location');