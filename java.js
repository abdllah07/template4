// $(function () {
//   $("#other-link").on("click", function () {
//     $(".mega-menu").slideToggle("slow").css("display", "flex");
//   });
// });

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".box span");
let wroks = document.querySelector(".works");
let divs = document.querySelectorAll(".works-texts div");
let imgs = document.querySelectorAll(".works-img img ");
let main = document.querySelectorAll(".main-title  span");

let featur = document.querySelector(".features");
let featur_box = document.querySelectorAll(".features-secotin div ");

window.onscroll = function () {
  // start our skills
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // end our skills

  // start features
  if (window.scrollY >= featur.offsetTop - 100) {
    featur_box.forEach((div) => {
      div.style.left = div.dataset.left;
    });
  }
  // end features

  // start works
  if (window.scrollY >= wroks.offsetTop - 50) {
    imgs.forEach((img) => {
      img.style.opacity = img.dataset.opacity;
    });
    divs.forEach((div) => {
      div.style.opacity = div.dataset.opacity;
    });
  }
  // end works
};
