
$ = jQuery.noConflict();


var map;
var longitud = -12.079631066800848;
var latitud = -76.98705911636353;

var image = new google.maps.MarkerImage("http://convet.com.pe/wp-content/uploads/2017/12/location.png",
	new google.maps.Size(47, 75)
);
var marker;

$(document).ready(function () {

	var map;
	var marker;
	var image = new google.maps.MarkerImage("http://convet.com.pe/wp-content/uploads/2017/12/location.png",
		new google.maps.Size(47, 75)
	);

	var mapOptions = {
		center: new google.maps.LatLng(longitud, latitud),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var place = new google.maps.LatLng(longitud, latitud);
	marker = new google.maps.Marker({

		position: place,
		title: "Convet",
		map: map,
		icon: image
	});

	var sedes = [
		{
			titulo: "Farmacia Central",
			coordenadas: {
				longitud: -12.079631066800848,
				latitud: -76.98705911636353
			},
			telefono: {
				numero: "437-4880",
				formateado: "tel:+014374880"
			},
			direccion: {
				ubicacion: "Av. Circunvalación 2665 - Urb. Recaudadores - Ate",
				referencias: "A media cuadra de Plaza Vea",
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 1
		},
		{
			titulo: "Farmacia Salamanca",
			coordenadas: {
				longitud: -12.0810090266427,
				latitud: -76.98604239150882
			},
			telefono: {
				numero: "437-0249",
				formateado: "tel:+014370249"
			},
			direccion: {
				ubicacion: "Av. Circunvalación 2821",
				referencias: "Frente a al Facultad de Veterinaria de UNSM"
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 1
		},
		{
			titulo: "Farmacia San Luis",
			coordenadas: {
				longitud: -12.0793254,
				latitud: -76.98819370000001
			},
			telefono: {
				numero: "435-0065",
				formateado: "tel:+014350065"
			},
			direccion: {
				ubicacion: "Av. Circunvalación 2690 - San Luis",
				referencias: "A dos cuadras de la Av. Canadá con Av. Circunvalación",
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 1
		},
		{
			titulo: "Farmacia Hualgayoc",
			coordenadas: {
				longitud: -12.080092682498632,
				latitud: -76.9875419139862
			},
			telefono: {
				numero: "358-9079",
				formateado: "tel:+013589079"
			},
			direccion: {
				ubicacion: "Jr. Hualgayoc 102 - San Luis",
				referencias: "A media cuadra de la Facultad de Veterinaria de UNSM"
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 0
		},
		{
			titulo: "Farmacia Magdalena",
			coordenadas: {
				longitud: -12.0881841,
				latitud: -77.07163760000003
			},
			telefono: {
				numero: "552-9738",
				formateado: "tel:+015529738"
			},
			direccion: {
				ubicacion: "Jr. Leoncio Prado 1051",
				referencias: "A dos cuadras de la Plaza de Armas de Magdalena",
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 0
		},
		{
			titulo: "Farmacia Santa Beatriz",
			coordenadas: {
				longitud: -12.0647687,
				latitud: -77.03386290000003
			},
			telefono: {
				numero: "423-1815",
				formateado: "tel:+014231815"
			},
			direccion: {
				ubicacion: "Av. Paseo de la República 678 - Cercado de Lima",
				referencias: "Cerca al Estadio Nacional"
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 0
		},
		{
			titulo: "Farmacia Lurin",
			coordenadas: {
				longitud: -12.275667,
				latitud: -76.87103209999998
			},
			telefono: {
				numero: "430-4430",
				formateado: "tel:+014304430"
			},
			direccion: {
				ubicacion: "Av. Teodoro Roosevelt Km. 36 - Lurín",
				referencias: "Al frente de Elektra(camino al Sur)"
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 1
		},
		{
			titulo: "Farmacia Lurin 2",
			coordenadas: {
				longitud: -12.275831,
				latitud: -76.87111800000002
			},
			telefono: {
				numero: "430-1901",
				formateado: "tel:+014301901"
			},
			direccion: {
				direccion: "Av. Teodoro Roosevelt Km. 36 - Lurín",
				referencias: "A media cuadra de Elektra(camino al Sur)"
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 1
		},
		{
			titulo: "Farmacia Cayetano",
			coordenadas: {
				longitud: -12.0240687,
				latitud: -77.05787609999999
			},
			telefono: {
				numero: "482-1685",
				formateado: "tel:+014821685"
			},
			direccion: {
				ubicacion: "Jr. Ramón Vargas Machuca 599 - San Martín de Porres",
				referencias: "Frente a la Facultad Veterinaria de la Univ. Cayetano",
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 0
		},
		{
			titulo: "Farmacia Puente Piedra",
			coordenadas: {
				longitud: -11.865819,
				latitud: -77.077179
			},
			telefono: {
				numero: "549-2760",
				formateado: "tel:+015492760",
			},
			direccion: {
				ubicacion: "Av. Miguel Grau 253(Ex Saenz Peña) - Puente Piedra",
				referencias: "A media cuadra de la Av. Juan Lecaros",
			},
			horario: "8:00 am - 7:00pm de Lunes - Viernes </br> 8:00 am - 6:00pm de Sábados",
			delivery: 0
		}
	]

	function mostrarMapa(numSede) {
		var datosSede = sedes[numSede]

		$('#boton-llamar').attr("href", datosSede.telefono.formateado);
		$('.flecha').css('display', 'block');
		$('.salirahora').css('display', 'none');
		$('#horario-texto').html(datosSede.horario);
		$('#delivery-texto').html(datosSede.delivery == 1 ? "Sí" : "No");
		$('#texto-referencias').html(datosSede.direccion.referencias)
		$('#opcion-actual').text(datosSede.titulo);
		$('#titulo-farmacia').text(datosSede.titulo);
		$('#texto-numero').text(datosSede.telefono.numero);
		$('#texto-direccion').text(datosSede.direccion.ubicacion);
		$("#contenido-farmarcia").animate({
			opacity: 0,
			height: "0px"
		}, 500, function () {
		});

		var mapOptions = {
			center: new google.maps.LatLng(datosSede.coordenadas.longitud, datosSede.coordenadas.latitud),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var place = new google.maps.LatLng(datosSede.coordenadas.longitud, datosSede.coordenadas.latitud);
		marker = new google.maps.Marker({
			position: place,
			title: "Convet",
			map: map,
			icon: image
		});
	}

	//Mapa 1
	$('#sede-1').on("click", function () { mostrarMapa(0) });
	//Mapa 2
	$('#sede-2').on("click", function () { mostrarMapa(1) });
	//Mapa 3
	$('#sede-3').on("click", function () { mostrarMapa(2) });
	//Mapa 4
	$('#sede-4').on("click", function () { mostrarMapa(3) });
	//Mapa 5
	$('#sede-5').on("click", function () { mostrarMapa(4) });
	//Mapa 6
	$('#sede-6').on("click", function () { mostrarMapa(5) });
	//Mapa 7
	$('#sede-7').on("click", function () { mostrarMapa(6) });
	//Mapa 8
	$('#sede-8').on("click", function () { mostrarMapa(7) });
	//Mapa 9
	$('#sede-9').on("click", function () { mostrarMapa(8) });
	//Mapa 10
	$('#sede-10').on("click", function () { mostrarMapa(9) });


});
