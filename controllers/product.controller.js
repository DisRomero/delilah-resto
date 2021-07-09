const sequelize = require('../conexion');

//create - insert - post
const createProduct = async (req, res) => {
    const { nombre, precio } =req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO producto(nombre, precio)VALUES('${nombre}', ${precio})`,
        { type: sequelize.QueryTypes.INSERT })
        res.status(201).json({
            message: 'Producto creado exitosamente',
            body:result});
    } catch(error){
        console.log(`Error en la creacion de un producto ${error}`)
    };
};

//read - getAll
const allProducts =  async (req, res) => {

    try{
        const result = await sequelize.query(
            'SELECT * FROM producto',
        { type: sequelize.QueryTypes.SELECT })
        res.status(200).json({ body:result });
    } catch(error){
        console.log(`Error en la busqueda de un productos ${error}`)
    };
};

//update
const updateProduct = async (req, res) => {
    const { ID_producto,  nombre, precio } =req.body;

    try{
        const result = await sequelize.query(
            `UPDATE producto 
            SET nombre='${nombre}', precio=${precio}
            WHERE ID_producto=${ID_producto}`,
        { type: sequelize.QueryTypes.UPDATE })
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la actualizacion de un producto ${error}`)
    }
};

//delete by id
const deleteProduct = async (req, res) => {
    const { ID_producto } =req.body;

    try{
        const result = await sequelize.query(
            `DELETE FROM producto 
            WHERE ID_producto=${ID_producto}`,
        { type: sequelize.QueryTypes.DELETE })
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la eliminacion de un producto ${error}`)
    }
};

module.exports = {
    createProduct, allProducts, updateProduct, deleteProduct
};