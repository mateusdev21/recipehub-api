module.exports = (app) => {
    const news = require('../controllers/news.controller');
    const router = require('express').Router();
    const verifyToken = require('../middlewares/auth.middleware');

    router.get('/', news.findAll);
    router.get('/:id', news.findOne);
    router.route('/').post(verifyToken, news.create);
    router.route('/:id').put(verifyToken, news.update);
    router.route('/:id').delete(verifyToken, news.delete);

    app.use('/api/news', router);
}