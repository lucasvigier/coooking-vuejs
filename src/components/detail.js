import useMovieApi from "../omdb.js";

Vue.component('detail', {
    props: ["filmId"],
    template: `
    <table class="striped">
       <tbody>
            <tr> <td> Titre </td> <td> {{detail.Title}} </td></tr>
            <tr> <td> Année </td> <td> {{detail.Released}} </td></tr>
            <tr> <td> Durée </td> <td> {{detail.Runtime}} </td></tr>
            <tr> <td> Genre </td> <td> {{detail.Genre}} </td></tr>
            <tr> <td> Réaisateur </td> <td> {{detail.Director}} </td></tr>
            <tr> <td> Auteur </td> <td> {{detail.Writer}} </td></tr>
            <tr> <td> Acteurs </td> <td> {{detail.Actors}} </td></tr>
            <tr> <td> Synopsis </td> <td> {{detail.Plot}} </td></tr>
      </tbody>
  </table>`,
    data : function() {
        return {
            detail : {
                Title: null,
                Year: null,
                Released: null,
                Runtime : null,
                Genre: null,
                Director: null,
                Writer: null,
                Actors: null,
                Plot: null,
                Language: null,
                Country: null,
                Awards : null,
                Poster: null,
                Ratings : []
            },
        }
    },
    mounted(){
        if (this.filmId != undefined) {
            useMovieApi.byId(this.filmId).then(data => {
                this.detail = data;
                console.log(data)
            });
        }
    }

})