
require.config({
	paths : {
				'text': 'text',
				'domReady': 'domReady',
            'jQuery' : "libs/jquery/jquery",
//            'jQueryMobile': "libs/jquery/jquery.mobile-1.0.1.min",
            'Underscore': "libs/underscore",
            'Backbone': "libs/backbone",
            'Mustache': "libs/mustache",
            'MovieTemplate': 'templates/movieTemplate',
            'Movies': "movies",
            'App': "app"
        },
        //baseUrl: 'ejempls/stage6'
});




require( [  'domReady', 'App' ],
    function(  dr, App ) {
        require(['domReady!'], function (doc) {
            console.log('running MAIN');
            App.run();
        })
    }
);

