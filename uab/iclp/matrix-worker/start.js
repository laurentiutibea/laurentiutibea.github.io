document.getElementById("id_button").addEventListener("click", () => {
    const n = document.getElementById("id_n").value;
    const m = document.getElementById("id_m").value;
    const p = document.getElementById("id_p").value;

    const myWorker = new Worker("matrix.js");
    myWorker.onmessage = e => {
        document.getElementById("id_run_time").innerHTML = e.data / 1000;
    }
    myWorker.postMessage(`${n} ${m} ${p}`);
});