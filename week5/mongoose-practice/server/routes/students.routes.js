const { createStudent, getAllStudents, getOneStudent, editEstudent, deleteStudent } = require('../controllers/students.controllers');

module.exports = app => {
    app.post('/api/students', createStudent);
    app.get('/api/students', getAllStudents);
    app.get('/api/students/:id', getOneStudent);
    app.put('/api/students/:id', editEstudent);
    app.delete('/api/students/:id', deleteStudent);
}