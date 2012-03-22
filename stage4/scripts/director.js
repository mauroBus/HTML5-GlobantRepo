

define( function () {
//[ 'order!http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.js' ]

	return function Director(dName) {
		
		var quote = ['no-coments'];
		var dirName = dName;
		
		this.speak = function() {
			myquote = this.quote[ Math.round( Math.random() * this.quote.length ) ]; 	// (ej. 8)
			$('#dirQuote').html('<p>' + dName + ' says: ' + myquote + '</p>');
			$.mobile.loadPage("#jqmdialog");
			$.mobile.changePage( "#jqmdialog", { transition: "slideup"} );
			console.log( dName + ' says: ' + myquote );
		}
		this.setQuotes = function(otherQuote) {
			this.quote = otherQuote;
		}
        }
	
});










/*
	

*/
