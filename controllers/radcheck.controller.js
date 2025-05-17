const db = require('../models');

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
        const start = Number(req.query._start);
        const end = Number(req.query._end);

        const limit = end - start + 1;
        const offset = start;

        const users = await db.radcheck.findAndCountAll({
            limit,
            offset,
            order: [[req.query._sort, req.query._order]],
        });

        res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
        res.setHeader('X-Total-Count', users.count);

        res.send(users.rows);
        
    } catch (err) {
        console.log(err.message);
    }
};

exports.create = (req, res) => {
    console.log(req.body)
};

exports.update = (req, res) => {};

exports.updateMany = (req, res) => {};

exports.delete = (req, res) => {};
