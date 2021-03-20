import useRecipeApi from "../omdb.js";

Vue.component('recipe', {
    props: ["recipe"],
    template: '#recipe',
    methods : {
        handleSelected : function() {
            this.$emit('recipe-selected',this.recipe.imdbID);
        },
    },
    created(){
        console.log(this.props);
    }
})
