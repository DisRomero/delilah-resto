//const SECRET = "s3c4et0";//dotenv
const jwt = require('jsonwebtoken');
require('dotenv').config()//
const SECRET = process.env.LANG//

// autorizacion
const validarTokenAdmin =  (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    if(!jwtToken) {
        return res.status(401).json({msg: "Usuario o contrasenia no valida"})
    }
    const jwtClient = jwtToken.split(" ")[1];
     // autorizacion mitoken
    jwt.verify(jwtClient, SECRET, (error, decoded) => {
        if(error) {
            return res.status(401).json({msg: "token invalido"})
        }
        console.log(decoded)
        if(decoded.tipo_usuario!==2){
            return res.status(401).json({msg: "El usuario no es administrador"})
        }
        next();
    })
};

module.exports = {
    validarTokenAdmin
};