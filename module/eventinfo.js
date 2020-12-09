const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(){                  //callback function
    console.log('Listener Called ! ! !');
});

emitter.on('Logging', (arg) => {
    console.log('Logging called', arg);
})

emitter.emit('Logging',{data: 'message'});

//Raise an Event
emitter.emit('messageLogged');








