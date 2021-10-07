// header & content element
let headerEle = document.getElementById("header");
let footerEle = document.getElementById("footer");
let contentEle = document.getElementById("content");

// load into content area
let currentComponent = null;

async function load(name, ele = contentEle) {
    if(currentComponent) {
        if(currentComponent.name == name) return;
        currentComponent.removeComponent();
    }
    let comp = new Component(name, ele);
    await comp.loadComponent();
    currentComponent = comp;
}
load('header', headerEle);
load('footer', footerEle);
load('about', contentEle);

let headerTabId = {
    about: 'header-tab-about',
    skill: 'header-tab-skills',
    project: 'header-tab-projects',
    education: 'header-tab-education',
    achivement: 'header-tab-achivements',
    contact: 'header-tab-contact',
};

function show(name) {
    load(name, contentEle);
    for(let id in headerTabId) {
        let tabEle = document.getElementById(headerTabId[id]);
        if(tabEle) tabEle.classList.remove('active');
    }
    let tabEle = document.getElementById(headerTabId[name]);
    if(tabEle) tabEle.classList.add('active');
}

// dark mode toogle
function darkModeToogle() {
    document.body.classList.toggle("dark-theme");
}