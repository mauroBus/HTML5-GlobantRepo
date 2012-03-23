
require.config({
	paths : {
            //jQuery : 'scripts/jquery/jquery.js',
            //jQueryMobile : 'scripts/jquery/jquery.mobile-1.0.1.min.js',
            Mustache: 'mustache',
            Underscore: 'underscore',
            jSmart: 'smart-2.7.min',
            ProfTemplate: '../templates/profTemplate',
            Myprofile: '../profile/myprofile.json'
        }
});




require( [
        'domReady',
	'app'
	],
    function(dr, App) {
        require(['domReady'], function (doc) {
            console.log('running MAIN');
            App.run();
        }
    )}
);

