'use strict'

let searchBtn = document.getElementById("bookSearchBtnId");
let searchInp = document.getElementById("bookSearchInputId");
let detailsSection = document.getElementById("bookDetailsSectionId")

function dataFromUrl () {
    let searchVal = window.location.href.split("?")[1];
    if (searchVal) {
        fetch(`http://openlibrary.org/search.json?${searchVal}`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response.docs[response.docs.length-1])
            detailsSection.innerText = `The book author is ${response.docs[response.docs.length-1].author_name} \n The first publish year is ${response.docs[response.docs.length-1].first_publish_year}`;
        })
    }
}

dataFromUrl();

searchBtn.addEventListener("click", function(event){
    let searchValue = searchInp.value.split(" ").join("+");
    // alert(searchValue);
    fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
        .then((response) => response.json())
        .then((response) => {
            detailsSection.innerText = response.docs;
        })
})