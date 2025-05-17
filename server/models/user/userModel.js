const mongoose = require("../../utils/libs");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        match: /^[a-zA-Z]+$/,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        match: /^[a-zA-Z]+$/,
        minLength: 5,
        maxLength: 20,
        lowercase: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        match: /^[a-zA-Z]+$/,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        match: /^[a-zA-Z0-9]+$/,
        minLength: 5,
        maxLength: 20,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        maxLength: 50,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email',
        }
    },
    role: {
        type: String,
        default: 'user',
        required: true,
    }
});

const userModel = mongoose.model('user', userSchema);