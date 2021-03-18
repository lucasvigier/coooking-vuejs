Vue.component('app', {
    template: `
      <div id="app">
      <search @search-done="searchCompleted"></search>
      <div class="col s8">
        <div class="row">
          <recipe v-for="recipe in recipes" v-bind:key="recipe.imdbID" :recipe=recipe
                 v-on:recipe-selected="recipeSelected($event)"></recipe>
        </div>
      </div>
      <div class="col s4">
        <div class="row">
          <detail v-bind:recipeId="selectedId" :key="selectedId"></detail>
        </div>
      </div>
      </div>`,
    data: function () {
        return {
            recipes: [],
            selectedId: null

    }},
    methods: {
        searchCompleted : function(data) {
           if (data != undefined) {
               this.recipes = data;
               this.selectedId = null;
           }
        },
        recipeSelected : function(id){
            console.log(id);
            this.selectedId=id;

        }}
})