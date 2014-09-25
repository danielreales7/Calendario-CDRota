(function (){
	angular.module('calendario.controllers', [])

		.controller('CalendarioController', ['$scope', 'partidoService', function($scope, partidoService){
			partidoService.all().then(function(data){
				$scope.partidos = data;
			});
		}])

		.controller('EquiposController', ['$scope', 'partidoService', function($scope, partidoService){
			$scope.equipos = {};

			partidoService.byName('1')
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