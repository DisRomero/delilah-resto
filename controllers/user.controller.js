const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
const SECRET = "s3c4et0";


//create - post
const register = async (req, res) => {
    const { nombre, correo, telefono, direccion, contrasenia } =req.body;
//validacion de campos


    try{
        if( contrasenia.length>10 ){
            return res.status(400).json({msg: 'El tamanio de la contrasenia no es valido'});
        }

        const result = await sequelize.query(
            `INSERT INTO usuario(nombre, correo, telefono, direccion, contrasenia, ID_tipo_de_usuario) 
            VALUES('${nombre}', '${correo}', '${telefono}', '${direccion}', '${contrasenia}', 1)`,
        { type: sequelize.QueryTypes.INSERT })
        console.log(result);//
        res.status(201).json({msg:'Creacion de usuario exitosa'});
    } catch(error){
        console.log(`Error en la creacion de un usuario ${error}`);
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
            console.log(result);//
            result=result[0];

            if(result){
                let token = jwt.sign({ correo: result.correo, tipo_usuario: result.ID_tipo_de_usuario }, SECRET);
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

// //read - get
// const getAllUser = async (req, res) => {

//     try{
//         const result = await sequelize.query(
//             `SELECT * FROM tipo_de_usuario`,
//         { type: sequelize.QueryTypes.SELECT })
//         console.log(result);
//         res.status(200).json({result});
//     } catch(error){
//         console.log(`Error en la busqueda de todos los tipos de usuarios ${error}`)
//     }
// };

// //update - put
// const updateUser = async (req, res) => {
//     const { ID_tipo_de_usuario,  nombre } =req.body;

//     try{
//         const result = await sequelize.query(
//             `UPDATE tipo_de_usuario SET nombre='${nombre}' WHERE ID_tipo_de_usuario=${ID_tipo_de_usuario}`,
//         { type: sequelize.QueryTypes.UPDATE })
//         console.log(result);
//         res.status(205).json({result});
//     } catch(error){
//         console.log(`Error en la actualizacion de un tipo de usuario ${error}`)
//     }
// };

// //delete - delete by ID
// const deleteUser = async (req, res) => {
//     const { ID_tipo_de_usuario } =req.body;

//     try{
//         const result = await sequelize.query(
//             `DELETE FROM tipo_de_usuario WHERE ID_tipo_de_usuario=${ID_tipo_de_usuario}`,
//         { type: sequelize.QueryTypes.DELETE })
//         console.log(result);
//         res.status(200).json({result});
//     } catch(error){
//         console.log(`Error en la eliminacion de un tipo de usuario ${error}`)
//     }
// };

// //search by id - get
// const searchUserByID = async (req, res) => {
//     const { ID_tipo_de_usuario } =req.body;

//     try{
//         const result = await sequelize.query(
//             `SELECT * FROM tipo_de_usuario WHERE ID_tipo_de_usuario=${ID_tipo_de_usuario}`,
//         { type: sequelize.QueryTypes.SELECT })
//         console.log(result);
//         res.status(200).json({result});
//     } catch(error){
//         console.log(`Error en la bsuqueda de un tipo de usuario por ID ${error}`)
//     }
// };


