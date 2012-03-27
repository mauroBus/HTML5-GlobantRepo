/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define([ 'Mustache', 'MovieTemplate', 'Movies'], function( Movies ) {
        return {
            run: function () {
            	var movieListView = new MovieListView();
            	var addMovie = new AddMovieView({el:'#addMoviePage'});
            	
            	var indi = new Movie( {
            		title: 'Indiana Jones and the Raiders of the Lost Ark',
            		year: '1981',
            		synopsis: 'When Indiana Jones is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.'
            	});
            	
            	var china = new Movie( {
            		title: 'China Beach: Season 1',
            		year: '1988',
            		synopsis: 'This Emmy Award-winning drama series views the horrors of the Vietnam War as it unfolds in the late 1960s through the eyes of the medics and nurses.'
            	});
            	
            	var way = new Movie( {
            		title: 'The Way',
            		year: '1982',
            		synopsis: "This harsh drama provides a savage indictment of Turkish sociopolitical oppression in the early 1980s. It follows five convicts on a week's leave from jail to visit loved ones, each facing heartbreak during their time at home."
            	});
            	
            	
            	movieListView.addNewMovie(indi);
               movieListView.addNewMovie(china);
               movieListView.addNewMovie(way);
         	}
    	  }
});
	
