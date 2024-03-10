{
    let yearEle = document.getElementById('year');
    if(yearEle) {
        yearEle.innerText = new Date().getFullYear();
    }
}