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
            useRecipeApi.byFiltre(this.recipefiltre).then(data => this.$emit('search-done', data.results));
        },
        getfiltre: function () {
            var checkboxes = document.querySelectorAll("input[type=checkbox][name=filtre]");
            checkboxes.forEach(function (checkbox) {
                this.recipefiltre = Array.from(checkboxes);
            })
        }
    },
})