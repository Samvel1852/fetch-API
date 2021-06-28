let title = document.getElementById("titleArea");
let description = document.getElementById("descriptionArea");
let director = document.getElementById("directorArea");
let producer = document.getElementById("producerArea");
let releaseDate = document.getElementById("releaseDateArea");
let areas = document.querySelectorAll(".areaClass");
let searchInput = document.getElementById("searchInputId");
let searchBtn = document.getElementById("searchBtnId")
// console.log(areas);
console.log(searchInput.value);

searchBtn.addEventListener("click",function () {
    // fetch(`https://ghibliapi.herokuapp.com/films/${searchInput.value}`)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         title.innerText = response.title;
    //         description.innerText = response.description;
    //         director.innerText = response.director;
    //         producer.innerText = response.producer;
    //         releaseDate.innerText = response.release_date;
    //     })
    fetch(`https://ghibliapi.herokuapp.com/films/`)
        .then(response => response.json())
        .then(response => {
            return response.filter((film, index) => film.title.toLowerCase() === searchInput.value.toLowerCase())
        })
        .then(response => {
            console.log(response);
            title.innerText = response[0].title;
            description.innerText = response[0].description;
            director.innerText = response[0].director;
            producer.innerText = response[0].producer;
            releaseDate.innerText = response[0].release_date;
        })
})

// getFilmDetails();