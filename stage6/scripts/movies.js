
  
//  Backbone.sync = function(method, model, success, error){ 
//    success();
//  }
  
  //
  // Movie Model:
  //
  var Movie = Backbone.Model.extend({
    defaults: {
      title: 'Star Wars: Episode V: The Empire Strikes Back',
      year: '1980',
      synopsis: 'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda.'
    }
  });
  
  
  
  //
  //  Movie Collection: 
  //
  var MovieList = Backbone.Collection.extend({
    model: Movie
  });




  //
  //  Single Movie View:
  //
  var MovieView = Backbone.View.extend({
    tagName: 'li',     

    events: { 
      'click span.edit':  'edit',
      'click span.delete': 'remove'
    },    
    
    initialize: function(){
      _.bindAll(this, 'render', 'unrender', 'edit', 'remove');

      this.model.bind('change', this.render);
      this.model.bind('remove', this.unrender);
      this.model.bind('edit', this.edit);
    },
    
    render: function(){
    	var model = this.model;
    	var elem = this.el;
    	require( ['MovieTemplate'], function(MovieTemplate) {
        var htmlM = Mustache.render( MovieTemplate.getTemplate(), model.toJSON() );
        $(elem).html(htmlM);
     });
    	  return this;
    },
    
    unrender: function(){
      $(this.el).remove();
    },

    edit: function(){
      var editted = {
        title: prompt('Insert New Title: ', this.model.get('title')),
        year: prompt('New Year: ', this.model.get('year')),
        synopsis: prompt('New Synopsis: ', this.model.get('synopsis'))
      };
      this.model.set(editted);
    },

    remove: function(){
      this.model.destroy();
    }
  });
  
  
  
  
  //
  //  Movies Collection View: 
  //
  var MovieListView = Backbone.View.extend({
    el: $('#movie-list'),
    events: {
//      'click #add': 'addMovie'
    },
    
    initialize: function(){
      _.bindAll(this, 'render', 'addMovie', 'addNewMovie', 'appendMovie');
      
      this.collection = new MovieList();
      this.collection.bind('add', this.appendMovie);
      
      $('#add').on('click', this.addMovie);
      
      this.render();
    },
    
    render: function(){
    	console.log('Rendering movie list...');
      var self = this;
       _(this.collection.models).each( function(movie){
           	self.appendMovie(movie);
       }, this);
    },
    
    addMovie: function(){
      var movie = new Movie({
      	title: $('#titleText').val(),
      	year: $('#yearText').val(),
      	synopsis: $('#synText').val(),
      });
      this.collection.add(movie);
    },
    
    addNewMovie: function(movie) {
      this.collection.add(movie);
    },
    
    appendMovie: function(movie){
      var movieView = new MovieView({
        model: movie
      });
      $('ul', this.el).append( movieView.render().el );
    }
  });


  
  
  
  var AddMovieView = Backbone.View.extend({
     //tagName: 'div', 
     el: $('#addMoviePage'),
     
     events: {
      'click #addMovieButt': 'addMovie'
     },
     
     initialize: function(){
     	  _.bindAll(this, "addMovie", "render");
		
     	  //$('#addMovieButt').on('click', this.addMovie);
     },

     render: function() {
        console.log('addmovieview rendered')
     },

     
     addMovie: function(){
     		console.log('changing page...');
     	  $.mobile.changePage( this.el, { transition: "slideup"} );
     }
     
  });
  
  

