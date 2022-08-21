"use strict";

const THREE = document.getElementById("3");
var END = false;

function three_handler() {
    if (END) return;

    let time =
        (new Date(2025, 8, 10, 0, 0, 0, 0).getTime() - new Date().getTime()) /
        1000;
    let out = "Nothing left, goodbye :)";

    if (time > 0) out = `Only ${time} left`;
    else {
        END = true;
        console.log("Goodbye world!");
    }

    THREE.innerText = out;
}

function main() {
    setInterval(three_handler, 1);
}

document.addEventListener("DOMContentLoaded", main);
