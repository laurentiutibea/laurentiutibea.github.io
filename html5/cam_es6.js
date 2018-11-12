/* eslint-disable linebreak-style */
document.getElementById("id_business_version").innerHTML = "Business version: ES6 2018.11.12.5";

/*document.getElementById("id_video").addEventListener("touchstart", on_touch);
document.getElementById("id_video").addEventListener("mousedown", on_touch);*/

class Camera {
    constructor(){
    }
    start(front = false){
        console.log("inceput");
        this.c = {audio: true, video: {facingMode: (front? "user" : "environment")}};
        console.log(front);
        front = true;
        navigator.mediaDevices.getUserMedia(this.c)
            .then( (e) => {
                document.getElementById("id_video").srcObject = e;
                console.log("then");
            })
            .catch( () => {
                alert("Cannot read camera");
            });

    }
    stop(){
        this.c = {audio: false, video: false};
    }
}

let cam = new Camera();

document.getElementById("id_button").addEventListener("click", cam.start(true));
document.getElementById("id_change").addEventListener("click", cam.start(false));
document.getElementById("id_stop").addEventListener("click", cam.stop);

/*let c = {};
let front = false;
function video(){


    c = {audio: true, video: {facingMode: (front? "user" : "environment")}};
    console.log("ELSE");
    navigator.mediaDevices.getUserMedia(c)
        .then( (e) => {
            document.getElementById("id_video").srcObject = e;
            console.log("then");
        })
        .catch( () => {
            alert("Cannot read camera");
        });
    front = !front;
}

function video_stop(){
    c = {audio: false, video: false};
}*/
/*
function on_touch()
{
    let canvas = document.getElementById("id_canvas");
    let context = canvas.getContext("2d");
    let video = document.getElementById("id_video");

    context.drawImage(video, 0, 0);
}*/

