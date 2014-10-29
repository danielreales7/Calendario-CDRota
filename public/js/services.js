(function (){
	angular.module('calendario.services', [])

		.factory('partidoService', ['$http', '$q', '$filter', '$window', function($http, $q, $filter, $window){
			var normalize = $filter('normalize'); //Llamamos a nuestra función normalize declarada en los filtros
			var localStorage = $window.localStorage;

			function all(){
				var deferred = $q.defer();

				$http.get('/partidos.json')
					.success(function(data){
						deferred.resolve(data);
					});

				return deferred.promise;
			}

			function byName(jornada){
				jornada = normalize(jornada); //Vamos a normalizar las jornadas en este caso
				var deferred = $q.defer();

				all().then(function(data){
					var results = data.filter(function (equipos){
						return normalize(equipos.jornada) === jornada;
					});

					if(results.length > 0){
						deferred.resolve(results[0]);
					}else{
						deferred.reject();
					}
				});

				return deferred.promise;
			}

			function saveComment(jornada, comment){
				var comments = getComments(jornada);
				
				comments.push(comment);
				localStorage.setItem(jornada, JSON.stringify(comments));
			}

			function getComments(jornada){
				var comments = localStorage.getItem(jornada);

				if(!comments){
					comments = [];
				}else{
					comments = JSON.parse(comments);
				}

				return comments;
			}

			return{
				all: all,
				byName: byName,
				saveComment: saveComment,
				getComments: getComments
			};
		}]);
})();