
(function() {

    /*
    * Drag n drop:
    */
    
    function onDragOver(e) {
            e.stopPropagation();
        e.preventDefault();
        dropbox.addClass('rounded');
    }

    function onDragLeave(e) {
        e.stopPropagation();
        e.preventDefault();
        dropbox.removeClass('rounded');
    }

    function onDrop(e) {
        e.stopPropagation();
        e.preventDefault();

        dropbox.removeClass('rounded');

        var readFileSize = 0;
        var files = e.dataTransfer.files;

        // Loop through list of files user dropped.
        for (var i = 0, file; file = files[i]; i++) {
            readFileSize += file.fileSize;

            var reader = new FileReader();
            
            reader.onerror = function(e) {
                alert('Error code: ' + e.target.error.code);
            };
            
            // Create a closure to capture the file information.
            reader.onload = (function(aFile) {
                return function(evt) {
                    var data = {
                        'file': {
                            'name': aFile.name,
                            'src': evt.target.result,
                            'fileSize': aFile.fileSize,
                            'type': aFile.type
                        }
                    };

                    alert( 'Loaded file: ' + data.file.name + ', size: ' + data.file.fileSize / 1024 + ' Kb' );
                };
            })(file);
            
            // Read in the image file as a data url.
            reader.readAsDataURL(file);

        } // end for
        
        alert( 'Just read: ' + Math.round(readFileSize / 1024) + ' KB' );
        
        return false;
    }
    
    var dropboxID = '#dropZone';
    var dropbox = $(dropboxID);
    
    document.querySelector(dropboxID).addEventListener('drop', onDrop, false);
    document.querySelector(dropboxID).addEventListener('dragover', onDragOver, false);
    document.querySelector(dropboxID).addEventListener('dragleave', onDragLeave, false);


})()