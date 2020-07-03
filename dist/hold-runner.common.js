!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):(t=t||self,function(){var r=t["hold-runner"],i=t["hold-runner"]={};e(i),i.noConflict=function(){return t["hold-runner"]=r,i}}())}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},r=function(){function t(t){this.startTime=0,this.duration=200,this.isLock=!1,this.timer=-1,this.customerDuration=0,this.duration=t.duration}return t.prototype.start=function(t){this.isLock||(t&&t.duration&&(this.customerDuration=t.duration),this.isLock=!0,this.startTime=Date.now())},t.prototype.end=function(){var t=this;try{if(-1!==this.timer||!this.isLock)return Promise.resolve(!1);var e=Date.now(),r=this.customerDuration||this.duration;return e-this.startTime>r?(this.clear(),Promise.resolve(!0)):new Promise((function(i){t.timer=setTimeout((function(){t.clear(),i(!0),t.timer=-1}),r-e+t.startTime)}))}catch(t){return console.error(t),this.clear(),Promise.resolve(!0)}},t.prototype.clear=function(){this.startTime=0,this.duration=200,this.customerDuration=0,this.isLock=!1,-1!==this.timer&&(clearTimeout(this.timer),this.timer=-1)},t}();t.createHoldRunner=function(t){return new r(e({duration:200},t||{}))},t.default=r,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=hold-runner.common.js.map
