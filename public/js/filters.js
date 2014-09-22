(function (){
	angular.module('calendario.filters', [])

		.filter('imageify', function(){
			return function(input){
				var url = "img/" + input.toLowerCase() + ".jpg";
				return url;
			}
		});
})();