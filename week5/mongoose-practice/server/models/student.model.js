const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const StudentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Debe ingresar un nombre al estudiante'],
        minlength: [2, 'El nombre no puede tener menos de 2 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Debe ingresar un email al estudiante'],
        unique: [true, "Este email ya existe, pruebe con uno diferente :)"]
    },
    stack: {
        type: String,
        required: [true, 'Debe ingresar un stack al estudiante'],
    },
    age: {
        type: Number,
        required: [true, 'Debe ingresar la edad al estudiante'],
    }, 
    isActive: {
        type: Boolean,
        default: false
    }, 
    assignmentsFinished: {
        type: Array,
        default: []
    }
}, {timestamps: true});

const Student = mongoose.model('Student', StudentSchema);
StudentSchema.plugin(uniqueValidator);
module.exports = Student;