import useRecipeApi from "../omdb.js";

Vue.component('detail', {
    props: ["recipeId"],
    template: '#detail',
    data : function() {
        return {
            detail : {
                Title: null,
                Url: null,
                Duree: null,
                Ratings : []
            },
        }
    },
    mounted(){
        if (this.recipeId != undefined) {
            useRecipeApi.byId(this.recipeId).then(data => {
                this.detail = data;
                console.log(data)
            });
        }
    }

})
