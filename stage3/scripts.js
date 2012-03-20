






var PLAY = 'play';
var STOP = 'stop';




//
// La clase ArrayList describe el funcionamiento de un arreglo utilizado para administrar 
//	la lista de observers en las movies.
//
function ArrayList()
{
	this.aList = []; //initialize with an empty array
	this.lenght = function() {
		return this.aList.length;
	}
        
	this.add = function( object ) {
		//Object are placed at the end of the array
		return this.aList.push( object );
	}

	this.getAt = function( index ) { //Index must be a number
		if( index > -1 && index < this.aList.length )
			return this.aList[index];
		else
		return undefined; //Out of bound array, return undefined
	}
        
	this.clear = function() {
		this.aList = [];
	}

	this.removeAt = function ( index ) { // index must be a number
		var m_count = this.aList.length;
		if ( m_count > 0 && index > -1 && index < this.aList.length ) {
			switch( index ) {
				case 0:
					this.aList.shift();
					break;
				case m_count - 1:
					this.aList.pop();
					break;
				default:
					var head   = this.aList.slice( 0, index );
					var tail   = this.aList.slice( index + 1 );
					this.aList = head.concat( tail );
					break;
			}
		}
	}

	this.insert = function ( object, index ) {
		var m_count = this.aList.length;
		var m_returnValue = -1;

		if ( index > -1 && index <= m_count ) {
			switch(index) {
				case 0:
					this.aList.unshift(object);
					m_returnValue = 0;
					break;
				case m_count:
					this.aList.push(object);
					m_returnValue = m_count;
					break;
				default:
					var head = this.aList.slice(0, index - 1);
					var tail = this.aList.slice(index);
					this.aList = this.aList.concat(tail.unshift(object));
					m_returnValue = index;
					break;
			}
		}
            
		return m_returnValue;
	}

	this.indexOf = function( object, startIndex ) {
		var m_count = this.aList.length;
		var m_returnValue = - 1;
            
		if ( startIndex > -1 && startIndex < m_count ) {
			var i = startIndex;
			while( i < m_count ) {
				if ( this.aList[i] == object ) {
					m_returnValue = i;
					break;
				}
				i++;
			}
		}
            
		return m_returnValue;
	}
        
        
	this.lastIndexOf = function( object, startIndex ) {
		var m_count = this.aList.length;
		var m_returnValue = - 1;
		
		if ( startIndex > -1 && startIndex < m_count ) {
			var i = m_count - 1;
			
			while( i >= startIndex ) {
				if ( this.aList[i] == object ) {
					m_returnValue = i;
					break;
				}
				i--;
			}
		}
		
		return m_returnValue;
	}

} // ArrayList








//
//  Clase Movie.
//
function Movie(newTitle) {
	var title = newTitle;
	var rating = 0;
	var id = 0;
	
	// creo la lista de observadores de eventos de tipo play y stop...
	var movieObservers = [];
	movieObservers[PLAY] = new ArrayList();
	movieObservers[STOP] = new ArrayList();
	
	
	var casting = [];
	
	
	
	this.getTitle = function() {
		return title;
	}
	this.setTitle = function(newTitle) {
		title = newTitle;
	}
	
	this.getRating = function() {
		return rating;
	}
	this.setRating = function(newRating) {
		rating = newRating;
	}

	this.getId = function() {
		return id;
	}
	this.setId = function(newId) {
		id = newId;
	}
	
	this.play = function() {
		console.log('playing: '+title);
		notify(PLAY);
	}
	this.stop = function() {
		console.log('stopping: '+title);
		notify(STOP);
	}
	

	
	
	//
	// Notifico el evento (PALY/STOP) a los observers añadidos a dicho evento:
	//
	var notify = function(topic) {
		var m_count = movieObservers[topic].lenght();
            	
		for( var i = 0; i < m_count; ++i ) {
			console.log('  _[notificando evento de '+topic+' en '+title+ ' a observador nro: '+i+']');
			movieObservers[topic].getAt(i).update(topic);
		}
	}
	
	//
	// Agrego un observador del evento "topic"
	//
	this.addObserver = function( observer, topic ) {
		if (topic === PLAY || topic === STOP )
			movieObservers[topic].add( observer );
		else 
			console.log('topic '+topic+' dont exist in the movie...');
	}

	
	//
	// (ejercicio 14) Método para agregar actores a la movie
	//
	this.setCast = function( cast ) {
		casting = cast;
	}
	this.getCast = function() {
		return casting;
	}

}





