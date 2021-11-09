const { register, login, saludo, logout } = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/users/register', register);
    app.post('/api/users/login', login);
    app.get('/api/users/saludo', authenticate, saludo);
    app.post('/api/users/logout', logout);
}