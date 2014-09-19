(function (){
	var app = angular.module('calendario', []); //Nuestro módulo ahora mismo no tiene dependencias por eso ponemos []

	app.controller('EquiposController', function(){
		this.equipos = {
			jornada: 1,
			equipoLocal: 'Chipiona CF',
			equipoVisitante: 'CD Rota',
			resultado: 'por concretar',
			goles: ["David Villalba"]
		};
	});
})();