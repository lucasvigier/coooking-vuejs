import useRecipeApi from "../omdb.js";

Vue.component('recipe', {
    props: ["recipe"],
    template: `
    <div class="col s12 m6">
      <div class="card large">
            <div class="card-image">
                <img :src="recipe.image =='N/A'? 'assets/img/default.jpg' : recipe.image" alt="">
                <span class="card-title"> {{recipe.title}} </span>
            </div>
       
            <div class="card-content">
                <p> {{recipe.readyInMinutes}} </p><br>
            </div>
            <div class="card-action">
                <a :href="recipe.sourceUrl" >show more</a>
        </div>
      </div>
    </div>`,
    methods : {
        handleSelected : function() {
           this.$emit('recipe-selected',this.recipe.imdbID);
        }
    },
    created(){
        console.log(this.props);
    }
})
