var cargarPagina = function () {
	$("#get-location").click(obtenerUbicacion);
	mostrar(arrayRestaurante);
	 // $(document).on( "click" , ".busqueda", cambiarUbicacion);
	// $(".busqueda").click(cambiarUbicacion);
	$("form").submit(busqueda);
	$(document).on( "click" , ".busqueda", cambiarUbicacion);
};


var arrayRestaurante= [];

function Restaurante (nombre,foto,direccion,coordenadas, tipoComida) {
	this.nombre = nombre,
	this.foto= foto,
	this.direccion= direccion,
	this.coordenadas = coordenadas,
	this.tipoComida = tipoComida
}

var restaurante = new Restaurante("Terraza del Mayor", "img/mayor.jpg","Calle República de Argentina 15 Planta Alta, Cuauhtemoc" ,{latitud: 19.435756,longitud: -99.1337437},"mexicana");
var restaurante2 = new Restaurante("La  Barranca Valenciana","img/valenciana.jpg","Av. Centenario 91 C, Coyoacan, Del Carmen" ,{latitud: 19.3523942,longitud: -99.1656628}, "tortas");
var restaurante3 = new Restaurante("Salon corona", "img/corona.jpg" , "Paseo de la Reforma 453, Cuauhtémoc",{latitud: 19.3523942,longitud: -99.1656628}, "tacos");
arrayRestaurante.push(restaurante);
arrayRestaurante.push(restaurante2);
arrayRestaurante.push(restaurante3);



var plantillaRestaurant = "<div class = 'card horizontal'>"+
						  		"<div class= 'card-image'>"+
						 			"<img src='__foto__'>"+
						 		"</div>"+
						 		"<div class= 'card-stacked'>"+
						 			"<div class='card-content'>"+
						 				"<h3  class='busqueda' data-latitud='__latitud__' data-longitud='__longitud__'>__nombre__</h3>"+
						 		 		"<p>__direccion__</p>"+
						 			"</div>"+	 
						 		"</div>"+
						 	"</div>";

var mostrar = function (arreglo) {
	var plantillaFinal = "";
	arreglo.forEach(function (elemento) {
		plantillaFinal += plantillaRestaurant.replace("__nombre__", elemento.nombre)
											 .replace("__foto__", elemento.foto)
											 .replace("__direccion__", elemento.direccion)
											 .replace("__latitud__", elemento.coordenadas.latitud)
											 .replace("__longitud__", elemento.coordenadas.longitud);
			
	});
	$("#listaRestaurant").html(plantillaFinal);
};

var busqueda = function (e){
	e.preventDefault();
	$itemBuscar = $("#icon_prefix").val();

	var resultadosBusqueda = arrayRestaurante.filter(function(elemento){

		if($itemBuscar === elemento.tipoComida){
			return elemento;
		}
	})
	$mensaje = $("<h2>Mundo cruel x.X no hay restaurantes</h2>");
	if(resultadosBusqueda.length ===0 )
	{
		$("#listaRestaurant").html($mensaje);
	}else
	{

		mostrar(resultadosBusqueda);

		
	}
	
}

var obtenerUbicacion = function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
		
	} else {
		alert("Mundo cruel, no tienes acceso a los mapas X.x");
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
function cambiarUbicacion() {

   var latitud = $(this).data("latitud");
   
   
   var longitud = $(this).data("longitud");
  	console.log(longitud);
  var coordenadas = {
    lat: latitud,
    lng: longitud
   };

  
  mostrarMapa(coordenadas);
 }


$(document).ready(cargarPagina);
