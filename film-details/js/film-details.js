let title = document.getElementById("titleArea");
let description = document.getElementById("descriptionArea");
let director = document.getElementById("directorArea");
let producer = document.getElementById("producerArea");
let releaseDate = document.getElementById("releaseDateArea");
let areas = document.querySelectorAll(".areaClass");
console.log(areas);

function getFilmDetails () {
    fetch(`https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`)
        .then((response) => response.json())
        .then((response) => {
            title.innerText = response.title;
            description.innerText = response.description;
            director.innerText = response.director;
            producer.innerText = response.producer;
            releaseDate.innerText = response.release_date;
        })
}

getFilmDetails();