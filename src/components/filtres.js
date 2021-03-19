import useRecipeApi from "../omdb.js";

Vue.component('filtre', {
    template: '#filtre',
    data: function () {
        return {
            request: '',

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
            this.deletefiler();
            useRecipeApi.byFiltre(this.request).then(data => this.$emit('search-done', data.results));

        },
        deletefiler: function (){
            this.African = '';
            this.American= '';
            this.British= '';
            this.Cajun= '';
            this.Caribbean = '';
            this.Chinese= '';
            this.Eastern_European= '';
            this.France= '';
            this.German= '';

            this.dairy= '';
            this.peanut= '';
            this.soy= '';
            this.egg= '';
            this.seafood= '';
            this.sulfite= '';
            this.gluten= '';
            this.sesame= '';
            this.treenut= '';

            this.ingredients= '';
            this.ingredientsExclu= '';
            this.minCalories= '';
            this.maxCalories= '';
            this.diet= '';
            this.diettype= '';
        },

        createRequest: function (){
            let request = 'https://api.spoonacular.com/recipes/complexSearch?';
            let pays = '';
            let intolerance = '';

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
                pays += 'African,';
            }
            if (this.American !== ''){
                pays += 'American,';
            }
            if (this.British !== ''){
                pays += 'British,';
            }
            if (this.Cajun !== ''){
                pays += 'Cajun,';
            }
            if (this.Caribbean !== ''){
                pays += 'Caribbean,';
            }
            if (this.Chinese !== ''){
                pays += 'Chinese,';
            }
            if (this.Eastern_European !== ''){
                pays += 'Eastern_European,';
            }
            if (this.France !== ''){
                pays += 'French,';
            }
            if (this.German !== ''){
                pays += 'German,';
            }
            if (pays !== ''){
                request += '&cuisine=' + pays;
            }

            if (this.dairy !== ''){
                intolerance += 'dairy,';
            }
            if (this.peanut !== ''){
                intolerance += 'peanut,';
            }
            if (this.soy !== ''){
                intolerance += 'soy,';
            }
            if (this.egg !== ''){
                intolerance += 'egg,';
            }
            if (this.seafood !== ''){
                intolerance += 'seafood,';
            }
            if (this.sulfite !== ''){
                intolerance += 'sulfite,';
            }
            if (this.gluten !== ''){
                intolerance += 'gluten,';
            }
            if (this.sesame !== ''){
                intolerance += 'sesame,';
            }
            if (this.treenut !== ''){
                intolerance += 'treenut,';
            }
            if (intolerance !== ''){
                request += '&intolerances=' + intolerance;
            }

            request += '&apiKey=b51ad72a29914fb4b0ce97a4be312061&number=2'
            this.request = request;
        }
    },
})
