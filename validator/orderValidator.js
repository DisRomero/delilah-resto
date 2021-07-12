const { validationResult, check } = require('express-validator');

const registerStatus = [
    check('nombre')
        .isString()
        .withMessage('Error en el formato del campo nombre')
        .isLength({ min: 1 })
        .withMessage('Error el campo nombre es obligatorio'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador del registro de estado'
            });
        }
        next();
    }
];

const registerPaymentMethod = [
    check('nombre')
        .isString()
        .withMessage('Error en el formato del campo nombre')
        .isLength({ min: 1 })
        .withMessage('Error el campo nombre es obligatorio'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador del registro de medio de pago'
            });
        }
        next();
    }
];

const registerOrder = [
    check('detalle')
        .isString()
        .withMessage('Error en el formato del campo detalle')
        .isLength({ min: 1 })
        .withMessage('Error el campo detalle es obligatorio'),
    check('ID_medio_de_pago')
        .isInt()
        .withMessage('Error el formato del campo ID_medio_de_pago es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo ID_medio_de_pago es obligatorio'),
    check('ID_usuario')
        .isInt()
        .withMessage('Error el formato del campo ID_usuario es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo ID_usuario es obligatorio'),
    check('total')
        .isNumeric()
        .withMessage('Error el formato del campo total es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo total es obligatorio'),
    check('products')
        .isLength({ min: 1 })
        .withMessage('Error el campo products es obligatorio'),
    (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({
                    errors: errors.array(),
                    msg: 'error en el validador del registro de pedido'
                });
            };
        next();
    }
];

const allMyOrder = [
    check('ID_usuario')
        .isInt()
        .withMessage('Error el formato del campo ID_usuario es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo ID_usuario es obligatorio'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador del registro de medio de pago'
            });
        }
        next();
    }
];

const updateOrder = [
    check('detalle')
        .isString()
        .withMessage('Error en el formato del campo detalle')
        .isLength({ min: 1 })
        .withMessage('Error el campo detalle es obligatorio'),
    check('ID_pedido')
        .isInt()
        .withMessage('Error el formato del campo ID_pedido es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo ID_pedido es obligatorio'),
    check('ID_estado')
        .isInt()
        .withMessage('Error el formato del campo ID_estado es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo ID_estado es obligatorio'),
    check('total')
        .isNumeric()
        .withMessage('Error el formato del campo total es obligatorio')
        .isLength({ min: 1 })
        .withMessage('Error el campo total es obligatorio'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador al editar un pedido'
            });
        }
        next();
    }
];

const deleteOrder = [
    check('ID_pedido')
        .isLength({ min:1 })
        .withMessage('Error en el campo ID_pedido es obligatorio')
        .isInt()
        .withMessage('Error el formato del campo ID_pedido'),
    (req, res, next) => {
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la eliminacion de la orden'
            });
        }
        next();
    }
];

module.exports = {
    registerStatus, registerPaymentMethod, registerOrder, allMyOrder, updateOrder, deleteOrder
};