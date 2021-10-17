// API    
const URLGET = "../data/personajes.json"
const URLGET1 = "../data/hechizos.json"
const URLGET2 = "../data/libros.json"

$(document).ready(function(){

// FUNCION FLECHA BACK    
const btnArrowBack = $('#btnArrowBack');
btnArrowBack.on('click', gotoBackHome);

function gotoBackHome() {
    window.history.go(-1);
}

// LLAMADA A BUSQUEDA DE PERSONAJES
const search = $('#search');

search.append('<button class="uno btn btn-primary mt-2 m-1">Buscar</button>');
search.append('<button class="todos btn btn-primary mt-2 m-1">Mostrar todos</button>');
search.append('<button class="limpiar btn btn-primary mt-2 m-1"">Limpiar</button>');

//trae todos los personajes
$(".todos").click(() => {
    $.get(URLGET, function(respuesta,estado) {
        if(estado === "success") {
            let datos = respuesta;
            for (const dato of datos) {
                $("#tabla").append(`<tbody class="animate__animated animate__backInDown"><td>${dato.personaje}</td><td>${dato.apodo}</td><td>${dato.casaDeHogwarts}</td><td>${dato.hijos}</td><td>${dato.interpretado_por}</td></tbody>`);
            }
        }
    })
})
//trae solo por busqueda 
$(".uno").click(() => {
    $.get(URLGET, function(respuesta,estado) {
        if(estado === "success") {
            let info = respuesta;
            let busqueda = info.filter(el => el.personaje.includes( $('#personaje').val()) )
            for (const dato of busqueda) {
                $("#tabla").append(`<tbody class="animate__animated animate__wobble"><td>${dato.personaje}</td><td>${dato.apodo}</td><td>${dato.casaDeHogwarts}</td><td>${dato.hijos}</td><td>${dato.interpretado_por}</td></tbody>`);
            }
        }
    })
})


//hechizos

const search1 = $('#search1');
search1.append('<button class="uno1 btn btn-primary mt-2 m-1">Buscar</button>');
search1.append('<button class="todos1 btn btn-primary mt-2 m-1">Mostrar todos</button>');
search1.append('<button class="limpiar btn btn-primary mt-2 m-1"">Limpiar</button>');

//trae todos los hechizos
$(".todos1").click(() => {
    $.get(URLGET1, function(respuesta1,estado) {
        if(estado === "success") {
            let datos1 = respuesta1;
            for (const dato1 of datos1) {
                $("#tabla1").append(`<tbody class="animate__animated animate__backInDown"><td>${dato1.hechizo}</td><td>${dato1.uso}</td></tbody>`);
            }
        }
    })
})
//trae solo por busqueda 
$(".uno1").click(() => {
    $.get(URLGET1, function(respuesta1,estado) {
        if(estado === "success") {
            let info1 = respuesta1;
            let busqueda1 = info1.filter(el => el.hechizo.includes($('#hechizo').val()) )
            for (const dato1 of busqueda1) {
                $("#tabla1").append(`<tbody class="animate__animated animate__wobble><td>${dato1.hechizo}</td><td>${dato1.uso}</td></tbody>`);
            }
        }
    })
})

//LIBROS

const search2 = $('#search2');
search2.append('<button class="uno2 btn btn-primary mt-2 m-1">Buscar</button>');
search2.append('<button class="todos2 btn btn-primary mt-2 m-1">Mostrar todos</button>');
search2.append('<button class="limpiar btn btn-primary mt-2 m-1"">Limpiar</button>');

//trae todos los hechizos
$(".todos2").click(() => {
    $.get(URLGET2, function(respuesta2,estado) {
        if(estado === "success") {
            let datos2 = respuesta2;
            for (const dato2 of datos2) {
                $("#tabla2").append(`<tbody class="animate__animated animate__backInDown"><td>${dato2.libro}</td><td>${dato2.titulo_original}</td><td>${dato2.fecha_de_lanzamiento}</td><td>${dato2.descripcion}</td></tbody>`);
            }
        }
    })
})
//trae solo por busqueda 
$(".uno2").click(() => {
    $.get(URLGET2, function(respuesta2,estado) {
        if(estado === "success") {
            let info2 = respuesta2;
            let busqueda2 = info2.filter(el => el.libro.includes( $('#libro').val()) )
            for (const dato2 of busqueda2) {
                $("#tabla2").append(`<tbody class="animate__animated animate__wobble><td>${dato2.id}</td><td>${dato2.titulo_original}</td><td>${dato2.fecha_de_lanzamiento}</td><td>${dato2.descripcion}</td><td class="hidden">${dato2.id}</td></tbody>`);
            }
        }
    })
})
$(".limpiar").click(() => {
    $('tbody').remove()
})

})

