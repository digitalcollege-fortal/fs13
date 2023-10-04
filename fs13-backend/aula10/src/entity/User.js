const { DataTypes } = require('sequelize');
const orm = require('../connection/orm');

const User = orm.define('tb_user', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
    },
});

// node src/entity/User.js

orm.sync().then(() => {
    console.log('Pronto, tabela de usuarios atualizada');
});

module.exports = User;