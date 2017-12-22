document.addEventListener("deviceready", init, false);

function init(){

    document.querySelector("#takePic").addEventListener("touchend", openCamera);
        
    function openCamera(){
        
        navigator.camera.getPicture(onSuccess, onFailure, {sourceType:Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            destinationType: Camera.DestinationType.FILE_URI} );
        
        function onSuccess(result){
            var image = document.getElementById('myImage');
            image.src = result;
        }
        
        function onFailure(error){
            navigator.notification.alert(error, null, "Camera Failure");
        }
    
    }

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(status) {
        document.getElementById("battery").innerHTML = status.level;
        //console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

    navigator.contacts.create({"displayName": "Test User"});

    document.getElementById("contact").innerHTML = navigator.contacts;


    }

            




