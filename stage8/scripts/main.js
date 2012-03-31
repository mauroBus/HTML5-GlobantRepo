

require.config({
	paths : {
            jQuery : 'libs/jquery/jquery',
            DragNDrop: 'dragNdrop',
            GeoLocation: 'geolocation',
            RunCode: 'scripts',
            WebSocket: 'websocket',
            CacheApi: 'cacheApi'
        }
});




require( [
        'order!jQuery',
        'DragNDrop',
	'GeoLocation',
        'RunCode',
        'WebSocket',
        'CacheApi'
	],
    function($, DragNDrop, GeoLocation, RunCode, WebSocket, CacheApi) {
        require(['domReady!'], function (doc) {
            console.log('running aplication...');
            
        })
    }
);