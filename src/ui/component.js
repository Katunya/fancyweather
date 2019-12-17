export default class Component {
    constructor(className) {
        this.node = document.querySelector(className);
    }

    render(html) {
        this.node.innerHTML = html;
    }
}
