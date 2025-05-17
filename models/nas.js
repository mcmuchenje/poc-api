const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'nas',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            nasname: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            shortname: {
                type: DataTypes.STRING(32),
                allowNull: true,
            },
            type: {
                type: DataTypes.STRING(30),
                allowNull: true,
                defaultValue: 'other',
            },
            ports: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            secret: {
                type: DataTypes.STRING(60),
                allowNull: false,
                defaultValue: 'secret',
            },
            server: {
                type: DataTypes.STRING(64),
                allowNull: true,
            },
            community: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING(200),
                allowNull: true,
                defaultValue: 'RADIUS Client',
            },
        },
        {
            sequelize,
            tableName: 'nas',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'nasname',
                    using: 'BTREE',
                    fields: [{ name: 'nasname' }],
                },
            ],
        }
    );
};
