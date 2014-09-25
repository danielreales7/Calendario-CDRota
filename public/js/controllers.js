(function (){
	angular.module('calendario.controllers', [])

		.controller('CalendarioController', ['$scope', 'partidoService', function($scope, $partidoService){
			partidoService.all().then(function(data){
				$scope.equipos = data;
			});
		}])

		.controller('EquiposController', ['$scope', function($scope){
			$scope.equipos = {
				jornada: 1,
				equipoLocal: 'Chipiona CF',
				equipoVisitante: 'CD Rota',
				resultado: 'por concretar',
				goles: ["David Villalba"],
				ejemplo: ["Primer Balón","Segundo Balón","Tercer Balón"]
			};
		}])
		
		.controller('TabsController', function(){
			this.tab = 1;

			this.selectTab = function(tab){
				this.tab = tab;
			};
		});
})();