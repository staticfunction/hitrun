/**
 * Created by jcabresos on 4/11/15.
 */
import kola = require('kola');

import Fancy = require('./views/Fancy');

export interface Kontext extends kola.Kontext {

}

export class App extends kola.App<HTMLElement> {

    fancy: Fancy;
    formatting: {[keyword: string]: string} = {
        "if": "logical",
        "else": "logical",
        "export": "keyword",
        "class": "keyword",
        "function": "logical",
        "var": "keyword"
    };

    onStart(): void {
        this.fancy = new Fancy();
        this.fancy.appendTo(this.opts);

        this.kontext.getSignal('code.append').listen(this.onCodeAppend, this);
    }

    onCodeAppend(value: string[]): void {
        var content = value.join('');
        var className = this.formatting[content];
        var span = document.createElement('span');
        span.className = className || 'normal';
        span.textContent = content;
        this.fancy.output.appendChild(span);
    }
}
