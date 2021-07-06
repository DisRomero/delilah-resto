const sequelize = require('../conexion');

//create - post
const createUserType = async (req, res) => {
    const { nombre } =req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO tipo_de_usuario(nombre) VALUES('${nombre}')`,
        { type: sequelize.QueryTypes.INSERT })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la creacion de un tipo de usuario ${error}`)
    }
};

//read - get
const getAllUserType = async (req, res) => {

    try{
        const result = await sequelize.query(
            `SELECT * FROM tipo_de_usuario`,
        { type: sequelize.QueryTypes.SELECT })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la busqueda de todos los tipos de usuarios ${error}`)
    }
};

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

//delete - delete
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