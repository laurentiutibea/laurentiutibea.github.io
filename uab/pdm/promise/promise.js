/* eslint-disable linebreak-style */
document.getElementById("id_business_version").innerHTML = "Business version: 2018.11.12.0";

let button = document.getElementById("id_start");
button.addEventListener("click", start_func);

function start_func() {
    console.log("Before promise is created");
    let promise = new Promise((resolve, reject) => {
        const error = false;
        if (!error) {
            resolve(":)");
        }
        else {
            reject(":(");
        }
    });

    promise.then((e) => console.log(`Result = ${e}`)).catch((e) => console.log(`Error: ${e}`));
    console.log("Before end of start function");
}