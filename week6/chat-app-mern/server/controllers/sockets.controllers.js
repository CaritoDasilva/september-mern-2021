const socket = require('socket.io');

const saludoDesdeServer = 'Hola ninjas estoy saludando desde el server, con mis sockets wooooowwwww!!!!!'

module.exports.socketEvents = (server, cors) => {
    const io = socket(server, { cors: true });

    io.on("connection", socket => {
        console.log(socket.id);

        io.emit('from-server', saludoDesdeServer);
    })
}