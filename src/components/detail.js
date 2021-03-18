import useRecipeApi from "../omdb.js";

Vue.component('detail', {
    props: ["recipeId"],
    template: `
    <table class="striped">
       <tbody>
            <tr> <td> Titre </td> <td> {{detail.Title}} </td></tr>
            <tr> <td> URL </td> <td> {{detail.Url}} </td></tr>
            <tr> <td> Duree </td> <td> {{detail.Duree}} </td></tr>
      </tbody>
  </table>`,
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
