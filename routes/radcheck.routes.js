module.exports = (app) => {
    const radcheck = require('../controllers/radcheck.controller');

    var router = require('express').Router();

    // router.get('/', radcheck.getList);

    router.get('/:id', radcheck.getOne);

    router.get('/', radcheck.getMany);

    // router.get('/', radcheck.getManyReference);

    router.post('/', radcheck.create);

    router.put('/:id', radcheck.update);

    router.delete('/:id', radcheck.delete);

    app.use('/api/users', router);
};
