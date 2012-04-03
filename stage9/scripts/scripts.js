
(function (){

    /*
    * Area de código:
    */
    var area = document.createElement('textarea');
    area.style.width = '500px'; 
    area.style.height = '150px';


    /*
    * Botón de ejecución:
    */
    var buttonEx = document.createElement('input');
    buttonEx.name="buttonExecute";
    buttonEx.type="button";
    buttonEx.value="Run Code";
    
    
    var headID = document.getElementsByTagName("head")[0];


    document.querySelector('#codeDiv').appendChild(area);
    document.querySelector('#optionsDiv').appendChild(buttonEx);


    // default code...
    area.value = 'alert("Running code!");\n\ndocument.getElementById("toChange").innerHTML = "<p>Contenido cambiado por el script del text area...</p>";';




    buttonEx.addEventListener( 'click', function(){
        var persistCheck = document.getElementById("persistCheck");
        
        if ( persistCheck.checked )
            persistCode(area);
        
        runCode(area);
    });



    /*
    * Ejecución de código.
    */
    function runCode(codeEl) {
        var newScript = document.createElement("script");
        newScript.type = "text/javascript";
        newScript.innerHTML = codeEl.value;
        headID.appendChild( newScript );
    }

    /*
    * Persistencia del código.
    */
    function persistCode(elem) {
        alert("persisting code...");
        window.localStorage['code'] = elem.value;
        //window.localStorage['timestamp'] = (new Date()).getTime();
    }
    
    
    
    
    
    
    /*
     * Worker
     * 
     */
    
    var worker;
    var workerButton = document.createElement("input");
    workerButton.name = "workerButton";
    workerButton.type = "button";
    workerButton.value = "Run Woker";
    document.getElementById("workerMessage").appendChild(workerButton);
    
    
    var stopWorkerButton = document.createElement("input");
    stopWorkerButton.name = "stopWorkerButton";
    stopWorkerButton.type = "button";
    stopWorkerButton.value = "Stop Woker";
    document.getElementById("workerMessage").appendChild( stopWorkerButton );
    
    
    workerButton.addEventListener('click', function(){
        //if ( !worker ) {
            worker = new Worker('scripts/work.js');
            worker.onmessage = function (event) {
                //console.log( "MSG:" + event.data );
                $('#message').html('<p>' + event.data + '</p>');
            }
        //};
    });
    
    stopWorkerButton.addEventListener('click', function(){
        console.log('stop worker');
        worker.terminate();
    });
    

})()
