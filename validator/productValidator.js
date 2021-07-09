const { validationResult, check } = require('express-validator');

const createProduct = [
    check('nombre')
        .isLength({ min:1 })
        .withMessage('El nombre no puede ser vacio'),
    check('precio')
        .isLength({ min: 3 })
        .withMessage('El precio no puede valer menos de 100 pesos')
        .isNumeric()
        .withMessage('El precio no es valido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(409).json({
                errors: errors.array(),
                msg: 'error en el validador de la creacion de un producto'
            });
        }
        next();
    }
];

const updateProduct = [
    check('nombre')
        .isLength({ min:1 })
        .withMessage('Error en el campo nombre'),
    check('precio')
        .isLength({ max:255 })
        .withMessage('Error en el campo precio'),
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

const deleteProduct = [
    check('ID_producto')
        .isLength({ min:1 })
        .withMessage('Error en el campo ID_producto')
        .isNumeric()
        .withMessage('El valor ID_producto no puede ser tipo texto'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors:errors.array(),
                msg: 'error en el validador de la eliminacion del producto'
            });
        }
        next();
    }
]

module.exports = {
     createProduct, updateProduct, deleteProduct
};