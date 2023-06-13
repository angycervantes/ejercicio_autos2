//LOG de usuario
//

import { Schema as _Schema, model as _model } from "mongoose";

const Schema = _Schema

const UserSchema = new Schema( {
    username: {
        type : String,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        validate: function(value) {
            const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return mail.test(value)
        },
        message: 'Formato de correo no valido'
    },
    password: String,
    nombre: String,
    apePaterno: String,
    rol: {
        type: String,
        enum: ['user', 'admin','cliente'],
        default: 'cliente'

    }
})

const UserModel = _model('users', UserSchema );
export default UserModel;