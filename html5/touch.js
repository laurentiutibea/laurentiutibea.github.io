document.getElementById("id_business_version").innerHTML = "Business version: 2018.11.26.0";

let canvas  = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", (e) => {
    for(let i = 0; i < e.changedTouches.length; i++){
        let context = canvas.getContext("2d");
        context.beginPath();
        context.arc(e.changedTouches[i].pageX, e.changedTouches[i].pageY, 10, 0, 2*Math.PI);
        context.stroke();
    }
});