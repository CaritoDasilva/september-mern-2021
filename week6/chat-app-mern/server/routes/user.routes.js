const { createUser, getAllUsers, getOneUser } = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', getAllUsers);
    app.get('/api/users/:id', getOneUser);
}