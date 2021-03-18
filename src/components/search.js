import useMovieApi from "../omdb.js";

Vue.component('search', {
    template: `
      <header class="header">
      <div class="container">
        <div class="row v-center">
          <div class="header-item item-left">
            <div class="logo">
              <a href="index.html">Coo<span>o</span>king</a>
            </div>
          </div>
          <div class="header-item item-right">
            <form @submit.prevent="handleSubmit">
              <input type="text" v-model="movieTitle"/>
              <input type="submit" value="Search" class="btn"/>
            </form>
          </div>
        </div>
      </div>

      </header>`,
    data: function () {
        return {
            movieTitle: ""
        }
    },
    methods: {
        handleSubmit: function () {
            useMovieApi.bySearch(this.movieTitle).then(data => this.$emit('search-done', data.Search));

        }
    },


})
