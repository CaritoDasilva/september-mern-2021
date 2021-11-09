const socket = require('socket.io');

const saludo = "saludos desde el server"

module.exports.socketEvents = (server, cors) => {
    const io = socket(server, { cors: true });
    io.on("connection", socket => {
        console.log(socket.id);
        io.emit("from-server", saludo );
        socket.on("from-client", data => console.log(data))
    })
}