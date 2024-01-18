import A from './src/components/A.js';

class App {
    constructor() {
        this.render();
    }

    render() {
        const appElement = document.getElementById('app');
        const aInstance = new A();

        appElement.innerHTML = aInstance.template();
    }
}

new App();
