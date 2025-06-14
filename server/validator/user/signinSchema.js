const { Joi } = require("../../utils/libs");

const usernameSchema = Joi.object({
    username: Joi.string()
        .trim()
        .min(5)
        .max(20)
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
            'string.min':'username should atleast 5 characters',
            'string.max':'username should less than 20 characters',
            'string.empty':'username cannot be empty string',
            'string.pattern.base':'Invalid username pattern',
            'any.required':'username is required',
        }),
    password: Joi.string()
        .trim()
        .min(5)
        .max(20)
        .alphanum()
        .required()
        .pattern(/^[A-Za-z0-9]+$/)
        .messages({
            'string.min':'password should atleast 5 characters',
            'string.max':'password should less than 20 characters',
            'string.alphanum':'password only alpha number allowed',
            'string.empty':'password cannot be empty string',
            'string.pattern.base':'password invalid pattern',
            'any.required':'password is required',
        })
        

});


module.exports = usernameSchema;