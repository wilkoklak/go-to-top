const _GTT_DEFAULTS = {
	position: 'left',
	minScroll: false,
	customToggledClass: false,
	customElem: false,
	instant: false
}

function _GTT_IS_TYPE(elem, type) {
	if(variable && type && variable.constructor.toString().indexOf(type) != -1) {
		return true;
	} else {
		return false;
	}
}


class GoToTop {
	constructor(config) {
		this.config = config;
		this.init();
	}
	init() {
		if(this.config.customElem) {
			this.buttonElem = this.config.customElem;
		} else {
			this.buttonElem = document.createElement('div');
		}
	}
}
