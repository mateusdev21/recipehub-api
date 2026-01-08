module.exports = (app) => {
    const recipes = require('../controllers/recipe.controller');
    const router = require('express').Router();
    const verifyToken = require('../middlewares/auth.middleware');

    router.get('/', recipes.findAll);
    router.get('/:id', recipes.findOne);
    router.route('/').post(verifyToken, recipes.create);
    router.route('/:id').put(verifyToken, recipes.update);
    router.route('/:id').delete(verifyToken, recipes.delete);
    router.get('/featured', recipes.featured);
    router.get('/:id/pdf', recipes.pdf);

    app.use('/api/recipes', router);
}