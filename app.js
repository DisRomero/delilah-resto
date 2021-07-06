const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const sequelize = require('./conexion');

//routers
const userTypeRouter = require('./routers/userType.routes');
const productRouter = require('./routers/product.route');
//middleware
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

//routes use
app.use('/', userTypeRouter);
app.use('/', productRouter);

//servidor
app.listen(port, () => {
    console.log(`Ejecutando sistema en el puerto ${port}`);
});


