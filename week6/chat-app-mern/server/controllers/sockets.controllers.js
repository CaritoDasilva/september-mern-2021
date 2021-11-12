const socket = require('socket.io');
const User = require('../models/user.model');
const saludoDesdeServer = 'Hola ninjas estoy saludando desde el server, con mis sockets wooooowwwww!!!!!'

const getUsers = async () => {
    try {
        const users = await User.find();
        return users;

    } catch(err) {
        return err;
    }
}

module.exports.socketEvents = (server, cors) => {
    const io = socket(server, { cors: true });

    io.on("connection", async socket => {
        console.log(socket.id);

        io.emit('from-server', saludoDesdeServer);

        io.emit('users-list', await getUsers());

        socket.on('from-client', data => console.log(data))
    })
}