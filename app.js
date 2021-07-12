const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const sequelize = require('./conexion');

//routers
const userRouter = require('./routers/user.routes');
const productRouter = require('./routers/product.routes');
const orderRouter = require('./routers/order.routes');

//middleware
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

//routes use
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

//servidor
app.listen(port, () => {
    console.log(`Ejecutando sistema en el puerto ${port}`);
});


