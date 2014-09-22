(function (){
	var app = angular.module('calendario', []); //Nuestro módulo ahora mismo no tiene dependencias por eso ponemos []

	app.controller('EquiposController', function(){
		this.equipos = {
			jornada: 1,
			equipoLocal: 'Chipiona CF',
			equipoVisitante: 'CD Rota',
			resultado: 'por concretar',
			goles: ["David Villalba"],
			ejemplo: ["Primer Balón","Segundo Balón","Tercer Balón"]
		};
	});

	app.controller('TabsController', function(){
		this.tab = 1;

		this.selectTab = function(tab){
			this.tab = tab;
		};
	});

	app.directive('partidoEquipos', function(){
		return {
			restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
			//Si fuera 'A' estaría declarada como atributo y se pondría en el html <div partidos-equipos></div>
			templateUrl: 'partials/partido-equipos.html'
		};
	});

	app.directive('partidoImages', function(){
		return {
			restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
			templateUrl: 'partials/partido-images.html'
		};
	});

	app.directive('partidoResultado', function(){
		return {
			restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
			templateUrl: 'partials/partido-resultado.html'
		};
	});

	app.directive('partidoGoles', function(){
		return {
			restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
			templateUrl: 'partials/partido-goles.html'
		};
	});

	app.directive('partidoEjemplo', function(){
		return {
			restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
			templateUrl: 'partials/partido-ejemplo.html'
		};
	});

	app.directive('partidoComments', function(){
		return {
			restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
			templateUrl: 'partials/partido-comments.html',
			controller: function(){
				this.comments = []; //Vamos a inicializar un arreglo donde vamos a ir guardando los comentarios
				this.comment = {}; //Aquí vamos almacenar los elementos del formulario
				this.show = false; //Con esto vamos a saber si nuestro panel se está mostrando o está oculto
				// Con esta función estamos cambiando de estado un valor Booleano
				this.toggle = function(){
					this.show = !this.show;
				};

				this.anonymousChanged = function(){
					if(this.comment.anonymous){
						this.comment.email = "";
					}
				};

				this.addComment = function(){
					this.comment.date = Date.now();
					this.comments.push(this.comment);
					this.comment = {};
				};
			},
			controllerAs: 'cmtsCtrl'
		};
	});

	app.filter('imageify', function(){
		return function(input){
			var url = "img/" + input.toLowerCase() + ".jpg";
			return url;
		}
	});
})();