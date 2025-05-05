const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('radcheck', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    attribute: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    op: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "=="
    },
    value: {
      type: DataTypes.STRING(253),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'radcheck',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "username",
        using: "BTREE",
        fields: [
          { name: "username", length: 32 },
        ]
      },
    ]
  });
};
