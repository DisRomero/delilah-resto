const { validationResult, check } = require('express-validator');

const registerInputs = [
    check('nombre')
        .isLength({ min:10 })
        .withMessage('El nombre debe tener mas de 10 caracteres'),
    check('correo')
        .isEmail()
        .withMessage('El campo correo no es valido'),
    check('telefono')
        .isNumeric()
        .withMessage('El telefono no es valido')
        .isLength({ min:7})
        .withMessage('El telefono debe de tener mas de 8 digitos'),
    check('contrasenia')
        .isLength({min:10, max:10})
        .withMessage('La contrasenia debe ser de 10 caracteres'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(), 
                msg: 'error en el validador del registro de usuario'
            });
        }
        next();
    }
];

const loginInputs = [
    check('correo')
        .isEmail()
        .withMessage('Error en el campo correo'),
    check('contrasenia')
        .isLength({min:10, max:10})
        .withMessage('Error en el campo contrasenia'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(), 
                msg: 'error en el validador del login'
            });
        }
        next();
    }
];

module.exports = {
    registerInputs, loginInputs
};