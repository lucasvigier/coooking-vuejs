import useMovieApi from "../omdb.js";

Vue.component('movie', {
    props: ["movie"],
    template: `
    <div class="col s12 m6">
      <div class="card large">
            <div class="card-image">
                <img :src="movie.Poster=='N/A'? 'assets/img/defaut.jpg' : movie.Poster" alt="">
                <span class="card-title"> {{movie.Title}} </span>
            </div>
       
            <div class="card-content">
                <p> {{movie.Year}} </p>
            </div>
            <div class="card-action">
                <a href="#app" @click="handleSelected">show more</a>
        </div>
      </div>
    </div>`,
    methods : {
        handleSelected : function() {
           this.$emit('film-selected',this.movie.imdbID);
        }
    },

})