/**
 * Created by jcabresos on 4/11/15.
 */
import signals = require('kola-signals');

export class Code {

    onAppend: signals.Dispatcher<string>;

    private content: string[];

    constructor() {
        this.content = [];
        this.onAppend = new signals.Dispatcher();
    }

    getContent(): string[] {
        return this.content;
    }

    append(value: string): void {
        this.content.push(value);
        this.onAppend.dispatch(value);
    }
}

