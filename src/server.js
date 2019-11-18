
// Register module/require aliases
require('module-alias/register');

// Load .env Enviroment Variables to process.env
require('mandatoryenv').load([
    'DB_URL',
    'DB_COLLECTION',
    'PORT'
]);

// Require dependencies
const http = require('http');
const socketio = require('socket.io');

const { PORT } = process.env;

const server = http.createServer();
const io = socketio(server);


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});