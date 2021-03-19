import useRecipeApi from "../omdb.js";

Vue.component('filtre', {
    template: '#filtre',
    data: function () {
        return {
            search: '',

            African: '',
            American: '',
            British: '',
            Cajun: '',
            Caribbean: '',
            Chinese: '',
            Eastern_European: '',
            France: '',
            German: '',

            dairy: '',
            peanut: '',
            soy: '',
            egg: '',
            seafood: '',
            sulfite: '',
            gluten: '',
            sesame: '',
            treenut: '',

            ingredients: '',
            ingredientsExclu: '',
            minCalories: '',
            maxCalories: '',
            diet: '',
            diettype: ''
        }
    },
    methods: {

        handleSubmit: function () {
            console.log(this.recipefiltre);
            console.log(this.recipetitle);
            console.log(this.recipeval);
            useRecipeApi.byFiltre(this.recipetitle, this.recipefiltre, this.recipeval).then(data => this.$emit('search-done', data.results));
        },

        createRequest: function (){
            let request = 'https://api.spoonacular.com/recipes/complexSearch?`';
            let cuisine = '';
            let intolerance = '';

            if (this.search !== ''){
                request += '&titleMatch=' + this.search
            }
            if (this.ingredients !== ''){
                request += '&includeIngredients=' + this.ingredients
            }
            if (this.ingredientsExclu !== ''){
                request += '&excludeIngredients=' + this.ingredientsExclu
            }
            if (this.minCalories){
                request += '&minCalories=' + this.minCalories
            }
            if (this.maxCalories){
                request += '&maxCalories=' + this.maxCalories
            }
            if (this.diet !== ''){
                request += '&diet=' + this.diet
            }
            if (this.diettype !== ''){
                request += '&type=' + this.diettype
                if (this.diettype === 'beverage'){
                    request += '&minAlcohol=10'
                }
            }

            if (this.African !== ''){

            }
            request += '&apiKey=b51ad72a29914fb4b0ce97a4be312061&number=2'

        }
    },
})
