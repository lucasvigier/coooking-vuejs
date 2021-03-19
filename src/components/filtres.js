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
            Greek: '',
            Indian: '',
            Irish: '',
            Italian: '',
            Japanese: '',
            Jewish: '',
            Korean: '',
            Latin_American: '',
            Mediterranean: '',
            Mexican: '',
            Middle_Eastern: '',
            Nordic: '',
            Southern: '',
            Spanish: '',
            Thai: '',
            Vietnamese: '',

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
            this.deletefilter();
            useRecipeApi.byFiltre(this.request).then(data => this.$emit('search-done', data.results));

        },
        deletefilter: function (){
            this.African = '';
            this.American= '';
            this.British= '';
            this.Cajun= '';
            this.Caribbean = '';
            this.Chinese= '';
            this.Eastern_European= '';
            this.France= '';
            this.German= '';
            this.Greek= '';
            this.Indian= '';
            this.Irish= '';
            this.Italian= '';
            this.Japanese= '';
            this.Jewish= '';
            this.Korean= '';
            this.Latin_American= '';
            this.Mediterranean= '';
            this.Mexican= '';
            this.Middle_Eastern= '';
            this.Nordic= '';
            this.Southern= '';
            this.Spanish= '';
            this.Thai= '';
            this.Vietnamese= '';

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
            if (this.Greek !== ''){
                pays += 'Greek,';
            }
            if (this.Indian !== ''){
                pays += 'Indian,';
            }
            if (this.Irish !== ''){
                pays += 'Irish,';
            }
            if (this.Italian !== ''){
                pays += 'Italian,';
            }
            if (this.Japanese !== ''){
                pays += 'Japanese,';
            }
            if (this.Jewish !== ''){
                pays += 'Jewish,';
            }
            if (this.Korean !== ''){
                pays += 'Korean,';
            }
            if (this.Latin_American !== ''){
                pays += 'Latin_American,';
            }
            if (this.Mediterranean !== ''){
                pays += 'Mediterranean,';
            }
            if (this.Mexican !== ''){
                pays += 'Mexican,';
            }
            if (this.Middle_Eastern !== ''){
                pays += 'Middle_Eastern,';
            }
            if (this.Nordic !== ''){
                pays += 'Nordic,';
            }
            if (this.Southern !== ''){
                pays += 'Southern,';
            }
            if (this.Spanish !== ''){
                pays += 'Spanish,';
            }
            if (this.Thai !== ''){
                pays += 'Thai,';
            }
            if (this.Vietnamese !== ''){
                pays += 'Vietnamese,';
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
                intolerance += 'tree_nut,';
            }
            if (intolerance !== ''){
                request += '&intolerances=' + intolerance;
            }

            request += '&apiKey=b51ad72a29914fb4b0ce97a4be312061&number=2'
            this.request = request;
        }
    },
})
