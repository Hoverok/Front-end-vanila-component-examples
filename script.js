"use strict";

/* ACCORDION */
const accordionItemElements = document.querySelectorAll(".item");

const openAccordionItem = function (accordionItemElements) {
  accordionItemElements.forEach((item) => {
    item.addEventListener("click", function (e) {
      const clicked = e.target.closest(".hidden-box");
      if (clicked) return;
      [...item.parentElement.children].forEach((child) => {
        if (child !== item) child.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });
};

openAccordionItem(accordionItemElements);

/* CAROUSEL (slies) */

// 1) Select all elements
const slideElements = document.querySelectorAll(".carousel");
const dotContainer = document.querySelector(".dots");
const dotElements = document.querySelectorAll(".dot");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
let activeSlide = 1;

console.log(slideElements);

// 2) Button navigation
btnRight.addEventListener("click", function (e) {
  activeSlide = slideElements.length < activeSlide + 1 ? 1 : activeSlide + 1;
  console.log(activeSlide);
  switchSlide(activeSlide);
  switchDot(activeSlide);
});

btnLeft.addEventListener("click", function (e) {
  activeSlide = 0 >= activeSlide - 1 ? slideElements.length : activeSlide - 1;
  console.log(activeSlide);
  switchSlide(activeSlide);
  switchDot(activeSlide);
});

// 3) Dot navigation
dotContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".dot") ? e.target : false;
  if (!clicked) return;
  const dotNr = +clicked.dataset.slide;
  switchSlide(dotNr);
  switchDot(dotNr);
  activeSlide = dotNr;
});

// 4) Displaying selected dot/slide
const switchDot = function (slide) {
  const activeDotElement = document.querySelector(
    `.dot[data-slide="${slide}"]`
  );
  dotElements.forEach((dot) => dot.classList.remove("dot--fill"));
  activeDotElement.classList.add("dot--fill");
};

const switchSlide = function (slide) {
  const activeSlideElement = document.querySelector(
    `.carousel[data-slide="${slide}"]`
  );
  slideElements.forEach((slide) => slide.classList.remove("carousel--show"));
  activeSlideElement.classList.add("carousel--show");
};
