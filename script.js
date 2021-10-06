// header & content element
let headerEle = document.getElementById("header");
let contentEle = document.getElementById("content");

// components
let headerComponent = new Component('header', headerEle);
let aboutComponent = new Component('about', contentEle);
let currentComponent = aboutComponent;

// load header & home
headerComponent.loadComponent();
aboutComponent.loadComponent();

async function load(name) {
    if(currentComponent.name != name) {
        currentComponent.removeComponent();
        let comp = new Component(name, contentEle);
        await comp.loadComponent();
        currentComponent = comp;
    }
}

function knowMore() {
    load('project');
    let aboutTabEle = document.getElementById('header-tab-about');
    if(aboutTabEle) aboutTabEle.classList.remove('active');
    let projectTabEle = document.getElementById('header-tab-projects');
    if(projectTabEle) projectTabEle.classList.add('active');
}

// dark mode toogle
function darkModeToogle() {
    document.body.classList.toggle("dark-theme");
}