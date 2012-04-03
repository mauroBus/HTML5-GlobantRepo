
(function() {
    
    var websocket;
    
    if (window.MozWebSocket) {
       // Firefox.
    	 window.WebSocket = MozWebSocket;
  	 }
  	 
  	 
    
    /*
     *  Buttons for the web socket operation
     */
    
    var buttonWS = document.createElement('input');
    buttonWS.name="buttonWS";
    buttonWS.type="button";
    buttonWS.value="Conect Web Socket";
    
    var buttonSend = document.createElement('input');
    buttonSend.name="buttonSend";
    buttonSend.type="button";
    buttonSend.value="Send Message";
    
    var messageWS = document.createElement('input');
    messageWS.type="text";
    messageWS.value="Introduce a message to send...";
    
    
    document.getElementById('webSocket').appendChild(messageWS);
    document.getElementById('webSocket').appendChild(buttonWS);
    document.getElementById('webSocket').appendChild(buttonSend);
    
    
    buttonWS.addEventListener( 'click', function() {
        if (!websocket)
            wsDoConnect();
        else {
            console.log('web socket already created...');
        }
    });
    
    buttonSend.addEventListener( 'click', function() {
        if ( websocket )
            websocket.send( messageWS.value );
        else {
            console.log('Cannot send data. Web socket is not created...');
        }
    });
    
    
    
    
    
    /*
     * Web Socket
     */
    
    function wsDoConnect() {
        if ( window.WebSocket ){
            var wsUri = "ws://html5rocks.websocket.org/echo";
            //var wsUri = "ws://websocket.org/echo.html";
            websocket = new WebSocket( wsUri );
            websocket.onopen = function(evt) { wsOnOpen(evt) };
            websocket.onclose = function(evt) { wsOnClose(evt) };
            websocket.onmessage = function(evt) { wsOnMessage(evt) };
            websocket.onerror = function(evt) { wsOnError(evt) };
        } 
        else {
            alert('Error: ' + 'Your browser does not have native support for WebSocket.');
            return;
        }

        
        function wsOnOpen(evt) {
            $('#wsMessage').html("WEB SOCKET CONNECTED...");
        }
        
        function wsOnClose(evt) {
            $('#wsMessage').html("<span color='red'>DISCONNECTED </span>");
            websocket = null;
        }
        
        function wsOnMessage(evt) {
           $('#wsMessage').html("RESPONSE: " + evt.data);
        }
        
        function wsOnError(evt) {
            $('#wsMessage').html('ERROR: ' + evt.data);
        }
        
    }
    
    
})()