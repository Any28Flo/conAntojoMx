var arrayRestaurante= [];

function Restaurante (nombre,direccion,coordenadas) {
	this.nombre = nombre,
	this.direccion= direccion,
	this.coordenadas = coordenadas
}

var restaurante = new Restaurante("Terraza del Mayor", "Calle República de Argentina 15 Planta Alta, Cuauhtemoc" ,{latitud: -99.1337437,longitud: 19.435756});
// var restaurante2 = new Restaurante ("La Bota" , )
// var restaurante3 = new Restaurante ( "Mog")
arrayRestaurante.push(restaurante);

console.log(arrayRestaurante[0]);
var plantillaRestaurante = 










var muestraDatos{

}


var cargarPagina = function () {
	$("#get-location").click(obtenerUbicacion);
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

