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
const allProducts = async (req, res) => {

    try{
        const result = await sequelize.query(
            `SELECT * FROM producto`,
        { type: sequelize.QueryTypes.SELECT })
        console.log(result);
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la busqueda de todos los tipos de usuarios ${error}`)
    }
};


//update
//delete
//search by id - get by ID
module.exports = {
    createProduct
};
