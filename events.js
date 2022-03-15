const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('myEvent', (message)=>{

   console.log(`Message: ${message}`);

});


emitter.emit('myEvent', 'Hello Alice!');