//
//  Clase Movie según patrón de diseño Module.
//
var movieModule = (function(){
	var title = '';
	var rating = 0;
	var id = 0;
	
	// Se crea la lista de observadores de eventos de tipo play y stop...
	var movieObservers = [];
	movieObservers[PLAY] = new ArrayList();
	movieObservers[STOP] = new ArrayList();
	
	
	
	return { //exposed to public
		
		getTitle: function() {
			return title;
		},
		setTitle: function(newTitle) {
			title = newTitle;
		},
	
		getRating: function() {
			return rating;
		},
		setRating: function(newRating) {
			rating = newRating;
		},

		getId : function() {
			return id;
		},
		setId: function(newId) {
			id = newId;
		},
	
		play: function() {
			console.log('playing: '+title);
			notify(PLAY);
		},
		stop: function() {
			console.log('stopping: '+title);
			notify(STOP);
		},



		//
		// Se agrega un observador del evento "topic"
		//
		addObserver: function( observer, topic ) {
			if (topic === PLAY || topic === STOP )
				movieObservers[topic].add( observer );
			else 
				console.log('topic '+topic+' dont exist in the movie...');
		}
	}
	
	
	
	//
	// Se notifica el evento (PALY/STOP) a los observers añadidos a dicho evento:
	//
	function notify(topic) {
		var m_count = movieObservers[topic].lenght();
            	
		for( var i = 0; i < m_count; ++i ) {
			console.log('  _[notificando evento de '+topic+' en '+title+ ' a observador nro: '+i+']');
			movieObservers[topic].getAt(i).update(topic);
		}
	}
	
	
}() );







//
// Observador de películas.
//	movieObs: movie to subscribe.
//	topics: array de topics to subscribe.
//
function MovieObserver(movieObs, topics) {
	var movie = movieObs;
	
	var tpsCount = topics.length;
	var i=0;
	while ( i < tpsCount ) {
		console.log( 'adding observer for ' + topics[i] +' event, to movie: ' + movie.getTitle() );
		movie.addObserver( this, topics[i] );
		++i;
	}

	this.update = function(topic) {
		if (topic === PLAY)
			console.log( "    --> Observer says: playing " + movie.getTitle() );
		if (topic === STOP)
			console.log( "    --> Observer says: stopping " + movie.getTitle() );
	}
	
}








//
// Clase DownloadableMovie que hereda de Movie.   (Ej 8)
//
DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor=DownloadableMovie;
function DownloadableMovie(title){ 
	this.setTitle(title);
}

DownloadableMovie.prototype.download = function() {
	console.log("Downloading movie: "+this.getTitle()+", please wait... ");
	MovieDownloader.getInstance().download(this);
}


//
// Singleton MovieDownloader (Ej 9)
//
var MovieDownloader = (function(){
	var instantiated;
	
	function init (){
		return {
			download: function(movie){
				if ( typeof movie == Movie || DownloadableMovie )
					console.log( ' --- Downloading '+ movie.getTitle() + ' <in Singleton "MovieDownloader">' );
				else 
					console.log( ' --- ERROR Downloading '+ movie.getTitle() + ' <in Singleton "MovieDownloader>"' );
			}
		};
	}
	
	return {
		getInstance: function(){
			if ( !instantiated ){
				instantiated = init();
			}
			return instantiated;
		}
	};
})();








//
// SocialMixin  (---ejercicio 10)
//
var SocialMixin = function() {}

SocialMixin.prototype = {
	share: function(friendName) {
		console.log('Sharing ' + this.getTitle() + ' with ' + friendName + ' <from Mixin>');
	},
	like: function(friendName) {
		console.log('Like -> '+this.getTitle()+'from Mixin.');
	}
}




