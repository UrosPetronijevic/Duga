"use strict";

const accordionItem = document.querySelector(".accordion__item");

const addOpenClass = function () {
  accordionItem.classList.add("open");
};

const removeOpenClass = function () {
  accordionItem.classList.remove("open");
};

document
  .querySelector(".accordion__icon")
  .addEventListener("click", addOpenClass);
//////////
