document.getElementById("id_business_version").innerHTML = "Business version: 2018.11.26.4";
let canvas  = document.getElementById("id_canvas");
let canvas_bounding_rect = canvas.getBoundingClientRect();

let last_pos = {x: 0, y: 0};

canvas.addEventListener("touchstart", (e) => {
    for(let i = 0; i < e.changedTouches.length; i++){
        let context = canvas.getContext("2d");
        context.beginPath();
        context.arc(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,
            10, 0, 2*Math.PI);
        context.stroke();
        last_pos.x = e.changedTouches[i].pageX;
        last_pos.y = e.changedTouches[i].pageY;
    }
});

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    for(let i = 0; i < e.changedTouches.length; i++){
        let context = canvas.getContext("2d");
        context.beginPath();
        context.lineWidth = 20;
        context.moveTo(last_pos.x - canvas_bounding_rect.left,last_pos.y - canvas_bounding_rect.top);
        context.lineTo(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,);
        context.stroke();
        context.beginPath();
        context.lineWidth = 1;
        context.arc(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,
            10, 0, 2*Math.PI);
        context.stroke();
        last_pos.x = e.changedTouches[i].pageX;
        last_pos.y = e.changedTouches[i].pageY;
    }
});