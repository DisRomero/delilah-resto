const Sequelize = require('sequelize');
const path = 'mysql://root:1235212.acamicA@localhost:3307/resto';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: true
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexion a la base de datos exitoso');
    })
    .catch(err => {
        console.error('Error de conexion: ', err);
    })

module.exports = sequelize;