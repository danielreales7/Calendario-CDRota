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

		.directive('partidoComments', ['partidoService', function(partidoService){
			return {
				restrict: 'E', //Esta directiva quiere decir que estamos creando un elemento HTML
				templateUrl: 'partials/partido-comments.html',
				scope: {
					jornada: '@jornada'
				},
				link: function(scope, element, attributes){
					attributes.$observe('jornada', function(value){
						if(value){
							scope.jornada = value;
							scope.comments = partidoService.getComments(value);
						}
					});
				},
				controller: function($scope){
					$scope.comments = partidoService.getComments($scope.jornada); //Vamos a inicializar un arreglo donde vamos a ir guardando los comentarios
					$scope.comment = {}; //Aquí vamos almacenar los elementos del formulario
					$scope.show = false; //Con esto vamos a saber si nuestro panel se está mostrando o está oculto
					// Con esta función estamos cambiando de estado un valor Booleano
					$scope.toggle = function(){
						$scope.show = !$scope.show;
					};

					$scope.anonymousChanged = function(){
						if($scope.comment.anonymous){
							$scope.comment.email = "";
						}
					};

					$scope.addComment = function(){
						$scope.comment.date = Date.now();
						partidoService.saveComment($scope.jornada, $scope.comment);
						$scope.comments = partidoService.getComments($scope.jornada);
						$scope.comment = {};
					};
				}
			};
		}]);
})();