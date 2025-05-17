const { authJwt } = require('../middleware');

module.exports = (app) => {
    const radcheck = require('../controllers/radcheck.controller');

    var router = require('express').Router();

    // router.get('/', radcheck.getList);

    router.get('/:id', [authJwt.verifyToken], radcheck.getOne);

    router.get('/', [authJwt.verifyToken], radcheck.getMany);

    // router.get('/', radcheck.getManyReference);

    router.post('/', [authJwt.verifyToken], radcheck.create);

    router.put('/:id', [authJwt.verifyToken], radcheck.update);

    router.delete('/:id', [authJwt.verifyToken], radcheck.delete);

    app.use('/api/users', router);
};
