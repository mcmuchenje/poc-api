const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nasreload', {
    nasipaddress: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    reloadtime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nasreload',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nasipaddress" },
        ]
      },
    ]
  });
};
