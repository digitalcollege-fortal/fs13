const { DataTypes } = require('sequelize');
const orm = require('../connection/orm');

let CustomerSchema = {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(20)
    }
};

const Customer = orm.define('tb_customer', CustomerSchema);

orm.sync().then(() => {
    console.log('tabela de clientes atualizada');
})

module.exports = {Customer, CustomerSchema};