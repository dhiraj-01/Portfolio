// header & content element
let headerEle = document.getElementById("header");
let contentEle = document.getElementById("content");

// components
let headerComponent = new Component('header', headerEle);
let homeComponent = new Component('home', contentEle);
let currentComponent = homeComponent;

// load header & home
headerComponent.loadComponent();
homeComponent.loadComponent();

async function load(name) {
    if(currentComponent.name != name) {
        currentComponent.removeComponent();
        let comp = new Component(name, contentEle);
        await comp.loadComponent();
        currentComponent = comp;
    }
}

// dark mode toogle
function darkModeToogle() {
    document.body.classList.toggle("dark-theme");
}