// header & content element
let headerEle = document.getElementById("header");
let contentEle = document.getElementById("content");

// components
let headerComponent = new Component('header', headerEle);
let homeComponent = new Component('home', contentEle);
let currentComponent = homeComponent;

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

function darkModeToogle() {
    document.body.classList.toggle("dark-theme");
}

// function tooglemenu(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }

//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes

// const mediaQuery = window.matchMedia('(max-width: 500px)');
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
//     // let ele = document.
// }