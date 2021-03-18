import useRecipeApi from "../omdb.js";

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
          <div class="header-item item-center">

          </div>
          <div class="header-item item-right">
            
            <a href="#"><i class="fas fa-search"></i></a>
            <a href="#"><i class="far fa-heart"></i></a>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
      </header>`,
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
