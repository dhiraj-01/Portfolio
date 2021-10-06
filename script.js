// header & content element
let headerEle = document.getElementById("header");
let footerEle = document.getElementById("footer");
let contentEle = document.getElementById("content");

// header & footer
let headerComponent = new Component('header', headerEle);
let footerComponent = new Component('footer', footerEle);
headerComponent.loadComponent();
footerComponent.loadComponent();

let currentComponent = null;
// load into content area
async function load(name) {
    if(currentComponent) {
        currentComponent.removeComponent();
    }
    let comp = new Component(name, contentEle);
    await comp.loadComponent();
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
    document.body.classList.toggle("dark-theme");
}