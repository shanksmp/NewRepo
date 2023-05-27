const eventEmitter = require('events');

//Create class

class MyEmitter extends eventEmitter {}

//Init object

const myEmitter = new MyEmitter();

//Event listener

myEmitter.on('event',() => console.log('Event fired!'));

//Init event

myEmitter.emit('event');




