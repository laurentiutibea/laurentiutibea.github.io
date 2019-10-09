document.getElementById("id_business_version").innerHTML = "Business version: 2018.12.10.1";

const start = document.getElementById("id_start");
const text = document.getElementById("id_text");

start.addEventListener("click", () => {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (e) => text.innerHTML = e.results[0][0].transcript + ":" + `(${e.results[0][0].confidence})`;
    recognition.onspeechend = () => recognition.stop();
});



