const API_KEY = 'b51ad72a29914fb4b0ce97a4be312061';

const useRecipeApi = {

    bySearch: (search) => new Promise((resolve, reject) => {
        const RECIPE_API_URL = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=2&query=${search}`;

        fetch(RECIPE_API_URL)
            .then(response => response.json())
                .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    }),
    byId : (search) => new Promise((resolve, reject) => {
        const RECIPE_API_URL = `https://api.spoonacular.com/recipes/${search}/information?apiKey=b51ad72a29914fb4b0ce97a4be312061${API_KEY}`;

        fetch(RECIPE_API_URL)
            .then(response => response.json())
                .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    }),
    byFiltre : (search, filtre, val) =>new Promise((resolve , reject) => {
        // if (filtre === "maxCalories" && val !== 0)
        //     const RECIPE_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&maxCalories=${val}&apiKey=${API_KEY}&number=2`;
        // else if (filtre === "vegan")
        //     const RECIPE_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&vegan=true&apiKey=${API_KEY}&number=2`;
        // else if (filtre === "vegetarian")
        //     const RECIPE_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&vegetarian=true&apiKey=${API_KEY}&number=2`;
        // else if (filtre === "glutenFree")
        //     const RECIPE_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&glutenFree=true&apiKey=${API_KEY}&number=2`;
        // else
        //     const RECIPE_API_URL = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=2&query=${search}`;

        fetch(RECIPE_API_URL)
            .then(response => response.json())
                .then(jsonResponse => resolve(jsonResponse))
            .catch((err) => reject(err))
    })

};

export default useRecipeApi;

