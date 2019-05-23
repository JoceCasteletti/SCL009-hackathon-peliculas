const url = 'http://www.omdbapi.com/?apikey=733596b5&type=movie&s=';
const urlId = 'http://www.omdbapi.com/?apikey=733596b5&type=movie&plot=short&i='

const movieSearch = document.getElementById("moviesList");
const buttonConsult = document.getElementById("consultar");
const movieSearchId = document.getElementById("modalList");
const starWarsCarouselImg = document.getElementById("Star Wars");
const harryPotterCarouselImg = document.getElementById("Harry Potter");
const transformersCarouselImg = document.getElementById("Transformers");
const buttonGenre = document.getElementById("consultarGenre");
let genreSelect;
let cardsMovie = '';
let movies = '';
let moviesModal;
let cardsModal = '';
let titleMovie;
let moviesForGenre;

const arrayMovies = [
  "Harry Potter",
  "Transformers",
  "Star Wars",
  "Fast and the Furious",
  "Matrix",
  "Hunger Games",
  "The Lord of The Rings",
  "Star Trek"
];

buttonConsult.addEventListener("click", () => {
  titleMovie = document.getElementById("movies").value;
  loadmovies(titleMovie);
});

//evento para capturar la opcion del select
buttonConsult.addEventListener("click", () => {
  titleMovie = document.getElementById("movies").value;
  loadmovies(titleMovie);
});

starWarsCarouselImg.addEventListener("click", () => {
  titleMovie = "Star Wars";
  loadmovies(titleMovie);
});

harryPotterCarouselImg.addEventListener("click", () => {
  titleMovie = "Harry Potter";
  loadmovies(titleMovie);
});

transformersCarouselImg.addEventListener("click", () => {
  titleMovie = "Transformers";
  loadmovies(titleMovie);
});

const loadmovies = (titleMovie) => {
  cardsMovie = '';

  //consultar a la url omdb
  fetch(url + titleMovie)
    .then(response => response.json())
    .then(response => {
      if (titleMovie !== 'Sagas') {
        movies = response.Search;


        movies.forEach(el => {
          //imprimir las cartas de peliculas
          cardsMovie += `
            <div class="card col-12 col-sm-4 col-md-3">
              <a data-toggle="modal" data-target="#exampleModal${el.imdbID}">
                <div class="card-body"> 
                  <div class = "img-movie">
                    <img src="${window.patchImage(el)}" class="img-movie-card" alt="">
                    <p class="card-text">${el.Title} ${el.Year}</p>
                  </div>
                </div>
              </a>
            </div>`;
          //consultar a la url omdb por ID tomando el id de movies
          fetch(urlId + el.imdbID)
            .then(response => response.json())
            .then(response => {
              moviesModal = response;
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
                        <img src="${window.patchImage(el)}" class="img-movie-poster">
                        </div>
                        
                        <div class= "modal-img">
                        
                        <p>Sinopsis:${moviesModal.Plot} </p>
                        <p>Genero: ${moviesModal.Genre}.</p>
                        <p>Actores: <img src="./img/actors.png" alt="">${moviesModal.Actors}</p>
                        <p>Director: ${moviesModal.Director}</p>
                        <p>Premios: ${moviesModal.Awards}</p>
                        <p>Ratings: ${moviesModal.Ratings[0].Value}</p>
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
    }


buttonGenre.addEventListener("click", () => {
  cardsMovie = '';
  genreSelect = document.getElementById("genre").value;

  arrayMovies.forEach(element => {
    fetch(url + element)
      .then(response => response.json())
      .then(response => {
        movies = response.Search;
        movies.forEach(el => {
          fetch(urlId + el.imdbID)
            .then(response => response.json())
            .then(response => {
              moviesForGenre = response;

              if (moviesForGenre.Genre.includes(genreSelect)) {

                cardsMovie += `
                  <div class="card col-12 col-sm-4 col-md-3">
                    <a data-toggle="modal" data-target="#exampleModal${el.imdbID}">
                    <div class="card-body"> 
                      <div class = "img-movie">
                      <img src=${window.patchImage(el)} class="img-movie-card" alt="">
                      <p class="card-text">${el.Title} ${el.Year}</p>
                      </div>
                    </div>
                    </a>
                  </div>`

                cardsModal += `
  
                    <div class="modal fade" id="exampleModal${moviesForGenre.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md" role="document">
                    
                        <div class="modal-content">
                        <div class="x-close">                     

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                          </div>
                    
                    <div class="modal-body">
                      <div class = "title-modal">
                      <h5>${moviesForGenre.Title} ${moviesForGenre.Year}</h5>  
                      </div>           
                        <div class= "modal-img">
                        <img src =${moviesForGenre.Poster} class="img-movie-poster">
                    </div>
                    
                    <div class= "modal-img">
                      
                      <p>Sinopsis:${moviesForGenre.Plot} </p>
                      <p>Genero: ${moviesForGenre.Genre}.</p>
                      <p>Actores: <img src="./img/actors.png" alt="">${moviesForGenre.Actors}</p>
                      <p>Director: ${moviesForGenre.Director}</p>
                      <p>Premios: ${moviesForGenre.Awards}</p>
                      <p>Ratings: ${moviesForGenre.Ratings[0].Value}</p>
                      <p>Website:<a href= "${moviesForGenre.Website}">${moviesForGenre.Website}</a> </p>
                        
                       </div>
                       </div>
                                
                        </div>
                      </div>
                    </div>`
                //Jquery del modal
                $('#exampleModal' + moviesForGenre.imdbID).on('shown.bs.modal', function () {
                  $('#myInput').trigger('focus')
                });
                //imprimiendo el modal
                movieSearchId.innerHTML = cardsModal;

              }
              movieSearch.innerHTML = cardsMovie;
            })
        });

      });
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