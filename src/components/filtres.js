import useRecipeApi from "../omdb.js";

Vue.component('filtre', {
    template: '#filtre',
    data: function () {
        return {
            recipetitle: "",
            recipefiltre: "",
            recipeval: null
        }
    },
    methods: {
        handleSubmit: function () {
            console.log(this.recipefiltre);
            useRecipeApi.byFiltre(this.recipetitle, this.recipefiltre, this.recipeval).then(data => this.$emit('search-done', data.results));
        },
        addfiltre: function (filtre) {
            this.recipefiltre = filtre;
        },
        addval: function (val) {
            this.recipeval= val;
        }
    },
})