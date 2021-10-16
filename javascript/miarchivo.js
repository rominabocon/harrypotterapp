// API    

const URLGET = "../data/personajes.json"


    $(document).ready(function(){
const btnArrowBack = $('#btnArrowBack');


btnArrowBack.on('click', gotoBackHome);

function gotoBackHome() {
    window.history.go(-1);
}
const character = $('#personaje')
const search = $('#search');


search.append('<button class="uno btn btn-primary mt-2 m-1">Buscar</button>');
search.append('<button class="todos btn btn-primary mt-2 m-1">Mostrar todos</button>');


$(".todos").click(() => {
    $.get(URLGET, function(respuesta,estado) {
        if(estado === "success") {
            let datos = respuesta;
            for (const dato of datos) {
                $("#tabla").append(`<tbody><td>${dato.personaje}</td><td>${dato.apodo}</td><td>${dato.casaDeHogwarts}</td><td>${dato.hijos}</td><td>${dato.interpretado_por}</td></tbody>`);
            }
        }
    })
})

$('.uno').click(() => {
    $.get(URLGET, function(respuesta,estado) {
        if(estado==="success") {
            let info = respuesta;
            let buscando = info.filter(el => el.includes( $('#personaje').val()) )
            if (buscando) {
                $("#tabla").append(`<tbody><td>${el.personaje}</td><td>${el.apodo}</td><td>${el.casaDeHogwarts}</td><td>${el.hijos}</td><td>${el.interpretado_por}</td></tbody>`)
            }else{
                $("#tabla").append(`<p>No se encontraron los personajes</p>`)
            }
        }
    })

})
})

