// JavaScript Document
$(document).ready(function(e) {
	alert("El documento esta listo")
	
	
	document.addEventListener("deviceready", function(){
	
	$(' .btn').tap(function(){
	var boton=(($(this).attr('class')).split(' '))[1];	
	
	switch(boton)
	{
		case 'b1':
			navigator.notificacion.beep(1);
		break; 
		case 'b2':
			navigator.notificacion.beep(2);
		break; 
		case 'b3':
		navigator.notificacion.beep(3);
		break; 
		case 'b4':
		navigator.notificacion.beep(4);
		break; 
		case 'v1':
		navigator.notificacion.vibrate(500);
		break; 
		case 'v2':
		navigator.notificacion.vibrate(500);
		break; 
		
	
	}
	
	
	});
	
	
	
	
	$('#derecha').swiperight(function(){
		navigator.notification.alert("Deslizo a la derecha".function(){},"Practica 1","Aceptar");
	});
	
	
	
	
	
	},false);
	
	
	});
	