// Augment existing 'class' with a method from another
function augment( receivingClass, givingClass ) {
	// only provide certain methods
	if ( arguments[2] ) {
		for (var i=2, len=arguments.length; i<len; i++) {
			receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
		}
	}
	// provide all methods
	else {
		for ( var methodName in givingClass.prototype ) {
			/* check to make sure the receiving class doesn't
			   have a method of the same name as the one currently
			   being processed */
			if ( !receivingClass.prototype[methodName] ) {
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}
		}
	}
}





//
// Ej 12. Crear clase Actor
//
var Actor = function() {
	var actorName, biography;
	
	
	// ej 13 (adding getters)
	this.getName = function() {
		return actorName;
	}
	this.setName = function(actName) {
		actorName = actName;
	}
	this.getBiography = function() {
		return biography;
	}
	this.getBiography = function(bio) {
		biography = bio;
	}
	this.toString = function() {
		if (biography) 
			return String(actorName + ' - ' + biography);
		else
			return actorName;
	}
}





//
// función utilizada para realizar prueba de las clases desarrolladas.
//
var doSmthing = function() {
	
	/*
		Istancio algunas peliculas (punto 2):
	*/
	console.log('\n______________________________________SIN_OBSERVERS____________________________________');

	var indi = new Movie('Indiana Jones and the Last Crusade');
	indi.setRating(10);
	indi.setId(1);

	var stars = new Movie('Star Wars: Episode VI: Return of the Jedi');
	stars.setRating(9);
	stars.setId(2);

	var cops = new Movie('Cops: 20th Season Anniversary Edition');
	cops.setRating(8);
	cops.setId(3);
	
	indi.play();
	indi.stop();
	stars.play();
	stars.stop();
	cops.play();
	cops.stop();

	

	/*
		Declaro algunos observers de movies (Puntos 3, 4, 5 y 6)
	*/
	console.log('\n______________________________________CON_OBSERVERS_______________________________________');

	movieModule.setTitle("Terminator<Movie-class-with-Module>");
	
	
	var indiObs = new MovieObserver(indi, [PLAY, STOP]);
	var starsObs = new MovieObserver(stars, [PLAY, STOP]);
	var copsObs = new MovieObserver(cops, [PLAY, STOP]);
	var termiObs = new MovieObserver(movieModule, [STOP]);
	var termiObs2 = new MovieObserver(movieModule, [STOP]);
	
	indi.play();
	movieModule.play();
	movieModule.stop();



	/*
		download movies (Punto 8)
	*/
	console.log('\n_________________________________DOWNLOADING______________________________________________');
	
	var downMovie = new DownloadableMovie("The Way");
	downMovie.download();
	downMovie.play();
	
	
	console.log('\n__________________________________MIXIN___________________________________________________');
	
	augment( Movie, SocialMixin, 'share', 'like' );
	var ironman2 = new Movie('Iron Man 2');
	ironman2.share('V. Rivas');
	
	
	console.log('\n__________________________________ACTORS__________________________________________________');
	harry = new Actor(); harry.setName('Harrison Ford');
	sean = new Actor(); sean.setName('Sean Connery');
	alison = new Actor(); alison.setName('Alison Doody');
	mark = new Actor(); mark.setName('Mark Hamill');
	david = new Actor(); david.setName('David Prowse');
	
	robert = new Actor(); robert.setName('Robert Downey Jr.');
	jeff = new Actor(); jeff.setName('Jeff Bridges');
	gwyn = new Actor(); gwyn.setName('Gwyneth Paltrow');

	
	indi.setCast( [harry, sean, alison] );
	stars.setCast( [mark, david] );
	ironman2.setCast( [robert, jeff, gwyn] );
	
	
	console.log('movie: ' + ironman2.getTitle() + ' | staff: ' + ironman2.getCast() );
	console.log('movie: ' + indi.getTitle() + ' | staff: ' + indi.getCast() );
	console.log('movie: ' + stars.getTitle() + ' | staff: ' + stars.getCast() );
}


