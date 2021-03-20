import useRecipeApi from "../omdb.js";

Vue.component('search', {
    template: '#search',
    data: function () {
        return {
            recipetitle: ""
        }
    },
    methods: {
        handleSubmit: function () {
            useRecipeApi.bySearch(this.recipetitle).then(data => this.$emit('search-done', data.results));
        }
    },


})
