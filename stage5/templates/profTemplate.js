/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define( [], function() {
    
    return {
        getMustache: function(){
            return "{{#profile}} <h1>{{name}}</h1>" +
                "<p> Actual Job: </p> {{#actualJob}} <h2>{{actualJob}}</h2> {{/actualJob}} {{^actualJob}} <p>Idle</p> {{/actualJob}}" + 
                "{{#lastJob}}<p> Last Job: </p> <h2>{{lastJob}} </h2>{{/lastJob}}" +
                "<h3>Extract: </h3> <p>{{extract}}</p>" +
                "<h4>Skills: </h4> <ul> {{#skills}} <li> {{.}} </li> {{/skills}}</ul> {{/profile}}";
        },

        getUnderscore: function() {
            return "<% for (var i=0; i < profProfile.profile.length; ++i){ %>" +
                        "<% <h1> <%= profProfile.profile[i].name %> </h1> %>" +
                        "<p> Actual Job: </p> <h2> <%= profProfile.profile[i].actualJob %> </h2>" + 
                        "<p> Last Job: </p> <h2> <%= profProfile.profile[i].lastJob %> </h2>" +
                        "<h3>Extract: </h3> <p> <%= profProfile.profile[i].extract %> </p>" +
                        "<h4>Skills: </h4> <ul> " +
                        "<% for (var j=0; j<profProfile.profile[i].skills.length; ++j) { %>" +
                            "<li> <%= profProfile.profile[i].skills[j]%> </li>" +
                        "<% } %> </ul>" +
                    "<% } %>";
            
        },

        getJSmart: function() {
            return " {foreach $profile as $i => $prof}" + 
                    "<h1> {$prof.name} </h1>" + 
                    "{if $prof.actualJob} <p> Actual Job: </p>  <h2> {$prof.actualJob} </h2> {/if}" +
                    "{if $prof.lastJob} <p> Last Job: </p> <h2> {$prof.lastJob} </h2> {/if}" +
                    "<h3>Extract: </h3> <p> {$prof.extract} </p>" +
                    "<h4>Skills: </h4> <ul> " +
                    "{foreach $prof.skills as $j => $skill}" +
                        "<li> {$skill} </li>" +
                 "{foreachelse} No profile" +
                 "{/foreach}" +
                 "</ul>" +
               "{/foreach}";
        }
    }
});