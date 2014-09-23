(function (){
	var app = angular.module('calendario', [
		'ngRoute',
		'calendario.controllers',
		'calendario.directives',
		'calendario.filters'
	]); //Nuestro módulo ahora mismo no tiene dependencias por eso ponemos []
	//Creamos nuestra inyección de dependencias $routeProvider
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/partidos.html',
				controller: 'EquiposController',
				controllerAs: 'equiposCtrl'
			})
	}]);
})();