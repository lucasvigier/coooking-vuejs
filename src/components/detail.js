import useRecipeApi from "../omdb.js";

Vue.component('detail', {
    props: ["recipeId"],
    template: '#detail',
    data : function() {
        return {
            detail : {
                title: null,
                sourceUrl: null,
                readyInMinutes: null,
                servings: null
            },
        }
    },
    mounted(){
        console.log("test");
        if (this.recipeId !== undefined) {
            useRecipeApi.byId(this.recipeId).then(data => {
                this.detail = data;
                console.log(data)
            });
        }
    }

})
