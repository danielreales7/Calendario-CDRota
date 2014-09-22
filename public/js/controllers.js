(function (){
	angular.module('calendario.controllers', [])

		.controller('EquiposController', function(){
			this.equipos = {
				jornada: 1,
				equipoLocal: 'Chipiona CF',
				equipoVisitante: 'CD Rota',
				resultado: 'por concretar',
				goles: ["David Villalba"],
				ejemplo: ["Primer Balón","Segundo Balón","Tercer Balón"]
			};
		})
		
		.controller('TabsController', function(){
			this.tab = 1;

			this.selectTab = function(tab){
				this.tab = tab;
			};
		});
})();