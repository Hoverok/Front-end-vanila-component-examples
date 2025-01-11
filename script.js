"use strict";
const accordionItemElements = document.querySelectorAll(".item");
console.log(accordionItemElements);

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
