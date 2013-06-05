define (['event'], function (Event) {
	
	var Signal = function () {
		Event.call (this);
	};
	
	Signal.prototype = Object.create (Event.prototype);
	
	Signal.prototype.dispatch = function () {
		Event.prototype.dispatch.apply (this, arguments);
		this.removeAllListeners ();
	};
	
	Signal.prototype.dispatchArray = function (args) {
		this.dispatchArray (args);
		this.removeAllListeners ();
	};
	
	return Signal;
	
});