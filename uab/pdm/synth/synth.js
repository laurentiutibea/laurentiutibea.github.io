document.getElementById("id_business_version").innerHTML = "Business version: 2018.12.10.2";

const get_voices = document.getElementById("id_get_voices");
const voices_list = document.getElementById("id_voices_list");
const start = document.getElementById("id_start");
const synth = window.speechSynthesis;

get_voices.addEventListener("click",() => {
    let voices = synth.getVoices();
    for(let i = 0; i<synth.getVoices().length; i++){
        voices_list.innerHTML += voices[i].lang + " " + voices[i].name + "<br>" ;
    }
});

start.addEventListener("click", () => {
    const box = document.getElementById("id_text").value;

    let utterance = new SpeechSynthesisUtterance();

    utterance.lang = "en-US";
    utterance.text = box;
    start.disabled = true;
    utterance.onend = () => start.disabled = false;
    synth.speak(utterance);
});

