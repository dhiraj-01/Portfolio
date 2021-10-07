let i = 0;
let speed = 70;
let txt = "Dhiraj Govindvira.";
let nameEle = document.getElementById("name");

function typeWriter() {
    if (i < txt.length) {
        nameEle.innerText = txt.substring(0, i + 1);
        if(i + 1 < txt.length) {
            nameEle.innerText += "|";
        }
        i++;
    }
    else {
        clearInterval(stop);
    }
};
let stop = setInterval(typeWriter, speed);