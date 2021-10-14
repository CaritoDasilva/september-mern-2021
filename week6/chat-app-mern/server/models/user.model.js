const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Debe ingresar un nombre de usuario'],
        minlength: [2, 'El nombre no puede tener menos de 2 caracteres']
    },
    email: {
        type: String,
        required: [true, 'Debe ingresar un email válido'],
        unique: [true, "Este email ya existe, pruebe con uno diferente :)"]
    },
    age: {
        type: Number,
        required: [true, 'Debe ingresar la edad de usuario'],
    }, 
    isOnline: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, 'Debe ingresar una contraseña']
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator, { message: 'Este email ya existe, favor ingresar uno nuevo.' });
module.exports = User;