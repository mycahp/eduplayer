import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import passportLocal from 'passport-local';
import mongoose from 'mongoose';
import connectEnsureLogin from 'connect-ensure-login';


// Models
import User from './models/user';

// Routes
import teachingStaff from './routes/taeching-staff';


// Mongoose setup

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/eduplayer', { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to mongo.');
});

// Passport setup
const LocalStrategy = passportLocal.Strategy;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express etup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/professors', teachingStaff);

const router = express.Router();


router.post('/authenticate', (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            if (err) {
                return next(err);
            }

            if (!user) {
                return res.redirect('/login?info=' + info);
            }

            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }

                return res.redirect('/');
            });

        })(req, res, next);
});

module.exports = app;


app.listen(3000, () => {
    console.log('Started API on port 3000.');
});