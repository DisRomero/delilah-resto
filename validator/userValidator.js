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
        .isLength({ min:10, max:10 })
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
        .isLength({ min:10, max:10 })
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

const updateUserName = [
    check('ID_usuario')
        .isLength({ min:1 })
        .withMessage('Error en el campo ID_usuario'),
    check('nombre')
        .isLength({ max:255 })
        .withMessage('Error en el campo nombre'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(), 
                msg: 'error en el validador de la modificacion del usuario'
            });
        }
        next();
    }
];

const deleteUser = [
    check('ID_usuario')
        .isLength({ min:1 })
        .withMessage('Error en el campo ID_usuario'),
    (req, res, next) => {
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la eliminacion del usuario'
            });
        }
        next();
    }
];

const updateUserTypeName = [
    check('ID_tipo_de_usuario')
        .isLength({ min:1 })
        .withMessage('Error en el campo ID_tipo_de_usuario'),
    check('nombre')
        .isLength({ max:255 })
        .withMessage('Error en el campo nombre'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(), 
                msg: 'error en el validador de la modificacion del tipo de usuario'
            });
        }
        next();
    }
];

const deleteUserType = [
    check('ID_tipo_de_usuario')
        .isLength({ min:1 })
        .withMessage('Error en el campo ID_tipo_de_usuario'),
    (req, res, next) => {
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la eliminacion del tipo de usuario'
            });
        }
        next();
    }
];

module.exports = {
    registerInputs, loginInputs, updateUserName, deleteUser, updateUserTypeName, deleteUserType
};