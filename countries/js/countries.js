let allCountriesBtn = document.getElementById("allCountriesBtnId");
let countriesListSection = document.getElementById("countriesListId");
let countrySearchBtn = document.getElementById("countrySearchBtnId");
let countrySearchInput = document.getElementById("countrySearchId");

allCountriesBtn.addEventListener("click", function(){
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            response.forEach((country) => {
                let row = document.createElement("p");
                row.innerText = country.name;
                countriesListSection.appendChild(row);
                let flag = document.createElement("img");
                flag.src = country.flag;
                flag.width = 200;
                flag.height = 150;
                countriesListSection.appendChild(flag);
            });
        });
});

countrySearchBtn.addEventListener("click", function () {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(response => {
            response.filter((country) => {
                if (country.name === countrySearchInput.value) {
                    let row = document.createElement("p");
                    row.innerText = country.name;
                    countriesListSection.appendChild(row);
                    let flag = document.createElement("img");
                    flag.src = country.flag;
                    flag.width = 200;
                    flag.height = 150;
                    countriesListSection.appendChild(flag);
                }
            })
        })
});