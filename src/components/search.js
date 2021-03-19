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
          <div class="header-item item-right">
            <form @submit.prevent="handleSubmit">
              <input type="text" v-model="recipetitle"/>
              <input type="submit" value="Search" class="btn"/>
            </form>
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
