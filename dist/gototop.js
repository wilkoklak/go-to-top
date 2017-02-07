'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _GTT_DEFAULTS = {
	position: 'left',
	minScroll: false,
	customToggledClass: false,
	customElem: false,
	scrollDuration: 1000,
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

		this.config = config || _GTT_DEFAULTS;
		this.init();
	}

	_createClass(GoToTop, [{
		key: 'init',
		value: function init() {
			var _this = this;

			if (this.config.customElem) {
				this.buttonElem = this.config.customElem;
			} else {
				this.buttonElem = document.createElement('div');
			}
			this.buttonElem.addEventListener('click', function () {
				_this.scrollToTop(_this);
			});
			this.buttonElem.classList.add('go-to-top');
			document.body.appendChild(this.buttonElem);
			window.addEventListener('scroll', function () {
				_this.checkScroll(_this);
			});
		}
	}, {
		key: 'checkScroll',
		value: function checkScroll() {
			if (window.scrollY > (this.config.minScroll || window.innerHeight)) {
				this.buttonElem.classList.add(this.config.customToggledClass || 'go-to-top-toggled');
			} else {
				this.buttonElem.classList.remove(this.config.customToggledClass || 'go-to-top-toggled');
			}
		}
	}, {
		key: 'scrollToTop',
		value: function scrollToTop() {
			var _this2 = this;

			if (this.config.instant) {
				window.scrollTo(0, 0);
			} else {
				(function () {
					// http://stackoverflow.com/a/24559613/5899621
					var cosParam = window.scrollY / 2;
					var scrollCount = 0;
					var oldTimestamp = performance.now();

					var step = function step(newTimestamp) {
						scrollCount += Math.PI / (_this2.config.scrollDuration / (newTimestamp - oldTimestamp));
						if (scrollCount >= Math.PI) {
							window.scrollTo(0, 0);
						}
						if (window.scrollY === 0) {
							return;
						}
						window.scrollTo(0, Math.round(cosParam + cosParam * Math.cos(scrollCount)));
						oldTimestamp = newTimestamp;
						window.requestAnimationFrame(step);
					};
					window.requestAnimationFrame(step);
				})();
			}
		}
	}]);

	return GoToTop;
}();