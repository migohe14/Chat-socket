const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

io.on('connection', socket => {
    console.log('user connected')
});

//Send static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
server.listen(3000, () => {
    console.log('server on port 3000')
})