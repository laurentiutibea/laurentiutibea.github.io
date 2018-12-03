document.getElementById("id_business_version").innerHTML = "Business version: 2018.12.03.1";

window.addEventListener("deviceorientation",(e) => {
    let svg = document.getElementById("id_svg");
    let circle = document.getElementById("id_circle");

    let R = 20;

    let svg_height = svg.getAttribute("height");
    let svg_width = svg.getAttribute("width");

    circle.setAttribute("cx",  svg_width / 2 + e.gamma / 90 * (svg_width / 2 - R));
    circle.setAttribute("cy", svg_height / 2 + + e.beta / 90 * (svg_height / 2 - R));
});