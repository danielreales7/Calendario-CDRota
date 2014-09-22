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

	app.controller('CommentsController', function(){
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
			this.comments.push(this.comment);
		};
	});

	app.filter('imageify', function(){
		return function(input){
			var url = "img/" + input.toLowerCase() + ".jpg";
			return url;
		}
	});
})();