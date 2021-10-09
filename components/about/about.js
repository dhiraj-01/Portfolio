{
    let i = 0;
    const speed = 70;
    const txt = "Dhiraj Govindvira.";
    let nameEle = document.getElementById("name");
    function typeWriter() {
        if (i < txt.length) {
            if(nameEle) {
                nameEle.innerText = txt.substring(0, i + 1);
                if(i + 1 < txt.length) {
                    nameEle.innerText += "|";
                }
            }
            i++;
        }
        else {
            clearInterval(stop);
        }
    };
    stop = setInterval(typeWriter, speed);
}