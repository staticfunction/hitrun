!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.app=t()}}(function(){return function t(n,e,i){function o(s,p){if(!e[s]){if(!n[s]){var a="function"==typeof require&&require;if(!p&&a)return a(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var h=e[s]={exports:{}};n[s][0].call(h.exports,function(t){var e=n[s][1][t];return o(e?e:t)},h,h.exports,t,n,e,i)}return e[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,n,e){var i=this.__extends||function(t,n){function e(){this.constructor=t}for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);e.prototype=n.prototype,t.prototype=new e},o=t("kola"),r=t("./editor/app"),s=function(t){function n(){t.apply(this,arguments)}return i(n,t),n.prototype.initialize=function(t,n){},n.prototype.onStart=function(){this.editorApp=new r.App,this.editorApp.start(this.opts)},n}(o.App);e.App=s},{"./editor/app":2,kola:5}],2:[function(t,n,e){var i=this.__extends||function(t,n){function e(){this.constructor=t}for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);e.prototype=n.prototype,t.prototype=new e},o=t("kola"),r=t("./views/Editor"),s=function(t){function n(){t.apply(this,arguments)}return i(n,t),n.prototype.onStart=function(){this.editor=new r,this.editor.appendTo(this.opts)},n}(o.App);e.App=s},{"./views/Editor":3,kola:5}],3:[function(t,n,e){var i=function(){function t(){this.rootNodes=[],this.editor=document.createElement("textarea"),this.editor.setAttribute("class","editor"),this.rootNodes.push(this.editor)}return t.prototype.appendTo=function(t){var n=this;this.remove(),this.parent=t,this.rootNodes.forEach(function(t){n.parent.appendChild(t)})},t.prototype.remove=function(){var t=this;this.parent&&(this.rootNodes.forEach(function(n){t.parent.removeChild(n)}),this.parent=null)},t}();n.exports=i},{}],4:[function(t,n,e){var i=function(){function t(){this.listeners=[]}return t.prototype.listen=function(t,n,e){var i=new o(t,n,e);return this.listeners.push(i),i},t.prototype.removeAllListeners=function(){this.listeners=[]},t.prototype.numListeners=function(){return this.listeners.length},t.prototype.dispatch=function(t){for(var n=[],e=0;e<this.listeners.length;e++){var i=this.listeners[e];i.receiveSignal(t)&&n.push(i)}this.listeners=n},t}();e.Dispatcher=i;var o=function(){function t(t,n,e){var i=this;this.target=n,this.callOnce=e,this.receiveSignal=function(e){return t.apply(n,[e]),1!=i.callOnce}}return t.prototype.unlisten=function(){this.receiveSignal=function(t){return!1}},t}();e.Listener=o},{}],5:[function(t,n,e){var i=t("kola-signals"),o=function(){function t(t){this.generator=this.getInstance=t}return t.prototype.asSingleton=function(){var t=this;this.getInstance=function(){return t.singleInstance||(t.singleInstance=t.generator()),t.singleInstance}},t}();e.KontextFactory=o;var r=function(){function t(t,n,e){this.kontext=t,this.signal=n,this.hook=e}return t.prototype.onDispatch=function(t){this.hook.execute(t,this.kontext)},t.prototype.attach=function(){this.listener=this.signal.listen(this.onDispatch,this,this.callOnce)},t.prototype.dettach=function(){this.listener.unlisten()},t.prototype.runOnce=function(){this.callOnce=!0},t}();e.SignalHook=r;var s=function(){function t(t){this.parent=t,this.signals={},this.signalHooks=[],this.instances={}}return t.prototype.hasSignal=function(t){return null!=this.signals[t]},t.prototype.setSignal=function(t,n){var e=this.getSignal(t);e||(e=this.signals[t]=new i.Dispatcher);var o;return n&&(o=new r(this,e,n),this.signalHooks.push(o)),o},t.prototype.getSignal=function(t){var n=this.signals[t];return this.parent&&!n&&(n=this.parent.getSignal(t)),n},t.prototype.setInstance=function(t,n){if(!n)throw new Error("error trying to define instance: "+t);return this.instances[t]=new o(n)},t.prototype.getInstance=function(t){var n=this.instances[t];return n?n.getInstance():this.parent?this.parent.getInstance(t):null},t.prototype.start=function(){for(var t=0;t<this.signalHooks.length;t++)this.signalHooks[t].attach()},t.prototype.stop=function(){for(var t=0;t<this.signalHooks.length;t++)this.signalHooks[t].dettach()},t}();e.KontextImpl=s;var p=function(){function t(t){this.parent=t,this.kontext=this.parent?new s(this.parent.kontext):new s}return t.prototype.initialize=function(t,n){},t.prototype.start=function(t){return this.opts=t,this.initialize(this.kontext,t),this.kontext.start(),this.onStart(),this},t.prototype.onStart=function(){},t.prototype.onStop=function(){},t.prototype.stop=function(){return this.kontext.stop(),this.onStop(),this},t}();e.App=p},{"kola-signals":4}]},{},[1])(1)});