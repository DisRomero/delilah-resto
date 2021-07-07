const sequelize = require('../conexion');

//create - insert - post
const createProduct = async (req, res) => {
    const { nombre, precio } =req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO producto(nombre, precio)VALUES('${nombre}', ${precio})`,
        { type: sequelize.QueryTypes.INSERT })
        console.log(result);
        res.status(201).json({
            message: 'Producto creado exitosamente',
            body:result});
    } catch(error){
        console.log(`Error en la creacion de un producto ${error}`)
    };
};

//read - getAll//////
const allProducts =  async (req, res) => {

    try{
        const result = await sequelize.query(
            'SELECT * FROM producto',
        { type: sequelize.QueryTypes.SELECT })
        console.log(result);
        res.status(200).json({ body:result });
    } catch(error){
        console.log(`Error en la busqueda de un productos ${error}`)
    };
};


//update
const updateProduct = async (req, res) => {
    const { ID_producto,  nombre } =req.body;

    try{
        const result = await sequelize.query(
            `UPDATE producto SET nombre='${nombre}' WHERE ID_producto=${ID_producto}`,
        { type: sequelize.QueryTypes.UPDATE })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la actualizacion de un tipo de usuario ${error}`)
    }
};

//delete by id
//search by id - get by ID
module.exports = {
    createProduct, allProducts, updateProduct
};


/**
 * 


//update - put
const updateUserType = async (req, res) => {
    const { ID_tipo_de_usuario,  nombre } =req.body;

    try{
        const result = await sequelize.query(
            `UPDATE tipo_de_usuario SET nombre='${nombre}' WHERE ID_tipo_de_usuario=${ID_tipo_de_usuario}`,
        { type: sequelize.QueryTypes.UPDATE })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la actualizacion de un tipo de usuario ${error}`)
    }
};

//delete - delete by ID
const deleteUserType = async (req, res) => {
    const { ID_tipo_de_usuario } =req.body;

    try{
        const result = await sequelize.query(
            `DELETE FROM tipo_de_usuario WHERE ID_tipo_de_usuario=${ID_tipo_de_usuario}`,
        { type: sequelize.QueryTypes.DELETE })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la eliminacion de un tipo de usuario ${error}`)
    }
};

//search by id - get
const searchUserTypeByID = async (req, res) => {
    const { ID_tipo_de_usuario } =req.body;

    try{
        const result = await sequelize.query(
            `SELECT * FROM tipo_de_usuario WHERE ID_tipo_de_usuario=${ID_tipo_de_usuario}`,
        { type: sequelize.QueryTypes.SELECT })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la bsuqueda de un tipo de usuario por ID ${error}`)
    }
};
module.exports = {
    createUserType, getAllUserType, updateUserType, deleteUserType, searchUserTypeByID
};

 */