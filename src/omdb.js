const API_KEY = 'f45f7a43';

const useMovieApi = {

    bySearch: (search) => new Promise((resolve, reject) => {
        const MOVIE_API_URL = `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`;

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    }),
    byId : (search) => new Promise((resolve, reject) => {
        const MOVIE_API_URL = `https://www.omdbapi.com/?i=${search}&plot=full&apikey=${API_KEY}`;

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    })

};

export default useMovieApi;

