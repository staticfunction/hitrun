class Fancy {

    rootNodes: HTMLElement[];
    parent: HTMLElement;
    output: HTMLPreElement;

    constructor() {
        this.rootNodes = [];
        this.output = document.createElement('pre');
        this.rootNodes.push(this.output);
    }

    appendTo(parent:HTMLElement): void {
        this.remove();
        this.parent = parent;
        this.rootNodes.forEach((node:HTMLElement) => {
            this.parent.appendChild(node);
        });
    }
    remove(): void {
        if(!this.parent)
            return;
        this.rootNodes.forEach((node:HTMLElement) => {
            this.parent.removeChild(node);
        });
        this.parent = null;
    }
}

export = Fancy;