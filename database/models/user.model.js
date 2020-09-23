const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },

    login: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        default: 'user'
    },

    count: {
        buttonOne: {
            type: Number,
            default: 0
        },
        buttonTwo: {
            type: Number,
            default: 0
        },
        buttonThree: {
            type: Number,
            default: 0
        }
    }
})


module.exports = model('user', userSchema)