

//
// Movie inside a Module (exercise 2) - Movie depends of Director (exercise 3)
//

define( ['scripts/director.js'], function (director) {
	
	return function Movie() {
		var title = 'noTitle';
		var rating = -1;
		var id = -1;
		var director = 'without director';
	
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
	
	
		this.getDirector = function() {
			return director;
		},
		this.setDirector = function(newDir) {
			director = newDir;
		}
	
		//
		// Método para agregar actores a la movie
		//
		this.setCast = function( cast ) {
			casting = cast;
		}
		this.getCast = function() {
			return casting;
		}
	}

});

