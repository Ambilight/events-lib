define ([], function () {
	
	var Event = function () {
		this.__listeners__ = [];
	};
	
	Event.prototype.addListener = function (listener) {
		this.__listeners__[this.__listeners__.length] = listener;
	};
	
	Event.prototype.removeListener = function (listener) {
		for (var i=0; i<this.__listeners__.length; i++) {
			if (listener === this.__listeners__[i]) {
				this.__listeners__[i] = null;
				break;
			}
		}
	};
	
	Event.prototype.removeAllListeners = function () {
		this.__listeners__ = [];
	};
	
	Event.prototype.dispatch = function () {
		for (var i=0; i<this.__listeners__.length; i++) {
			if (this.__listeners__[i] !== null) {
				this.__listeners__[i].apply (null, arguments);
			}
		}
	};
	
	Event.prototype.dispatchArray = function (args) {
		for (var i=0; i<this.__listeners__.length; i++) {
			if (this.__listeners__[i] !== null) {
				this.__listeners__[i].apply (null, args);
			}
		}
	};
	
	return Event;
	
});