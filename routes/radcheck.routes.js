module.exports = (app) => {
    const radcheck = require('../controllers/radcheck.controller');

    var router = require('express').Router();

    router.get('/', radcheck.getList);

    router.get('/:id', radcheck.getOne);

    router.get('/', radcheck.getMany);

    router.get('/:id', radcheck.getManyReference);

    router.post('/:id', radcheck.create);

    router.put('/:id', radcheck.update);

    router.put('/:id', radcheck.updateMany);

    router.delete('/:id', radcheck.delete);

    app.use('/api/users', router);
};
