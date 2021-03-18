import useMovieApi from "../omdb.js";

Vue.component('search', {
    template: `<form  @submit.prevent="handleSubmit">
                    <input type="text" v-model="movieTitle"/>
                    <input type="submit" value="SEARCH" class="btn"/>
            </form>`,
    data : function() {
        return {
            movieTitle: ""
        }},
    methods : {
        handleSubmit : function() {
            useMovieApi.bySearch(this.movieTitle).then(data =>  this.$emit('search-done', data.Search));

        }
    },


})