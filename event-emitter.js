define (['event'], function (Event) {
	
	var EventEmitter = function () {
		this.__events__ = {};
	};
	
	EventEmitter.prototype.registerEvent = function (event) {
		if (!(event in this.__events__)) {
			this.__events__[event] = new Event;
		}
		return this.__events__[event];
	};
	
	EventEmitter.prototype.addEventListener = function (event, listener) {
		this.registerEvent (event).addListener (listener);
	};
	
	EventEmitter.prototype.removeEventListener = function (event, listener) {
		this.registerEvent (event).removeListener (listener);
	};
	
	EventEmitter.prototype.removeEvent = function (event) {
		delete this.__events__[event];
	};
	
	EventEmitter.prototype.dispatchEvent = function (event) {
		if (event in this.__events__) {
			this.__events__[event].dispatchArray (Array.prototype.slice.call (arguments, 1));
		}
	};
	
	EventEmitter.prototype.dispatchEventArray = function (event, args) {
		if (event in this.__events__) {
			this.__events__[event].dispatchArray (args);
		}
	};
	
	return EventEmitter;
	
});