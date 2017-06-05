
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
  });
}

var obtener = function(){
	navigator.geolocation.getCurrentPosition(mostrar);
}

var mostrar = function(evento){
	// var $ubicacion=$("#map");
	console.log(evento);
	var $latitud= evento.coords.latitude;
	console.log($latitud);

}
var cargaPagina = function()
{
	obtener();
	mostrar();

}

 
$(document).ready(cargaPagina);
