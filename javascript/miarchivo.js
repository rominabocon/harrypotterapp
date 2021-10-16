// API    

const URLGET = "https://fedeperin-harry-potter-api.herokuapp.com/db"

fetch(URLGET)
	.then((res) => res.json())
	.then((data) => {
		/*
			Trae toda la info de la API y la deja dentro de la variable data
			También muestra la variable data por consola
		*/
		console.log(data)
	})
	.catch((e) => console.log(e))

    $(document).ready(function(){
 const btnArrowBack = $('#btnArrowBack');


 btnArrowBack.on('click', gotoBackHome);

 function gotoBackHome() {
    window.history.go(-1);
}
const search = $('#search');
const ingreso = $('.ingreso');

search.append('<button class="uno btn btn-primary mt-2 m-1">Buscar</button>');
search.append('<button class="todos btn btn-primary mt-2 m-1">Mostrar todos</button>');


$(".todos").click(() => {
    $.get(URLGET, function(respuesta,estado) {
        console.log(estado)
        if(estado === "success") {
            let datos = respuesta;
            for (const dato of datos) {
                $("#tabla").append(`<tbody><td>${dato.personajes.personaje}</td><td>${dato.casaDeHogwarts}</td><td>${dato.interpretado_por}</td></tbody>`);
            }
        }
    })
})

})
