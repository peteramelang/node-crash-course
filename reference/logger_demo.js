const Logger = require('../logger');

const logger = new Logger();

logger.on('message', (data) => {
	console.log('Log written to file: ', data);
});

logger.log('Hello World');
logger.log('This is a test');
