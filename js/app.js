var arrayRestaurante= [];

function Restaurante (nombre,foto,direccion,coordenadas) {
	this.nombre = nombre,
	this.foto= foto,
	this.direccion= direccion,
	this.coordenadas = coordenadas
}

var restaurante = new Restaurante("Terraza del Mayor", " https://goo.gl/XJRhRW","Calle República de Argentina 15 Planta Alta, Cuauhtemoc" ,{latitud: -99.1337437,longitud: 19.435756});
arrayRestaurante.push(restaurante);



var plantillaRestaurant = "<div class = 'card horizontal'>"+
						  		"<div class= 'card-image'>"+
						 			"<img src='__foto__'>"+
						 		"</div>"+
						 		"<div class= 'card-stacked'>"+
						 			"<div class='card-content'>"+
						 				"<h3>__nombre__</h3>"+
						 		 		"<p>__direccion__</p>"+
						 			"</div>"+	 
						 		"</div>"+
						 	"</div>";

var mostrarContactos = function (contactos) {
	var plantillaFinal = "";
	arrayRestaurante.forEach(function (restaurante) {
		plantillaFinal += plantillaRestaurant.replace("__nombre__", restaurante.nombre)
											 .replace("__foto__", restaurante.foto)
											 .replace("__direccion__", restaurante.direccion);
			
	});
	$("#listaRestaurant").html(plantillaFinal);
};



var cargarPagina = function () {
	$("#get-location").click(obtenerUbicacion);
	mostrarContactos();
};


var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};

var mostrarPosicion = function (posicion) {
	var coordenadas = {
		lat: posicion.coords.latitude, 
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('#map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

$(document).ready(cargarPagina);

