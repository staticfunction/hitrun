class Editor {

    rootNodes: HTMLElement[];
    parent: HTMLElement;
    input: HTMLTextAreaElement;
    output: HTMLDivElement;

    constructor() {
        this.rootNodes = [];
        var n0 = document.createElement('div');
        n0.setAttribute('class', 'editor');
        this.input = document.createElement('textarea');
        this.input.setAttribute('class', 'raw');
        this.output = document.createElement('div');
        this.output.setAttribute('class', 'formatted');
        this.rootNodes.push(n0);
        n0.appendChild(this.input);
        n0.appendChild(this.output);
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

export = Editor;