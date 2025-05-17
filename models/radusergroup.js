const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'radusergroup',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(64),
                allowNull: false,
                defaultValue: '',
            },
            groupname: {
                type: DataTypes.STRING(64),
                allowNull: false,
                defaultValue: '',
            },
            priority: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            tableName: 'radusergroup',
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
                    fields: [{ name: 'username', length: 32 }],
                },
            ],
        }
    );
};
