"use strict";

const information = document.querySelector(".mainBtnForbuy");
const bookmark = document.querySelector(".bookmarkButton");
const bookmarkText = bookmark.querySelector(".bookmark-text");
const buyPage = document.querySelector(".buy-page");
const products = document.querySelectorAll(".product-container");
const prices = document.querySelectorAll(".buy-button-price");

information.addEventListener("click", function (e) {
  if (e.target.classList.contains("informationBtn")) {
    buyPage.classList.remove("displayNone");
    e.stopPropagation();
  }
});

let mark = 0;
bookmark.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("bookMarked");
  if (mark == 0) {
    bookmarkText.textContent = "Bookmarked";
    mark = 1;
  } else {
    bookmarkText.textContent = "Bookmark";
    mark = 0;
  }
});

prices.forEach((price) => {
  price.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

window.onclick = function (e) {
  if (!buyPage.contains(e.target)) {
    buyPage.classList.add("displayNone");
  }
};

products.forEach((product) => {
  product.addEventListener("click", function (e) {
    if (e.target.tagName !== "INPUT") {
      const innerProduct = product.querySelector(".product");
      product.classList.toggle("productActive");
      innerProduct.classList.toggle("productBorder");

      const productContainer = e.target.closest(".product-container");

      if (productContainer) {
        const buyBtnContainer = productContainer.querySelector(
          ".buy-button-container"
        );
        buyBtnContainer.classList.toggle("displayNone");
      }
    }
  });
});

// Add an event listener to the input field to stop click event propagation
prices.forEach((price) => {
  price.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
