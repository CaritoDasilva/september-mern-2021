const { createUser, getAllUsers, getOneUser, deleteUser, updateUser } = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', getAllUsers);
    app.get('/api/users/:id', getOneUser);
    app.delete('/api/users/:id', deleteUser);
    app.put('/api/users/:id', updateUser);
}