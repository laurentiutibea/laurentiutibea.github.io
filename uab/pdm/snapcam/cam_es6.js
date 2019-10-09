/* eslint-disable linebreak-style */
document.getElementById("id_business_version").innerHTML = "Business version: ES6 2018.11.16.2";

class Camera {
    constructor(front){
        this.front = front;
        this.imgFilter = "none";
        this.video = document.getElementById("id_video");
        this.photos = document.getElementById("id_photos");
        this.photoFilter = document.getElementById("id_filter");
        document.getElementById("id_stop").disabled = true;
        this.start();
    }
    start(){
        document.getElementById("id_start").disabled = true;
        document.getElementById("id_stop").disabled = false;
        this.c = {audio: true, video: {facingMode: (this.front === true? "user" : "environment")}};
        navigator.mediaDevices.getUserMedia(this.c)
            .then( (e) => {
                this.e = e;
                this.video.srcObject = e;
                this.video.play();
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
        document.getElementById("id_start").disabled = false;
        document.getElementById("id_stop").disabled = true;
        this.c = {audio: false, video: false};
        this.e.getVideoTracks()[0].stop();
        this.e.getAudioTracks()[0].stop();
    }
    snap(){
        let canvas = document.getElementById("id_canvas");
        let context = canvas.getContext("2d");

        context.drawImage(this.video, 0, 0);

        const imgUrl = canvas.toDataURL("image/png");
        const img = document.createElement("img");
        img.setAttribute("src",imgUrl);
        img.style.filter = this.imgFilter;
        this.photos.appendChild(img);
    }
    clear(){
        this.photos.innerHTML = "";
        this.imgFilter = "none";
        this.video.style.filter = this.imgFilter;
        this.photoFilter.selectedIndex = 0;
    }
    filter(e){
        this.imgFilter = e.target.value;
        console.log(this.imgFilter);
        this.video.style.filter = this.imgFilter;
        e.preventDefault();
    }
}

let cam = new Camera(false);

document.getElementById("id_start").addEventListener("click", cam.start.bind(cam));
document.getElementById("id_change").addEventListener("click", cam.change.bind(cam));
document.getElementById("id_stop").addEventListener("click", cam.stop.bind(cam));
document.getElementById("id_photo").addEventListener("click", cam.snap.bind(cam));
document.getElementById("id_filter").addEventListener("change", cam.filter.bind(cam));
document.getElementById("id_clear").addEventListener("click", cam.clear.bind(cam));