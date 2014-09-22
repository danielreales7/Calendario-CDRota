(function (){
	angular.module('calendario.directives', [])

		.directive('partidoEquipos', function(){
			return {
				restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
				//Si fuera 'A' estaría declarada como atributo y se pondría en el html <div partidos-equipos></div>
				templateUrl: 'partials/partido-equipos.html'
			};
		})

		.directive('partidoImages', function(){
			return {
				restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
				templateUrl: 'partials/partido-images.html'
			};
		})

		.directive('partidoResultado', function(){
			return {
				restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
				templateUrl: 'partials/partido-resultado.html'
			};
		})

		.directive('partidoGoles', function(){
			return {
				restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
				templateUrl: 'partials/partido-goles.html'
			};
		})

		.directive('partidoEjemplo', function(){
			return {
				restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
				templateUrl: 'partials/partido-ejemplo.html'
			};
		})

		.directive('partidoComments', function(){
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
})();