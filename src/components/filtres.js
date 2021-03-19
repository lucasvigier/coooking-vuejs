import useRecipeApi from "../omdb.js";

Vue.component('filtre', {
    template: '#filtre',
    data: function () {
        return {
            recipefiltre: []
        }
    },
    methods: {
        handleSubmit: function () {
            console.log(this.recipefiltre);
            useRecipeApi.byFiltre(this.recipefiltre).then(data => this.$emit('search-done', data.results));
        },
        addfiltre: function (filtre) {
            this.recipefiltre.push(

            )
        }
    },
})