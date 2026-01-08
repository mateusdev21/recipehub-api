require('dotenv').config();

const express = require('express');
const cors = require('cors');
const createHttpError = require('http-errors');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewares/auth.middleware.js');

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const db = require('./models/index.js');
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

require('./routes/user.route.js')(app);
require('./routes/recipe.route')(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`);
});







