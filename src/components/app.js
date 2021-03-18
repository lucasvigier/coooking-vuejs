Vue.component('app', {
    template: `<div  id="app"> 
                    <search  @search-done="searchCompleted($event)"> </search>
                    <div class="col s8">
                        <div class="row">
                            <movie v-for="movie in movies" v-bind:key="movie.imdbID" :movie=movie v-on:film-selected="filmSelected($event)"> </movie>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="row">
                            <detail v-bind:filmId="selectedId" :key="selectedId"> </detail>
                        </div>
                    </div>
               </div>`,
    data : function () {
        return {
            movies: [],
            selectedId: null

    }},
    methods: {
        searchCompleted : function(data) {
           if (data != undefined) {
               this.movies = data;
               this.selectedId = null;
           }
        },
        filmSelected : function(id){
            console.log(id);
            this.selectedId=id;

        }}
})