const movies = {
    harryPotter: [
        'tt1201607',  // Harry Potter and the Deathly Hallows: Part 2
        'tt0241527' // Harry Potter and the Sorcerer's Stone
    ],
    ironMan: [
        'tt0371746' // Iron Man
    ]
}

const getMovie = (id) => {
    return fetch(`https://www.omdbapi.com/?apikey=e9cb41b7&i=${id}`).then(response => response.json());
};

window.getMovie = getMovie;

const filterByGenre = (data, genre) => {
    const promises = data.map(element => getMovie(element));

    return Promise.all(promises).then(movies => {
        return movies.filter(element => element.Genre.split(',').filter(genre => genre.trim().toLowerCase().includes(genre)));
    });
}

window.filterByGenre = filterByGenre;



