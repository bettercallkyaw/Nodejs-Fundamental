const EventEmitter=require('events');
const uuid = require('uuid');

//console.log(uuid.v4());

class Logger extends EventEmitter{
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(),msg});
    }
}

const logger1=new Logger();

logger1.on('message',data=>console.log('Called Listener',data));

logger1.log('hello');
logger1.log('hi');
logger1.log('nice');

//module.exports=Logger;