const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'radpostauth',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(64),
                allowNull: false,
                defaultValue: '',
            },
            pass: {
                type: DataTypes.STRING(64),
                allowNull: false,
                defaultValue: '',
            },
            reply: {
                type: DataTypes.STRING(32),
                allowNull: false,
                defaultValue: '',
            },
            authdate: {
                type: DataTypes.DATE(6),
                allowNull: false,
                defaultValue: 'current_timestamp(6)',
            },
            class: {
                type: DataTypes.STRING(64),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'radpostauth',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'username',
                    using: 'BTREE',
                    fields: [{ name: 'username' }],
                },
                {
                    name: 'class',
                    using: 'BTREE',
                    fields: [{ name: 'class' }],
                },
            ],
        }
    );
};
