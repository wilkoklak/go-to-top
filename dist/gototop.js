'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _GTT_DEFAULTS = {
	position: 'left',
	minScroll: false,
	customToggledClass: false,
	customElem: false,
	instant: false
};

function _GTT_IS_TYPE(elem, type) {
	if (variable && type && variable.constructor.toString().indexOf(type) != -1) {
		return true;
	} else {
		return false;
	}
}

var GoToTop = function () {
	function GoToTop(config) {
		_classCallCheck(this, GoToTop);

		this.config = config;
		this.init();
	}

	_createClass(GoToTop, [{
		key: 'init',
		value: function init() {
			if (this.config.customElem) {
				this.buttonElem = this.config.customElem;
			} else {
				this.buttonElem = document.createElement('div');
			}
		}
	}]);

	return GoToTop;
}();