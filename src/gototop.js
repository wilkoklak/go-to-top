const _GTT_DEFAULTS = {
	position: 'left',
	minScroll: false,
	customToggledClass: false,
	customElem: false,
	scrollDuration: 1000,
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
		this.config = config || _GTT_DEFAULTS;
		this.init();
	}
	init() {
		if(this.config.customElem) {
			this.buttonElem = this.config.customElem;
		} else {
			this.buttonElem = document.createElement('div');
		}
		this.buttonElem.addEventListener('click', () => {
			this.scrollToTop(this)
		})
		this.buttonElem.classList.add('go-to-top');
		document.body.appendChild(this.buttonElem);
		window.addEventListener('scroll', () => {
			this.checkScroll(this)
		});
	}
	checkScroll() {
		if(window.scrollY > (this.config.minScroll || window.innerHeight)) {
			this.buttonElem.classList.add((this.config.customToggledClass || 'go-to-top-toggled'));
		} else {
			this.buttonElem.classList.remove((this.config.customToggledClass || 'go-to-top-toggled'))
		}
	}
	scrollToTop() {
		if(this.config.instant) {
			window.scrollTo(0, 0);
		} else {
			// http://stackoverflow.com/a/24559613/5899621
			let cosParam = window.scrollY / 2;
			let scrollCount = 0;
			let oldTimestamp = performance.now();

			let step = (newTimestamp) => {
				scrollCount += Math.PI / (this.config.scrollDuration / (newTimestamp - oldTimestamp));
				if(scrollCount >= Math.PI) {
					window.scrollTo(0, 0);
				}
				if(window.scrollY === 0) {
					return;
				}
				window.scrollTo(0, Math.round(cosParam + cosParam * Math.cos(scrollCount)));
				oldTimestamp = newTimestamp;
				window.requestAnimationFrame(step);
			}
			window.requestAnimationFrame(step);
		}
	}
}
