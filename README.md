events-lib
----------

tiny javascript-amd library for common usage

you need [require.js](http://requirejs.org/) first.

basic usage
-----------

```javascript
require (['event', 'event-emitter', 'signal'], function (event, eventEmitter, signal) {

  var e = new event ();
  // Event is just an observable
  var listener = console.log.bind (console, 'listener'); // es5 hint
  e.addListener    (listener);
  e.dispatch       (1,2,3); // -> "listener" 1 2 3
  // passing arguments around
  e.dispatchArray  ([4,5,6]); // -> "listener" 4 5 6
  e.removeListener (listener);


  var ee = new eventEmitter ();
  // Event emitter more like pubsub
  ee.addEventListener   ('event', console.log.bind (console, 'listener 2'));
  ee.dispatchEvent      ('event', 7, 8);  // -> "listener 2" 7 8
  ee.dispatchEventArray ('event', [9, 10]); // -> "listener 2" 9 10


  var s = new signal ();
  // Signal is like event, but fires only once
  s.addListener (console.log.bind (console, 'listner 3'));
  s.dispatch (11, 12);  // -> "listener 3" 11 12
  s.dispatch (13, 14);  // nothing  

});
```

advanced usage
--------------

actually this library intended to be base for more complicated objects, so feel free to do something like this:

```javascript
function jsLoader () {
  this.ready = new signal ();
  this.error = new signal ();
}
jsLoader.prototype.load = function () {
  var self = this;
  someAsyncFunction (function (err, result){
    if (err) {
      self.error.dispatch (err);
    } else {
      self.ready.dispatch (result);
    }
  });
}
```

benchmark
---------

i'm to lazy to do benchmark test, but web inspector's profiler told me, that is pretty fast

license
-------
tiny amd events library for common use

Copyright (C) 2013  apsmav@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.
If not, see <http://www.gnu.org/licenses/>.
