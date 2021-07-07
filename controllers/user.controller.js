//const SECRET = "s3c4et0";//dotenv
//const EXPIRES = '1h';//dotenv
//git ignore - node modules - express - git rm nombreCarpeta, commit
const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()//
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//create - post
const register = async (req, res) => {
    const { nombre, correo, telefono, direccion, contrasenia } =req.body;
    
//validacion de campos - 

    try{
        // if( contrasenia.length>10 ){
        //     return res.status(400).json({msg: 'El tamanio de la contrasenia no es valido'});
        // }

        const result = await sequelize.query(
            `INSERT INTO usuario(nombre, correo, telefono, direccion, contrasenia, ID_tipo_de_usuario) 
            VALUES('${nombre}', '${correo}', '${telefono}', '${direccion}', '${contrasenia}', 1)`,
        { type: sequelize.QueryTypes.INSERT });

        res.status(201).json({msg:'Creacion de usuario exitosa'});

    } catch(error){
        console.log(`Error en la creacion del usuario ${error}`);
        res.status(400).json({msg:'Ups, se ha ocasionado un error'});
    }
};

//login
const login = async (req, res) => {
    const { correo, contrasenia } =req.body;
    
    try{
        if( contrasenia.length<=1 ){
            return res.status(400).json({msg: 'La contrasenia es obligatorio'});
        }

        let result = await sequelize.query(
            `SELECT * FROM usuario WHERE correo="${correo}" AND contrasenia="${contrasenia}"`,
        { type: sequelize.QueryTypes.SELECT })
        result=result[0];

        if(result){
            let token = jwt.sign({ correo: result.correo, tipo_usuario: result.ID_tipo_de_usuario }, SECRET,{ expiresIn: EXPIRES });
            return res.status(201).json({msg:'Login exitoso', token:token});
        }
        return res.status(404).json({msg: 'Usuario no encontrado'});
        
    } catch(error){
        console.log(`Error en el login ${error}`);
        res.status(400).json({msg:'Ups, se ha ocasionado un error'});
    }
    };

module.exports = {
    register, login
};