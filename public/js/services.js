(function (){
	angular.module('calendario.services', [])

		.factory('partidoService', ['$http', '$q', function($http, $q){
			function all(){
				var deferred = $q.defer();

				$http.get('/partidos.json')
					.success(function(data){
						deferred.resolve(data);
					});

				return deferred.promise;
			}

			return{
				all: all
			};
		}]);
})();