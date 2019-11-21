
// Register module/require aliases
require('module-alias/register');

// Load .env Enviroment Variables to process.env

require('mandatoryenv').load([
    'DB_URL',
    'PORT'
]);

// Require dependencies

const http = require('http');
const socketio = require('socket.io');

const { PORT } = process.env;

const server = http.createServer();
const io = socketio(server);

io.on('connection', require('@events/events'));

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});