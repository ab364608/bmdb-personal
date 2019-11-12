require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const AC = require('./controllers/authController');
const AM = require('./middleware/authMiddleware');

const PC = require('./controllers/profileController');

const MC = require('./controllers/fav_moviesController');

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Database Connected');
    })
    .catch(err => console.log(err));

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookies: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

app.use(express.json());

//Movies
app.post('/api/movies', MC.addFavMovies);

//Profile
app.put('/api/profile/:id', PC.editUserProfile);
app.delete('/api/profile/:id', PC.deleteUserProfile)

//Authentication
app.use(AM.checkUserExists);
app.post('/auth/register', AC.register);
app.post('/auth/login', AC.login);
app.get('/auth/logout', AC.logout);

app.listen(SERVER_PORT, () => {
    console.log(`Running on Port: ${SERVER_PORT}`)
})