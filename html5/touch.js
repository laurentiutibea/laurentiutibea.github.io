document.getElementById("id_business_version").innerHTML = "Business version: 2018.11.26.11";
let canvas  = document.getElementById("id_canvas");
let canvas_bounding_rect = canvas.getBoundingClientRect();

let last_pos_array = [];

function randomColor(){
    let litere = "0123456789ABCDEF";
    let s = "#";
    for(let i=0; i<6 ; i++){
        s = s + litere[Math.floor(Math.random() * 16)];
    }
    return s;
}

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    for(let i = 0; i < e.changedTouches.length; i++){
        let context = canvas.getContext("2d");
        context.beginPath();
        let last_pos = {
            x: e.changedTouches[i].pageX,
            y: e.changedTouches[i].pageY,
            id: e.changedTouches[i].identifier,
            color: randomColor()};
        last_pos_array.push(last_pos);
        context.fillStyle = last_pos_array[length-1].color;
        context.strokeStyle = last_pos_array[length-1].color;
        context.arc(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,
            10, 0, 2*Math.PI);
        context.fill();
        context.stroke();
    }
});

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    for(let i = 0; i < e.changedTouches.length; i++){
        let j = 0;
        for(; j < last_pos_array.length; j++) if(last_pos_array[j].id === e.changedTouches[i].identifier) break;
        let context = canvas.getContext("2d");
        context.beginPath();
        context.fillStyle = last_pos_array[j].color;
        context.strokeStyle = last_pos_array[j].color;
        context.lineWidth = 20;
        context.moveTo(
            last_pos_array[j].x - canvas_bounding_rect.left,
            last_pos_array[j].y - canvas_bounding_rect.top);
        context.lineTo(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,);
        context.fill();
        context.stroke();
        context.beginPath();
        context.fillStyle = last_pos_array[j].color;
        context.strokeStyle = last_pos_array[j].color;
        context.lineWidth = 1;
        context.arc(
            e.changedTouches[i].pageX - canvas_bounding_rect.left,
            e.changedTouches[i].pageY - canvas_bounding_rect.top,
            10, 0, 2*Math.PI);
        context.fill();
        context.stroke();
        last_pos_array[j].x = e.changedTouches[i].pageX;
        last_pos_array[j].y = e.changedTouches[i].pageY;
    }
});

canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    for(let i = 0; i < e.changedTouches.length; i++) {
        let j = 0;
        for(; j < last_pos_array.length; j++) if(last_pos_array[j].id === e.changedTouches[i].identifier) break;
        last_pos_array.splice(j, 1);
    }
});