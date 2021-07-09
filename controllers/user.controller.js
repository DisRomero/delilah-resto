const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

const register = async (req, res) => {
    const { nombre, correo, telefono, direccion, contrasenia } =req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO usuario(nombre, correo, telefono, direccion, contrasenia, ID_tipo_de_usuario) 
            VALUES('${nombre}', '${correo}', '${telefono}', '${direccion}', '${contrasenia}', 1)`,
        { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({msg:'Creacion de usuario exitosa'});
    } catch(error){
        console.log(`Error en la creacion del usuario ${error}`);
        res.status(400).json({msg:'Ups, se ha ocasionado un error en el registro de un usuario'});
    }
};

const login = async (req, res) => {
    const { correo, contrasenia } =req.body;
    
    try{       
        let result = await sequelize.query(
            `SELECT * FROM usuario WHERE correo="${correo}" AND contrasenia="${contrasenia}"`,
        { type: sequelize.QueryTypes.SELECT })
        result=result[0];
        if(result){
            let token = jwt.sign({ correo: result.correo, tipo_usuario: result.ID_tipo_de_usuario }, SECRET,{ expiresIn: EXPIRES });
            return res.status(200).json({msg:'Login exitoso', token:token});
        }
        return res.status(404).json({msg: 'Usuario no encontrado'});
        
    } catch(error){
        console.log(`Error en el login ${error}`);
        res.status(400).json({msg:'Ups, se ha ocasionado un error iniciando sesion'});
    }
};

// //read - getAllUser
const allUser = async (req, res) => {
    try{
        const result = await sequelize.query(
            `SELECT * FROM usuario`,
            { type: sequelize.QueryTypes.SELECT });
            res.status(200).json({ body: result, msg:'Lista de usuarios desplegada' });
    } catch(error){
        console.log(`Error en la visualizacion de todos los usuarios ${error}`);
        res.status(400).json({ msg:'Ups, se ha ocasionado un error en la visualizacion de los usuarios'});
    }
};

// //update - updateUserNameByID
const editUser = async (req, res) => {
    const {ID_usuario, nombre} = req.body;
    try{
        const result = await sequelize.query(
            `UPDATE usuario
            set nombre = '${nombre}'
            where ID_usuario = ${ID_usuario};`,
            { type: sequelize.QueryTypes.UPDATE });
            res.status(200).json({ body: result, msg:'Usuario modificado con exito' });
    } catch(error){
        console.log(`Error en la modificacion del usuario ${error}`);
        res.status(400).json({ msg:'Ups, se ha ocasionado un error en la modificacion del usuario'});
    }
};

//deleteUserByID
const deleteUser = async (req, res) => {
    const {ID_usuario} = req.body;
    try{
        const result = await sequelize.query(
            `DELETE FROM usuario
            where ID_usuario = ${ID_usuario};`,
            { type: sequelize.QueryTypes.DELETE });
            res.status(200).json({ body: result, msg:'Usuario eliminado con exito' });
    } catch(error){
        console.log(`Error en la eliminacion del usuario ${error}`);
        res.status(400).json({ msg:'Ups, se ha ocasionado un error en la eliminacion del usuario'});
    }
};

// //read - getAllUserType
const allUserType = async (req, res) => {
    try{
        const result = await sequelize.query(
            `SELECT * FROM tipo_de_usuario`,
            { type: sequelize.QueryTypes.SELECT });
            res.status(200).json({ body: result, msg:'Lista de los tipos de usuarios desplegada' });
    } catch(error){
        console.log(`Error en la visualizacion de todos los tipos de usuarios ${error}`);
        res.status(400).json({ msg:'Ups, se ha ocasionado un error en la visualizacion de los tipos de usuarios'});
    }
};

// //update - updateUserTypeNameByID
const editUserType = async (req, res) => {
    const {ID_tipo_de_usuario, nombre} = req.body;
    try{
        const result = await sequelize.query(
            `UPDATE tipo_de_usuario
            set nombre = '${nombre}'
            where ID_tipo_de_usuario = ${ID_tipo_de_usuario};`,
            { type: sequelize.QueryTypes.UPDATE });
            res.status(200).json({ body: result, msg:'Tipo de usuario modificado con exito' });
    } catch(error){
        console.log(`Error en la modificacion del tipo de usuario ${error}`);
        res.status(400).json({ msg:'Ups, se ha ocasionado un error en la modificacion del tipo de usuario'});
    }
};

//deleteUserTypeByID
const deleteUserType = async (req, res) => {
    const {ID_tipo_de_usuario} = req.body;
    try{
        const result = await sequelize.query(
            `DELETE FROM tipo_de_usuario
            where ID_tipo_de_usuario = ${ID_tipo_de_usuario};`,
            { type: sequelize.QueryTypes.DELETE });
            res.status(200).json({ body: result, msg:'Tipo de usuario eliminado con exito' });
    } catch(error){
        console.log(`Error en la eliminacion del tipo de usuario ${error}`);
        res.status(400).json({ msg:'Ups, se ha ocasionado un error en la eliminacion del tipo de usuario'});
    }
};

module.exports = {
    register, login, allUser, editUser, deleteUser, allUserType, editUserType, deleteUserType
};