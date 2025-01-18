"use strict";

/* Pagination */

// Generating markup

const paginationElement = document.querySelector(".pagination");
// mock data recieved from an api
const fillApiArr = function () {
  const newArr = [];
  const nrOfPages = Math.trunc(Math.random() * 10) + 1;
  for (let i = 2; i <= nrOfPages; i++) {
    newArr.push(i);
  }
  return newArr;
};
const arrOfPages = fillApiArr();

const markup = `
<button class="btn btn--left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon--btn"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
            <a href="#" class="page--link page--link--current" data-page="1">1</a>
      ${arrOfPages
        .map((page) => {
          return ` <a href="#" class="page--link" data-page="${page}">${page}</a>`;
        })
        .join("")}
      <button class="btn btn--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon--btn"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
`;

paginationElement.insertAdjacentHTML("beforeend", markup);
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const linkElements = document.querySelectorAll(".page--link");
let selectedPage = 1;

// Buttons
btnLeft.addEventListener("click", function (e) {
  if (selectedPage <= 1) return;
  selectedPage = selectedPage - 1;
  changePage(selectedPage);

  console.log(selectedPage);
});

btnRight.addEventListener("click", function (e) {
  if (selectedPage > arrOfPages.length) return;
  selectedPage = selectedPage + 1;
  changePage(selectedPage);

  console.log(selectedPage);
});

// Links
paginationElement.addEventListener("click", function (e) {
  const clicked = e.target.closest(".page--link") ? e.target : false;
  if (!clicked) return;
  selectedPage = +clicked.dataset.page;
  changePage(selectedPage);

  console.log(selectedPage);
});

// Changing the page
const changePage = function (page) {
  linkElements.forEach((link) => link.classList.remove("page--link--current"));
  const selectedPageElement = document.querySelector(
    `.page--link[data-page="${page}"]`
  );
  selectedPageElement.classList.add("page--link--current");
  console.log(selectedPageElement);
};
