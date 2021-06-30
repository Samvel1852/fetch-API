"use strict";

let searchBtn = document.getElementById("bookSearchBtnId");
let searchInp = document.getElementById("bookSearchInputId");
let detailsSection = document.getElementById("bookDetailsSectionId");
let prevPage = document.getAnimations("prevBtnId");
let nextPage = document.getElementById("nextBtnId");

function dataFromUrl() {
  let searchVal = window.location.href.split("?")[1];
  if (searchVal) {
    fetch(`http://openlibrary.org/search.json?${searchVal}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.docs);
        let onePageArr = [];
        let booksArray = [];
        response.docs.forEach((book, item) => {
          if (onePageArr.length === 5) {
            booksArray.push(onePageArr);
            onePageArr = [];
          } else {
            onePageArr.push(book);
          }
        });
        console.log(booksArray);
        let page = 0;
        if (!window.location.href.includes("q=")) {
          detailsSection.innerText = "";
        } else {
          detailsSection.innerText = `The book author is ${booksArray[page][0].author_name} \n The first publish year is ${booksArray[page][0].first_publish_year}\n
        The book author is ${booksArray[page][1].author_name} \n The first publish year is ${booksArray[page][1].first_publish_year}\n
        The book author is ${booksArray[page][2].author_name} \n The first publish year is ${booksArray[page][2].first_publish_year}\n
        The book author is ${booksArray[page][3].author_name} \n The first publish year is ${booksArray[page][3].first_publish_year}\n
        The book author is ${booksArray[page][4].author_name} \n The first publish year is ${booksArray[page][4].first_publish_year}\n`;
        }
      });
    nextPage.addEventListener("click", function () {
      page += 1;
    });
  }
}

dataFromUrl();

searchBtn.addEventListener("click", function (event) {
  let searchValue = searchInp.value.split(" ").join("+");
  // alert(searchValue);
  fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
    .then((response) => response.json())
    .then((response) => {
      detailsSection.innerText = response.docs;
    });
});
