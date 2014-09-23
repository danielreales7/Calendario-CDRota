(function (){
	angular.module('calendario.filters', [])
		.filter('normalize', function(){
			return function(input){
				input = input
						.replace(/\W+/g, '');
				return input.toLowerCase();
			}
		})

		.filter('imageify', function(){
			return function(input){
				var url = "img/" + input.toLowerCase() + ".jpg";
				return url;
			}
		});
})();