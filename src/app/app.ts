/**
 * Created by jcabresos on 3/27/15.
 */
import kola = require('kola');
import signals = require('kola-signals');
import hooks = require('kola-hooks');

import models = require('./models');
import commands = require('./commands');

import editor = require('./editor/app');

export interface Kontext extends kola.Kontext {
    setSignal<T>(name: string, hook?: kola.Hook<T>): kola.SignalHook<T>;
    getSignal<T>(name: string): signals.Dispatcher<T>;
    setInstance<T>(name: string, factory: () => T): kola.KontextFactory<T>;
    getInstance<T>(name: string): T;
}


export class App extends kola.App<HTMLElement> {

    editorApp: editor.App;

    initialize(kontext: Kontext, opts?: HTMLElement): void {
    }

    onStart(): void {
        this.editorApp = new editor.App();
        this.editorApp.start(this.opts);
    }

}