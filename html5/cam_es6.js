/* eslint-disable linebreak-style */
document.getElementById("id_business_version").innerHTML = "Business version: ES6 2018.11.12.5";
document.getElementById("id_button").addEventListener("click", video);
document.getElementById("id_video").addEventListener("touchstart", on_touch);
document.getElementById("id_video").addEventListener("mousedown", on_touch);

function video(){
    let c = {audio: true, video: {facingMode: "environment"}};
    navigator.mediaDevices.getUserMedia(c)
        .then( (e) => {
            document.getElementById("id_video").srcObject = e;
        })
        .catch( () => {
            alert("Cannot read camera");
        });
}

function on_touch()
{
    var canvas = document.getElementById("id_canvas");
    var context = canvas.getContext("2d");
    var video = document.getElementById("id_video");

    context.drawImage(video, 0, 0);
}

