
/*
 *  Template Mustache que define la manera en que una Movie 
 *    es mostrada en la lista. 
 */

define( 'MovieTemplate', function() {
	return{
	 getTemplate: function() {
		return "<li>" + 
               '<a>' + 
                 "<h2>{{title}}</h2>" +
                 "<p>Year: <b>{{year}}</b> </p>" +
                 "{{^year}} <p>Idle</p> {{/year}}" +
                 "{{#synopsis}}" +
                 "<p><b> Synopsis:</b> {{synopsis}} </p>" + 
                 "{{/synopsis}}" +
                 '</span> &nbsp; &nbsp; <span class="edit" style="font-family:sans-serif; color:blue; cursor:pointer;">[edit]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>' +
               "</a>" +
             "</li>";
    }
   }
});

