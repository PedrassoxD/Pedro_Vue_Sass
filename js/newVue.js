/* Variables adicionales */

var arrayCoctel = [];
var arrayCoctelSin = [];

/* Funcion que desempeña el boton de la seccion de RandomCocktail */

function mostrar() {
    document.getElementById('contenedor').style.display = "none";
    document.getElementById('contenedor').style.display = "block";
}


new Vue({
    el: "#app",
    data: {
        textSearch: "",
        soccer: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://free-football-soccer-videos1.p.rapidapi.com/v1/",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
                    "x-rapidapi-key": "3f674b37e8msh4a8932e8d199809p11be4bjsn91183b9afe86"
                }
            })
            .then((response) => {
                this.soccer = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    computed: {
        soccerFilter() {
            var textSearch = this.textSearch;
            return this.soccer.filter(function(el) {
                return el.title.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        },

        soccerFilter2() {
            var textSearch = this.textSearch;
            return this.soccer.filter(function(el) {
                return el.competition.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }

    }

});