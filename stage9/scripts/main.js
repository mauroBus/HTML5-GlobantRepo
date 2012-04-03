

require.config({
	paths : {
            //jQuery : 'libs/jquery/jquery',
            DragNDrop: 'dragNdrop',
            GeoLocation: 'geolocation',
            RunCode: 'scripts',
            WebSocket: 'websocket'
        }
});




require( [
//        'order!jQuery',
        'DragNDrop',
        'GeoLocation',
        'RunCode',
        'WebSocket'
	],
    function( DragNDrop, GeoLocation, RunCode, WebSocket, CacheApi) {
        require(['domReady!'], function (doc) {
            console.log('running aplication...');
            
        })
    }
);