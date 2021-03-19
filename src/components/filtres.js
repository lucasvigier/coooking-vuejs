import useRecipeApi from "../omdb.js";

Vue.component('filtre', {
    template: '#filtre',
    data: function () {
        return {
            request: '',
            search: '',

            African: '',
            American: '',
            British: '',
            Cajun: '',
            Caribbean: '',
            Chinese: '',
            Eastern_European: '',
            France: '',
            German: '',

            dairy: '',
            peanut: '',
            soy: '',
            egg: '',
            seafood: '',
            sulfite: '',
            gluten: '',
            sesame: '',
            treenut: '',

            ingredients: '',
            ingredientsExclu: '',
            minCalories: '',
            maxCalories: '',
            diet: '',
            diettype: ''
        }
    },
    methods: {

        handleSubmit: function () {
            this.createRequest();
            useRecipeApi.byFiltre(this.request).then(data => this.$emit('search-done', data.results));
        },

        createRequest: function (){
            let request = 'https://api.spoonacular.com/recipes/complexSearch?`';
            let pays = '';
            let intolerance = '';

            if (this.search !== ''){
                request += '&titleMatch=' + this.search
            }
            if (this.ingredients !== ''){
                request += '&includeIngredients=' + this.ingredients
            }
            if (this.ingredientsExclu !== ''){
                request += '&excludeIngredients=' + this.ingredientsExclu
            }
            if (this.minCalories){
                request += '&minCalories=' + this.minCalories
            }
            if (this.maxCalories){
                request += '&maxCalories=' + this.maxCalories
            }
            if (this.diet !== ''){
                request += '&diet=' + this.diet
            }
            if (this.diettype !== ''){
                request += '&type=' + this.diettype
                if (this.diettype === 'beverage'){
                    request += '&minAlcohol=10'
                }
            }

            if (this.African !== ''){
                pays += this.African +',';
            }
            if (this.American !== ''){
                pays += this.American +',';
            }
            if (this.British !== ''){
                pays += this.British +',';
            }
            if (this.Cajun !== ''){
                pays += this.Cajun +',';
            }
            if (this.Caribbean !== ''){
                pays += this.Caribbean +',';
            }
            if (this.Chinese !== ''){
                pays += this.Chinese +',';
            }
            if (this.Eastern_European !== ''){
                pays += this.Eastern_European +',';
            }
            if (this.France !== ''){
                pays += this.France +',';
            }
            if (this.German !== ''){
                pays += this.German +',';
            }
            if (pays !== ''){
                request += '&country=' + pays;
            }

            if (this.dairy !== ''){
                intolerance += this.dairy +',';
            }
            if (this.peanut !== ''){
                intolerance += this.peanut +',';
            }
            if (this.soy !== ''){
                intolerance += this.soy +',';
            }
            if (this.egg !== ''){
                intolerance += this.egg +',';
            }
            if (this.seafood !== ''){
                intolerance += this.seafood +',';
            }
            if (this.sulfite !== ''){
                intolerance += this.sulfite +',';
            }
            if (this.gluten !== ''){
                intolerance += this.gluten +',';
            }
            if (this.sesame !== ''){
                intolerance += this.sesame +',';
            }
            if (this.treenut !== ''){
                intolerance += this.treenut +',';
            }
            if (intolerance !== ''){
                request += '&intolerances =' + intolerance;
            }

            request += '&apiKey=b51ad72a29914fb4b0ce97a4be312061&number=2'
            this.request = request;
        }
    },
})
