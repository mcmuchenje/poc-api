const db = require('../models');

exports.getList = (req, res) => {};

exports.getOne = async (req, res) => {
    try {
        const user = await db.radcheck.findOne({
            where: {
                id: 1
            }
        })

        res.send(user)
        
    } catch (err) {
        console.log(err.message)
    }
};

exports.getMany = (req, res) => {};

exports.getManyReference = (req, res) => {};

exports.create = (req, res) => {};

exports.update = (req, res) => {};

exports.updateMany = (req, res) => {};

exports.delete = (req, res) => {};
