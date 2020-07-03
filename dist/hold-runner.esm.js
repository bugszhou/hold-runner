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
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var HoldRunner=function(){function HoldRunner(opts){this.startTime=0,this.duration=200,this.isLock=!1,this.timer=-1,this.customerDuration=0,this.duration=opts.duration;}return HoldRunner.prototype.start=function(opts){this.isLock||(opts&&opts.duration&&(this.customerDuration=opts.duration),this.isLock=!0,this.startTime=Date.now());},HoldRunner.prototype.end=function(){var _this=this;try{if(-1!==this.timer||!this.isLock)return Promise.resolve(!1);var now_1=Date.now(),duration_1=this.customerDuration||this.duration;return now_1-this.startTime>duration_1?(this.clear(),Promise.resolve(!0)):new Promise(function(resolve){_this.timer=setTimeout(function(){_this.clear(),resolve(!0),_this.timer=-1;},duration_1-now_1+_this.startTime);})}catch(e){return console.error(e),this.clear(),Promise.resolve(!0)}},HoldRunner.prototype.clear=function(){this.startTime=0,this.duration=200,this.customerDuration=0,this.isLock=!1,-1!==this.timer&&(clearTimeout(this.timer),this.timer=-1);},HoldRunner}();function createHoldRunner(opts){return new HoldRunner(__assign({duration:200},opts||{}))}

export default HoldRunner;
export { createHoldRunner };
//# sourceMappingURL=hold-runner.esm.js.map
