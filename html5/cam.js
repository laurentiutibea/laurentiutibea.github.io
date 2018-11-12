/* eslint-disable linebreak-style */
document.getElementById("id_business_version").innerHTML = "Business version: 2018.11.12.0";
let v = document.getElementById("id_video");
v.addEventListener("click", video);

function video(){
    let c = {audio: true, video: true};
    navigator.mediaDevices.getUserMedia(c)
        .then( (e) => {
            v.srcObject = e;
        })
        .catch( () => {
            alert("Cannot read camera");
        });
}


