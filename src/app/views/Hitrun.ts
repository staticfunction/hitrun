class Hitrun {

    rootNodes: HTMLElement[];
    parent: HTMLElement;
    project: HTMLDivElement;
    fancycode: HTMLDivElement;
    editor: HTMLDivElement;

    constructor() {
        this.rootNodes = [];
        this.project = document.createElement('div');
        this.fancycode = document.createElement('div');
        this.editor = document.createElement('div');
        this.rootNodes.push(this.project);
        this.rootNodes.push(this.fancycode);
        this.rootNodes.push(this.editor);
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

export = Hitrun;