let dogSelect = document.getElementById("dogSelectId");
let dogImg = document.getElementById("dogImgId");

function fetchWrapper () {
    
}

dogSelect.addEventListener("change", function (event) {
    fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random/1`)
        .then((response) => response.json())
        .then((response) => dogImg.setAttribute("src", response.message[0]))
        .catch((error) => console.log(error));
});