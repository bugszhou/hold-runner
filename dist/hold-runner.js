(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, (function () {
		var current = global['hold-runner'];
		var exports = global['hold-runner'] = factory();
		exports.noConflict = function () { global['hold-runner'] = current; return exports; };
	}()));
}(this, (function () { 'use strict';

	function holdRunner(){}

	return holdRunner;

})));
//# sourceMappingURL=hold-runner.js.map
