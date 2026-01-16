module.exports = (app) => {
    const register = require('../controllers/register.controller');
    const login = require('../controllers/login.controller');
    const router = require('express').Router();

    router.post('/register', register);
    router.post('/login', login);

    app.use('/api/auth', router);
}