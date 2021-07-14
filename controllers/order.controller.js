const sequelize = require('../conexion');

//registerStatus
const createStatus = async (req, res) => {
    const { nombre } = req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO estado(nombre)VALUES('${nombre}')`,
            { type: sequelize.QueryTypes.INSERT })
        res.status(201).json({
            msg: 'Estado creado exitosamente',
            body:result});
    } catch(error){
        console.log(`Error en la creacion de un estado ${error}`);
    };
};

//register-paymentMethod - admin
const createPaymentMethod = async (req, res) =>{
    const { nombre } = req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO medio_de_pago(nombre)VALUES('${nombre}')`,
            { type: sequelize.QueryTypes.INSERT })
        res.status(201).json({
            msg: 'Medio de pago creado exitosamente',
            body:result});
    } catch(error){
        console.log(`Error en la creacion de un estado ${error}`);
    };
};

//register-order
const createOrder = async (req, res) => {
    const { detalle, ID_medio_de_pago, ID_usuario, total, products } = req.body;

    try{
        const result = await sequelize.query(
            `INSERT INTO pedido(detalle, ID_estado, ID_medio_de_pago, fecha, ID_usuario, total)
            VALUES('${detalle}', 1, ${ID_medio_de_pago}, now(), ${ID_usuario}, ${total})`,
            { type: sequelize.QueryTypes.INSERT })
            let [ orderID ] = result;//ID del pedido creado
            for await (const product of products){
                const result = await sequelize.query(
                    `INSERT INTO pedido_con_producto(ID_pedido, ID_producto)
                    VALUES(${orderID},${product})`,
                    { type: sequelize.QueryTypes.INSERT })
            }
        res.status(201).json({
            msg: 'Pedido creado exitosamente',
            body: result
        });
    } catch(error){
        console.log(`Error en la creacion de un pedido ${error}`);
    };
};

//readOrderByAdmin
const allOrdersByAdmin =  async (req, res) => {

    try{
        const result = await sequelize.query(
            'SELECT * FROM pedido',
        { type: sequelize.QueryTypes.SELECT })
        res.status(200).json({ body:result });
    } catch(error){
        console.log(`Error en la busqueda de pedidos ${error}`)
    };
};

//readOrderByID
const allOrdersByID =  async (req, res) => {
    const { ID_usuario } = req.body;

    try{
        const result = await sequelize.query(
            `SELECT * FROM pedido WHERE ID_usuario=${ID_usuario}`,
        { type: sequelize.QueryTypes.SELECT })
        res.status(200).json({ body:result });
    } catch(error){
        console.log(`Error en la busqueda de pedidos ${error}`)
    };
};

//updateOrderBy - admin
const updateOrder = async (req, res) => {
    const { ID_pedido, detalle, ID_estado, total } = req.body;

    try{
        const result = await sequelize.query(
            `UPDATE pedido 
            SET detalle='${detalle}', ID_estado=${ID_estado}, total=${total}
            WHERE ID_pedido=${ID_pedido}`,
        { type: sequelize.QueryTypes.UPDATE })
        res.status(201).json({result});
    } catch(error){
        console.log(`Error en la actualizacion de un pedido ${error}`)
    }
};

//deleteOrder = admin
const deleteOrder = async (req, res) => {
    const { ID_pedido } =req.body;

    try{
        const resultProductWithOrder = await sequelize.query(
            `DELETE FROM pedido_con_producto 
            WHERE ID_pedido=${ID_pedido}`,
        { type: sequelize.QueryTypes.DELETE })
        const resultOrder = await sequelize.query(
            `DELETE FROM pedido
            WHERE ID_pedido=${ID_pedido}`,
        { type: sequelize.QueryTypes.DELETE })
        res.status(200).json({resultOrder});
    } catch(error){
        console.log(`Error en la eliminacion de un producto ${error}`)
    }
};

module.exports ={
    createStatus, createPaymentMethod, createOrder, allOrdersByAdmin, allOrdersByID, updateOrder, deleteOrder
};