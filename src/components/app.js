Vue.component('app', {
    template: '#appp',
    data: function () {
        return {
            recipes: [],
            selectedId: null
        }
    },
    methods: {
        searchCompleted: function (data) {
            if (data != undefined) {
                this.recipes = data;
                console.log(this.recipes);
                this.selectedId = null;
            }
        },
        recipeSelected: function (id) {
            console.log(id);
            this.selectedId = id;

        }
    }
})
