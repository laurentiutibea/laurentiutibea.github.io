document.getElementById("id_business_version").innerHTML = "Business version: 2018.12.03.0";
window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(e){
    let svg = document.getElementById("id_svg");
    let cerc = document.getElementById("id_cerc");

    let R = 20;

    let svg_height = svg.getAttribute("height");
    let svg_width = svg.getAttribute("width");

    cerc.setAttribute("cx",  svg_width / 2 + e.gamma / 90 * (svg_width / 2 - R));
    cerc.setAttribute("cy", svg_height / 2 + + e.beta / 90 * (svg_height / 2 - R));
}