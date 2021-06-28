let dogSelect = document.getElementById("dogSelectId");
let dogImg = document.getElementById("dogImgId");
let dogNotFound = document.getElementById("errSpanId");
let loader = document.getElementById("loaderId");

function dogNamesGetter() {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.message);
      for (let dog in response.message) {
        if (response.message[dog].length === 0) {
          let elm = document.createElement("option");
          elm.setAttribute("value", dog);
          elm.innerText = dog;
          dogSelect.appendChild(elm);
        } else {
          let elm = document.createElement("optgroup");
          elm.setAttribute("label", dog);
          elm.innerText = dog;

          response.message[dog].forEach((breed, index) => {
            let dogBr = document.createElement("option");
            let subBrValue = `${dog}/${breed}`;
            dogBr.setAttribute("value", subBrValue);
            dogBr.innerText = breed;
            elm.appendChild(dogBr);
          });
          dogSelect.appendChild(elm);
        }
      }
    });
}

dogNamesGetter();

dogSelect.addEventListener("change", function (event) {
  loader.style.display = "block";
  fetch(`https://dog.ceo/api/breed/${event.target.value}/images`)
    .then((response) => {
      loader.style.display = "none";
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Img not found");
      }
    })
    .then((response) => {
      dogImg.setAttribute("src", response.message[0]);
      dogImg.style.display = "block";
      dogNotFound.style.display = "none";
    })
    .catch((error) => {
      dogImg.style.display = "none";
      dogNotFound.style.display = "block";
    });
});
