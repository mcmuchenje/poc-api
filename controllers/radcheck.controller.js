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

exports.create = async (req, res) => {
    try {
        const user = await db.radcheck.create({
            username: req.body.username,
            attribute: 'Cleartext-Password',
            op: ':=',
            value: 'LrYx4s8QXDAnBwG9WC7emc',
        });

        res.send(user);
    } catch (err) {
        console.log(err.message);
    }
};

exports.update = async (req, res) => {
    console.log(req.params);
    try {
        const user = await db.radcheck.findByPk(req.params.id);

        await user.update({ username: req.body.username });

        res.send(user);
    } catch (err) {
        console.log(err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await db.radcheck.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.send(user);
    } catch (err) {
        console.log(err.message);
    }
};
