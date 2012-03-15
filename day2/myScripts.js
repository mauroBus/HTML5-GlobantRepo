

var postFunc = function(name){
	var url = "api/dispatcher.php";
//	console.log(name);
	$.post(url, {service: 'welcome.hello', params: {"name": String(name)}}, 
		function(data){
			$("#stage").html(data);
			//
			//highlight the name: 
			//
			highName("stage", name);
			}
		);
		
		// Detectar y tratar Error:
		// (si por ej. la url no existe...)
		$("#stage").ajaxError(
			function(event, request, settings ){
				$(this).html("<h1>Error en el llamado al servidor remoto</h1>");
				$('#stage').css({ 'fontSize' : '10px', 'color' : 'red' });
			}
		);
}
		
	



//
// HighLight the name in a div.
//
var highName = function(divId, userName) {
	var divHTML = $('#'+String(divId)).html();
	var startPos = divHTML.indexOf(userName);
	var newHhtml = divHTML.substring(0,startPos) + "<u> <b>" + divHTML.substring(startPos, (userName.lenght)) + "</b> </u>" + divHTML.slice(startPos+(userName.lenght),0);
	$('#'+String(divId)).html(newHhtml);
}




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


var functionExample = function() {
	return "example asd";
}
