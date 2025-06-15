const { mongoose, validator } = require("../../utils/libs.js");


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        maxlength: [20, 'Firstname maximum of 20 characters'],
        required: [true, 'Firstname is required'],
        match: [/^[A-Za-z\s\-']+$/, 'Firstname should only contain letters'],
        
    },
    lastname: {
        type: String,
        trim: true,
        maxlength: [20, 'Lastname maximum of 20 characters'],
        required: [true, 'Lastname is required'],
        match: [/^[A-Za-z\s\-']+$/, 'Lastname should only contain letters'],
        
    },
    username: {
        type: String,
        trim: true,
        minlength: [5, 'Username must be atleast 5 characters'],
        maxlength: [20, 'Maximum of 20 characters'],
        require: [true, 'Username is required'],
        match: [/^[A-Za-z]+$/, 'Username must be letters'],
    },
    password: {
        type: String,
        trim: true,
        minlength: [8, 'Password must be atleast 8 characters'],
        maxlength: [20, 'Password  maximum of 20 characters'],
        required: [true, 'Password is required'],
        match: [/^[A-Za-z0-9\.!@#\$%\^&\*()-_\+]{8,20}$/]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'email is required'],
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Invalid email format',
        }
    },
    role: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'roles',
        default: ['684e4bbd3a991fce7478e7b9']
      }      
});


const userModel = mongoose.model("Users", userSchema);


module.exports = userModel;