var DataTypes = require('sequelize').DataTypes;
var _nas = require('./nas');
var _nasreload = require('./nasreload');
var _radacct = require('./radacct');
var _radcheck = require('./radcheck');
var _radgroupcheck = require('./radgroupcheck');
var _radgroupreply = require('./radgroupreply');
var _radpostauth = require('./radpostauth');
var _radreply = require('./radreply');
var _radusergroup = require('./radusergroup');

function initModels(sequelize) {
    var nas = _nas(sequelize, DataTypes);
    var nasreload = _nasreload(sequelize, DataTypes);
    var radacct = _radacct(sequelize, DataTypes);
    var radcheck = _radcheck(sequelize, DataTypes);
    var radgroupcheck = _radgroupcheck(sequelize, DataTypes);
    var radgroupreply = _radgroupreply(sequelize, DataTypes);
    var radpostauth = _radpostauth(sequelize, DataTypes);
    var radreply = _radreply(sequelize, DataTypes);
    var radusergroup = _radusergroup(sequelize, DataTypes);

    return {
        nas,
        nasreload,
        radacct,
        radcheck,
        radgroupcheck,
        radgroupreply,
        radpostauth,
        radreply,
        radusergroup,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
