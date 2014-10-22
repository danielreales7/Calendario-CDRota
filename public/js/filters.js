(function (){
	angular.module('calendario.filters', [])
		.filter('normalize', function(){
			return function(input){
				if (!input) return "";
				
				input = input
						.replace(/\W+/g, "");
				return input.toLowerCase();
			}
		})

		.filter('imageify', ['$filter', function($filter){
			return function(input){
				var url = "img/" + $filter('normalize')(input) + ".jpg";
				return url;
			};
		}]);
})();