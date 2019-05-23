const patchImage = (movie) => {
  if (movie.Poster === 'N/A') {
    const patches = {
      'tt0365467': 'img/patches/matrix1999.jpg',
      'tt0274085': 'img/patches/matrix20001.jpg',
      'tt0224086': 'img/patches/matrix20002.jpg',
      'tt0382814': 'img/patches/lordrings2003.jpg',
      'tt0843849': 'img/patches/tokyodrift.jpg',
      'tt0781022': 'img/patches/editing2002.jpg',
      'tt0781023': 'img/patches/visualeffects2002.jpg',
      'tt5267212': 'img/patches/dom2009.jpg',
      'tt2327114': 'img/patches/makinghungergames2012.jpg',
      'tt2858204': 'img/patches/katnissyrue.jpg',
      'tt2427488': 'img/patches/hungergames2012.jpg',
      'tt4026144': 'img/patches/mockingjay.jpg',
      'tt3413318': 'img/patches/secondquarter2011.jpg',

    }
    return patches[movie.imdbID] || 'http://ximg.es/160x220/b8bdb8/fff.jpg&text=N/A'
  } else {
    return movie.Poster;
  }
}

window.patchImage = patchImage







// const movies = {
//     harryPotter: [
//         'tt1201607',  // Harry Potter and the Deathly Hallows: Part 2
//         'tt0241527' // Harry Potter and the Sorcerer's Stone
//     ],
//     ironMan: [
//         'tt0371746' // Iron Man
//     ]
// }

// const getMovie = (id) => {
//     return fetch(`https://www.omdbapi.com/?apikey=e9cb41b7&i=${id}`).then(response => response.json());
// };

// window.getMovie = getMovie;

// const filterByGenre = (data, genre) => {
//     const promises = data.map(element => getMovie(element));

//     return Promise.all(promises).then(movies => {
//         return movies.filter(element => element.Genre.split(',').filter(genre => genre.trim().toLowerCase().includes(genre)));
//     });
// }

// window.filterByGenre = filterByGenre;





