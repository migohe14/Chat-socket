module.exports = function(io) {
    io.on('connection', socket => {
        console.log('user connected')

        socket.on('send message', function(data) {
            //servidor reenvía el dato a todos los sockets
            io.sockets.emit('new message', data)
        })
    });
}