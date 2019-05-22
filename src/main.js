const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_NOT_FOUND = 404;
const url = 'http://www.omdbapi.com/?apikey=733596b5&type=movie&s=';
const urlId = 'http://www.omdbapi.com/?apikey=733596b5&type=movie&plot=short&i='

const movieSearch = document.getElementById("moviesList");
const buttonConsult = document.getElementById("consultar");
const movieSearchId = document.getElementById("modalList");
let cardsMovie = '';
let movies = '';
let moviesModal;
let cardsModal = '';
let titleMovie;
//evento para capturar la opcion del select
buttonConsult.addEventListener("click", () => {
    cardsMovie = '';
    titleMovie = document.getElementById("movies").value;
    //consultar a la url omdb
    fetch(url + titleMovie)
        .then(response => response.json())
        .then(response => {
            if (titleMovie !== 'Sagas') {
                movies = response.Search;
                console.log(movies);

                movies.forEach(el => {
                    //imprimir las cartas de peliculas
                    cardsMovie += `
                    <div class="card col-12 col-sm-4 col-md-3">
                    <a data-toggle="modal" data-target="#exampleModal${el.imdbID}">
                    <div class="card-body"> 
                    <div class = "img-movie">`

                    if (el.Poster === "N/A") {
                        cardsMovie += `
                    <img src="http://ximg.es/160x220/b8bdb8/fff.jpg&text=N/A" class="img-movie-card" alt="">`
                    }
                    else {
                        cardsMovie += `
                    <img src=${el.Poster} class="img-movie-card" alt="">`
                    }
                    cardsMovie += ` 
                    <p class="card-text">${el.Title} ${el.Year}</p>
                        </div>
                    </div>
                    </a>
                    </div>`
            
    //consultar a la url omdb por ID tomando el id de movies
    fetch(urlId + el.imdbID)
        .then(response => response.json())
        .then(response => {
            moviesModal = response;
            console.log(moviesModal);
                    cardsModal += `  
                    <div class="modal fade" id="exampleModal${moviesModal.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md" role="document">
                    
                    <div class="modal-content">
                    <div class="x-close">                     

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                        </div>
                        <div class="modal-body">
                        <div class = "title-modal">
                        <h5>${moviesModal.Title} ${moviesModal.Year}</h5>  
                        </div>           
                        <div class= "modal-img">
                        <img src =${moviesModal.Poster} class="img-movie-poster">
                        </div>
                        
                    <div>

                        <p>Sinopsis:${moviesModal.Plot} </p>
                        <p>Genero: ${moviesModal.Genre}.</p>
                        <p>Actores: ${moviesModal.Actors}</p>
                        <p>Director: ${moviesModal.Director}</p>
                        <p>Premios: ${moviesModal.Awards}</p>
                        <p>Website:<a href= "${moviesModal.Website}">${moviesModal.Website}</a> </p>
                        
                        </div>
                        </div>
                                    
                        </div>
                        </div>
                  </div>`
                    //Jquery del modal
                    $('#exampleModal' + moviesModal.imdbID).on('shown.bs.modal', function () {
                        $('#myInput').trigger('focus')
                    });
                    //imprimiendo el modal
                    movieSearchId.innerHTML = cardsModal;
                });
            });
            //impriendo las tarjetas
            movieSearch.innerHTML = cardsMovie;
            }
            });
            });


// const movieList = document.getElementById('movie_list');

// const showData = (data) => {
//     let html = '';

//     data.forEach(element => {
//         html += `<div>${element.Title}</div>`;
//     });

//     movieList.innerHTML = html;
// };

// filterByGenre(movies.harryPotter, 'adventure')
//     .then(data => showData(data));