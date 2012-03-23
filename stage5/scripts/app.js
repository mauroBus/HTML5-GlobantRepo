/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['Mustache',
        'Underscore',
        'jSmart',
        'Myprofile',
        'ProfTemplate'
        ],
    function(mstche, Underscore, jSmartF, MyProfile, ProfTemplate) {
        return {
            run: function () {
                profileJSON = profProfile;
                
                var templateM = ProfTemplate.getMustache();
                var templateU = ProfTemplate.getUnderscore();
                var templateJS = ProfTemplate.getJSmart();
                
                var htmlM = Mustache.render( templateM, profileJSON );
                var htmlU = _.template( templateU, profileJSON );
                var myJsmart = new jSmart(templateJS);
                var htmlJS = myJsmart.fetch( profileJSON );
                
                $('#profileMustache').html( htmlM );
                $('#profileUnderscore').html( htmlU );
                $('#profileJSmart').html( htmlJS );
                
             }
        }
    }
);
    