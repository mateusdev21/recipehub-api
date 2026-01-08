require('dotenv').config();

const express = require('express');
const cors = require('cors');
const createHttpError = require('http-errors');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./app/middlewares/auth.middleware.js');

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const db = require('./app/models');
db.mongoose.connect(db.url)
    .then(() => {
        console.log('Database Connected');
    }).catch((err) => {
        console.log(err);
        process.exit();
    });

app.get('/', authMiddleware, (req, res) => {
    res.json({
        message: 'Home'
    });
});

require('./app/routes/user.route')(app);
require('./app/routes/recipe.route')(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`);
});







