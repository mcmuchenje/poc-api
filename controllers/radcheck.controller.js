const db = require('../models');

exports.getList = async (req, res) => {
    try {
        const user = await db.radcheck.findOne({
            where: {
                id: req.params.id,
            },
        });

        res.send(user);
    } catch (err) {
        console.log(err.message);
    }
};

exports.getOne = async (req, res) => {
    try {
        const user = await db.radcheck.findOne({
            where: {
                id: req.params.id,
            },
        });

        res.send(user);
    } catch (err) {
        console.log(err.message);
    }
};

exports.getMany = async (req, res) => {
    console.log(req.query);
    try {
        res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
        res.setHeader('X-Total-Count', 319);

        const start = req.query._start;
        const end = req.query._end;

        const limit = end - start + 1;
        const offset = start;

        const users = await db.radcheck.findAll({
            limit,
            offset,
            order: [[req.query._sort, req.query._order]],
        });

        res.send(users);
    } catch (err) {
        console.log(err.message);
    }
};

exports.getManyReference = (req, res) => {};

exports.create = (req, res) => {};

exports.update = (req, res) => {};

exports.updateMany = (req, res) => {};

exports.delete = (req, res) => {};
