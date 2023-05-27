const eventEmitter = require('events');

const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends eventEmitter {
    log(msg)    //log is a method of Logger class which is a child of eventEmitter class and hence inherits all the properties of eventEmitter class and hence we can use emit method here to emit an event called message and pass the message as a parameter to the event handler function which is defined in the index.js file
    {
        //Call event
        this.emit('message',{id: uuid.v4(),msg});
    }
}

module.exports = Logger;  // we are exporting the Logger class so that we can use it in other files