const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('radacct', {
    radacctid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    acctsessionid: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    acctuniqueid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "acctuniqueid"
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    realm: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ""
    },
    nasipaddress: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    nasportid: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nasporttype: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    acctstarttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acctupdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acctstoptime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acctinterval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acctsessiontime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    acctauthentic: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    connectinfo_start: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    connectinfo_stop: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    acctinputoctets: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    acctoutputoctets: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    calledstationid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    callingstationid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    acctterminatecause: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    servicetype: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    framedprotocol: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    framedipaddress: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    framedipv6address: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    framedipv6prefix: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    framedinterfaceid: {
      type: DataTypes.STRING(44),
      allowNull: false,
      defaultValue: ""
    },
    delegatedipv6prefix: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    class: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'radacct',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "radacctid" },
        ]
      },
      {
        name: "acctuniqueid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "acctuniqueid" },
        ]
      },
      {
        name: "username",
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "framedipaddress",
        using: "BTREE",
        fields: [
          { name: "framedipaddress" },
        ]
      },
      {
        name: "framedipv6address",
        using: "BTREE",
        fields: [
          { name: "framedipv6address" },
        ]
      },
      {
        name: "framedipv6prefix",
        using: "BTREE",
        fields: [
          { name: "framedipv6prefix" },
        ]
      },
      {
        name: "framedinterfaceid",
        using: "BTREE",
        fields: [
          { name: "framedinterfaceid" },
        ]
      },
      {
        name: "delegatedipv6prefix",
        using: "BTREE",
        fields: [
          { name: "delegatedipv6prefix" },
        ]
      },
      {
        name: "acctsessionid",
        using: "BTREE",
        fields: [
          { name: "acctsessionid" },
        ]
      },
      {
        name: "acctsessiontime",
        using: "BTREE",
        fields: [
          { name: "acctsessiontime" },
        ]
      },
      {
        name: "acctstarttime",
        using: "BTREE",
        fields: [
          { name: "acctstarttime" },
        ]
      },
      {
        name: "acctinterval",
        using: "BTREE",
        fields: [
          { name: "acctinterval" },
        ]
      },
      {
        name: "acctstoptime",
        using: "BTREE",
        fields: [
          { name: "acctstoptime" },
        ]
      },
      {
        name: "nasipaddress",
        using: "BTREE",
        fields: [
          { name: "nasipaddress" },
        ]
      },
      {
        name: "class",
        using: "BTREE",
        fields: [
          { name: "class" },
        ]
      },
    ]
  });
};
