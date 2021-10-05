const FILE_PATH = './components';

class Component {
    constructor(name, element) {
        this.name = name;
        this.element = element;
        this.htmlContent = null;
    }
    // path
    getHtmlPath() {
        return `${FILE_PATH}/${this.name}/${this.name}.html`;
    }
    getCssPath() {
        return `${FILE_PATH}/${this.name}/${this.name}.css`;
    }
    // content
    getHtmlContent() {
        return fetch(this.getHtmlPath())
        .then(r => r.text())
        .then(t => {
            // console.log(t);
            return t;
        });
    }
    // html
    async loadHtml() {
        // console.log(`Loading ${this.name} html`);
        this.element.innerHTML = await this.getHtmlContent();
    }
    removeHtml() {
        // console.log(`Removing ${this.name} html`);
        this.element.innerHTML = "";
    }
    // css
    loadCss() {
        // console.log(`Loading ${this.name} css`);
        return new Promise((resolve, reject) => {
            let head  = document.getElementsByTagName('head')[0];
            let link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.id = this.getCssPath();
            link.href = this.getCssPath();
            link.media = 'all';
            head.appendChild(link);
            resolve('css loaded');
        });
    }
    removeCss() {
        // console.log(`Removing ${this.name} css`);
        return new Promise((resolve, reject) => {
            let css = document.getElementById(this.getCssPath());
            if(css) {
                css.remove();
                resolve('css removed');
            }
        });
    }
    // component
    async loadComponent() {
        // console.log(`Loading ${this.name} component`);
        await this.loadHtml();
        await this.loadCss();
    }
    removeComponent() {
        // console.log(`Removing ${this.name} component`);
        this.removeCss();
        this.removeHtml();
    }
}
