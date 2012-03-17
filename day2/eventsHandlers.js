/*

		SCRIPTS PARA LA GENERACIÓN DE EVENTOS (EVENT HANDLERS...)


*/

			//
			// pagina cargada.
			//
			$('#page1').on( 'pageinit', function(event){
				alert("Bienvenido... (Pagina cargada correctamente)");
				$('#alias').focus();
				$('#alias').select();
			});
		
		
			//
			// click en el boton de post:
			//
			$('#postButton').on( "click", function(event){
				$.mobile.showPageLoadingMsg();
				postFunc($('#alias').val(), '#stage');
				//setTimeout("$.mobile.hidePageLoadingMsg()",2500);
				//$.mobile.pageLoading();
			});
			
			
			//
			// GetTop Movies
			//
			$('#BotonGetTopMovies').on( 'vclick', function(event){
						//getTopMovies("#topMoviesDiv");
						getTopMovies("#moviesList");
			});


			
			//
			// Evento para ocultar el loading cuando se presiona ESC
			//
			$(document).keyup(function(event) {
				//if (event.keyCode == 13) { $.mobile.hidePageLoadingMsg(); }     // enter
				if (event.keyCode == 27) { //esc
					$.mobile.hidePageLoadingMsg();
			 	}
			});
			
			
			//
			// EventHandler para mostrar la info de una peli en el dialog ... 
			//			
			$('.mli').live("click", function(event) {
									
									
									$('#movie-boxart').html( '<img src="'+$(this).data('li-boxart')+' "data-inline="true" </img>' );
									console.log($(this).data('li-boxart'));
									
									$('#movieName').html( '<p><b>'+$(this).data('li-name')+'</b></p>' );
									//console.log($(this).data('li-name'));
									
									$('#movie-data').html( $(this).data('li-data') );
							}
			);
			
			
			
			