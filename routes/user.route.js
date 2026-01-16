module.exports = (app) => {
    const users = require('../controllers/user.controller');
    const verifyToken = require('../middlewares/auth.middleware');
    const router = require('express').Router();

    router.route('/').get(verifyToken, users.findAll);
    router.route('/:id').get(verifyToken, users.findOne);
    router.post('/', users.create);
    router.route('/:id').put(verifyToken, users.update);
    router.delete('/:id', users.delete);

    app.use('/api/users', router);
}