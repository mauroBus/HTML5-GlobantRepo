

//main.js contents
//Pass a config object to require

/*
require.config({
    "packages": ["scripts/movie.js", "scripts/director.js"]
});
*/


require( [
//	"order!scripts/jquery.js",
//	"order!scripts/jquerymobile.js",
	"scripts/movie.js",
	 "scripts/director.js"
	],

 function(Movie, Director) {
	
	//
	// Ejercicios 1 y 2:
	//
//	   Código comentado debido a que se implementó los módulos como return {function() ...} para poder crear instancias.
//	Movie.setTitle('Stars-Wars');
//	Director.setQuotes('This movie is a crap');
//	console.log( Movie.getTitle() );
//	Director.speak();
	
	
	//
	// Exercise 5:
	//
	var alien = new Movie;
	alien.setTitle("Alien Vs Predator");
	console.log( 'movie: ' + alien.getTitle());
	
	var RidleyScott = new Director('Ridley Scott'); //sets name in constructor
	RidleyScott.setQuotes( ['Cast is everything.', 'Do what you have´t'] );
	
	alien.setDirector( RidleyScott );
	alien.getDirector().speak();
	
	
	StevenSpilberg = new Director('Steven Spilberg');
	StevenSpilberg.setQuotes(['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote10', 'quote11', ]);
	StevenSpilberg.speak();
});

