
/*

		SCRIPTS DE FUNCIONES para day 2-3

*/




var postFunc = function(name, divId){
	var url = "api/dispatcher.php";
//	console.log(name);
	$.post(url, {service: 'welcome.hello', params: {"name": String(name)}}, 
		function(data){
			$(divId).html(data);
			//
			//highlight the name: 
			//
			highName(divId, name);
			}
		);
		
		// Detectar y tratar Error:
		// (si por ej. la url no existe...)
		$(divId).ajaxError(
			function(event, request, settings ){
				$(this).html("<h1>Error en el llamado al servidor remoto</h1>");
				$(divId).css({ 'fontSize' : '10px', 'color' : 'red' });
			}
		);
}
		
	



//
// HighLight the name in a div.
//
var highName = function(divId, userName) {
	var divHTML = $(divId).html();
	var startPos = divHTML.indexOf(userName);
	var newHhtml = divHTML.substring(0,startPos) + "<u> <b>" + divHTML.substring(startPos, (userName.lenght)) + "</b> </u>" + divHTML.slice(startPos+(userName.lenght),0);
	$(divId).html(newHhtml);
}



/*
//
// Get the top of the movies
//
var getTopMovies = function() {
	var url = "api/dispatcher.php";
//	$.get(url, service: 'movie.getTop', function(response) { console.log(response);}
//		);
	$.get(url, { 'service': "movie.getTop", params: {'name': $('#alias').val()} },
		function(data){
			$('#floatedDiv').show('slow');
			$('#floatedDiv').css('background','red');
			console.log(data);
			$('#floatedDiv').html(data);
	   	}, "jsonp"
	);
}
*/


//
// Muestra las peliculas almacenadas en el objeto "movies" en el div (pasado por parametro)...
//
var showMovies = function(movies, div){
    var rta = '';//<ol data-role="listview" data-theme="a">';
    var i;
    for (i=0; movies[i]!=null; ++i) {
            rta += '<li> <a class=mli id=mli'+ i +' href="#dialogMovies" data-rel="dialog" data-transition="flip"  data-inline="true"> ';
            rta += '<img class=mimg src="' + movies[i].BoxArt.SmallUrl + '"/>';
            rta += '<h2>' + movies[i].Name + '</h2>';
            rta += '<h3>Year: ' + movies[i].ReleaseYear + '</h4>';
            rta += '<h4>' + movies[i].ShortSynopsis + '</h3>';
            rta += '</a> </li>';
    }
    $(div).html(rta);
    $(div).listview('refresh');
    
    
    //
    //  Asocio un Data() con la info de la synopsis para permitir obtenerla 
    //       al hacer click en la movie de la lista:
    //
    var l = 0;
    var elem;
    while (movies[l]!=null) {
    		elem = $('#mli'+l);
    		elem.data('li-name', movies[l].Name );
    		elem.data('li-data', movies[l].Synopsis );
    		elem.data('li-boxart', movies[l].BoxArt.LargeUrl);
    		//elem.data( 'masdatos', {'li-name': movies[l].Name , 'li-data': movies[l].ShortSynopsis, 'li-boxart': '<a href=' + movies[l].BoxArt.LargeUrl + '/>' } );
    		++l;
    }
    
}


//
// Get the top of the movies
//
var getTopMovies = function(div) {
        var url = "api/dispatcher.php";
        $.ajax({
            url: url,
            type: "GET",
            data: { service: 'movie.getTop',params: {'name': 'nnnull'}},
            dataType: 'json',
            success: function(movies){
                showMovies(movies, div);
            }
        });

}

