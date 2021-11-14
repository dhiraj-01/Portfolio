// header & content element
let headerEle = document.getElementById("header-wrapper");
let mainEle = document.getElementById("main-wrapper");
let footerEle = document.getElementById("footer-wrapper");

new Component('header', headerEle).loadComponent();
new Component('footer', footerEle).loadComponent();

// load into content area
let currentComponent = null;
async function load(name) {
    if(currentComponent) {
        if(currentComponent.name == name) return;
        currentComponent.removeComponent();
    }
    let comp = new Component(name, mainEle);
    comp.loadComponent();
    currentComponent = comp;
}
load('about');

let headerTabId = {
    about: 'header-tab-about',
    skill: 'header-tab-skills',
    project: 'header-tab-projects',
    education: 'header-tab-education',
    achivement: 'header-tab-achivements',
    contact: 'header-tab-contact',
};

function show(name) {
    load(name);
    for(let id in headerTabId) {
        let tabEle = document.getElementById(headerTabId[id]);
        if(tabEle) tabEle.classList.remove('active');
    }
    let tabEle = document.getElementById(headerTabId[name]);
    if(tabEle) tabEle.classList.add('active');
}

// dark mode toogle
function darkModeToogle() {
    document.body.classList.toggle("dark-mode");
}
let date = new Date();
if(date.getHours() >= 19) { // > 7 PM
    darkModeToogle();
}