(function (){
	angular.module('calendario.controllers', [])

		.controller('CalendarioController', ['$scope', 'partidoService', function($scope, partidoService){
			partidoService.all().then(function(data){
				$scope.partidos = data;
			});
		}])

		.controller('EquiposController', ['$scope', '$routeParams', 'partidoService', function($scope, $routeParams, partidoService){
			var jornada = $routeParams.jornada; // $routeParams.jornada quiere decir que en el archivo donde estan las rutas app.js la ruta '/partidos/:jornada' contiene el mismo nombre que este
			$scope.equipos = {};

			partidoService.byName(jornada)
				.then(function(data){
					$scope.equipos = data;
				});
		}])
		
		.controller('TabsController', function(){
			this.tab = 1;

			this.selectTab = function(tab){
				this.tab = tab;
			};
		});
})();