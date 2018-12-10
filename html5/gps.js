document.getElementById("id_business_version").innerHTML = "Business version: 2018.12.10.1";

const position = document.getElementById("id_start");
position.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(e => {
        document.getElementById("id_lat").innerHTML = e.coords.latitude;
        document.getElementById("id_long").innerHTML = e.coords.longitude;
        document.getElementById("id_acc").innerHTML = e.coords.accuracy;
    }, e => {
        alert(`Error ${e.error}`);
    });
});