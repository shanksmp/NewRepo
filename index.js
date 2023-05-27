const Logger = require('./logger');

const logger = new Logger();

logger.on('message',(data) => console.log('Called Listener:',data));

//logger.on is used to listen to the event called message and then we pass a callback function which will be called when the event is emitted and the data is passed to the callback function as a parameter which we can use in the callback function

logger.log('Hello World!'); // we are calling the log method of the Logger class which is defined in the logger.js file and passing the message as a parameter to the log method which will emit the message event and the callback function will be called and the message will be printed on the console