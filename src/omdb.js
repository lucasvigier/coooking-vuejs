const API_KEY = 'b51ad72a29914fb4b0ce97a4be312061';

const useRecipeApi = {

    bySearch: (search) => new Promise((resolve, reject) => {
        const RECIPE_API_URL = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=9&query=${search}`;

        fetch(RECIPE_API_URL)
            .then(response => response.json())
                .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    }),

    byId : (search) => new Promise((resolve, reject) => {
        const RECIPE_API_URL = `https://api.spoonacular.com/recipes/${search}/information?apiKey=${API_KEY}`;

        fetch(RECIPE_API_URL)
            .then(response => response.json())
                .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    }),

    byFiltre : (recipe_api_url) =>new Promise((resolve , reject) => {
        const RECIPE_API_URL = recipe_api_url;

        fetch(RECIPE_API_URL)
            .then(response => response.json())
                .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    })

};

export default useRecipeApi;

