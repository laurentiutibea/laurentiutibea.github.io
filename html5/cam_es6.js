/* eslint-disable linebreak-style */
document.getElementById("id_business_version").innerHTML = "Business version: ES6 2018.11.12.9";

class Camera {
    constructor(front){
        this.front = front;
    }
    start(){
        this.c = {audio: true, video: {facingMode: (this.front === true? "user" : "environment")}};
        navigator.mediaDevices.getUserMedia(this.c)
            .then( (e) => {
                this.e = e;
                document.getElementById("id_video").srcObject = e;
            })
            .catch( () => {
                alert("Cannot read camera");
            });
    }
    change(){
        this.front ? this.front = false: this.front = true;
        this.e.getVideoTracks()[0].stop();
        this.e.getAudioTracks()[0].stop();
        this.start();
    }
    stop(){
        this.c = {audio: false, video: false};
        this.e.getVideoTracks()[0].stop();
        this.e.getAudioTracks()[0].stop();
    }
    snap(){
        let canvas = document.getElementById("id_canvas");
        let context = canvas.getContext("2d");
        let video = document.getElementById("id_video");

        context.drawImage(video, 0, 0);
    }
}

let cam = new Camera(false);


document.getElementById("id_button").addEventListener("click", cam.start.bind(cam));
document.getElementById("id_change").addEventListener("click", cam.change.bind(cam));
document.getElementById("id_stop").addEventListener("click", cam.stop.bind(cam));
document.getElementById("id_video").addEventListener("touchstart", cam.snap.bind(cam));
document.getElementById("id_video").addEventListener("mousedown", cam.snap.bind(cam));