let allCountriesBtn = document.getElementById("allCountriesBtnId");
let countriesListSection = document.getElementById("countriesListId");
let countrySearchBtn = document.getElementById("countrySearchBtnId");
let countrySearchInput = document.getElementById("countrySearchId");
let countryAboutArea = document.getElementById("aboutArticleId");

allCountriesBtn.addEventListener("click", function () {
  fetch(`https://restcountries.eu/rest/v2/all`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      countriesListSection.textContent = "";
      response.forEach((country) => {
        let row = document.createElement("p");
        row.innerText = country.name;
        countriesListSection.appendChild(row);
        row.setAttribute("class", "countryName");
        let flag = document.createElement("img");
        flag.src = country.flag;
        flag.width = 200;
        flag.height = 150;
        flag.setAttribute("class", "countryFlag");
        countriesListSection.appendChild(flag);
        row.addEventListener("click", function () {
          fetch(
            `https://restcountries.eu/rest/v2/name/${row.innerText}?fullText=true`
          )
            .then((response) => response.json())
            .then((response) => {
              countryAboutArea.style.display = "block";
              console.log(response[0]);
              for (let key in response[0]) {
                countryAboutArea.value += `\n ${key}: --- ${JSON.stringify(
                  response[0][key]
                )}`;
              }
            });
        });
        flag.addEventListener("click", function () {
          fetch(
            `https://restcountries.eu/rest/v2/name/${row.innerText}?fullText=true`
          )
            .then((response) => response.json())
            .then((response) => {
              countryAboutArea.style.display = "block";
              console.log(response[0]);
              for (let key in response[0]) {
                countryAboutArea.value += `\n ${key}: --- ${JSON.stringify(
                  response[0][key]
                )}`;
              }
            });
        });
      });
    });
});

countrySearchBtn.addEventListener("click", function () {
  fetch(`https://restcountries.eu/rest/v2/all`)
    .then((response) => response.json())
    .then((response) => {
      response.filter((country) => {
        if (
          country.name.toLowerCase() === countrySearchInput.value.toLowerCase()
        ) {
          countriesListSection.textContent = "";
          let row = document.createElement("p");
          row.setAttribute("class", "countryName");
          row.innerText = country.name;
          countriesListSection.appendChild(row);
          let flag = document.createElement("img");
          flag.src = country.flag;
          flag.width = 200;
          flag.height = 150;
          flag.setAttribute("class", "countryFlag");
          countriesListSection.appendChild(flag);
          row.addEventListener("click", function () {
            fetch(
              `https://restcountries.eu/rest/v2/name/${row.innerText}?fullText=true`
            )
              .then((response) => response.json())
              .then((response) => {
                countryAboutArea.style.display = "block";
                console.log(response[0]);
                for (let key in response[0]) {
                  countryAboutArea.value += `\n ${key}: --- ${JSON.stringify(
                    response[0][key]
                  )}`;
                }
              });
          });
          flag.addEventListener("click", function () {
            fetch(
              `https://restcountries.eu/rest/v2/name/${row.innerText}?fullText=true`
            )
              .then((response) => response.json())
              .then((response) => {
                countryAboutArea.style.display = "block";
                console.log(response[0]);
                for (let key in response[0]) {
                  countryAboutArea.value += `\n ${key}: --- ${JSON.stringify(
                    response[0][key]
                  )}`;
                }
              });
          });
        }
      });
    });
});
