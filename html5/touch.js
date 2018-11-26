document.getElementById("id_business_version").innerHTML = "Business version: 2018.11.26.1";
let canvas  = document.getElementById("id_canvas");
let canvas_bounding_rect = canvas.getBoundingClientRect();
canvas.addEventListener("touchstart", (e) => {
    for(let i = 0; i < e.changedTouches.length; i++){
        let context = canvas.getContext("2d");
        context.beginPath();
        context.arc(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,
            10, 0, 2*Math.PI);
        context.stroke();
    }
});