import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import passportLocal from 'passport-local';
import mongoose from 'mongoose';
import connectEnsureLogin from 'connect-ensure-login';
import User from './models/user';
import cors from 'cors';


// Routes
import authenticate from './routes/authentication';
import users from './routes/users';
import courses from './routes/courses';
import lessons from './routes/lessons';

// Mongoose setup
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/eduplayer', { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to mongo.');
});

// Passport setup
const LocalStrategy = passportLocal.Strategy;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express etup
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/authenticate', authenticate);
app.use('/users', users);
app.use('/courses', courses);
app.use('/lessons', lessons);

app.listen(3000, () => {
    console.log('Started API on port 3000.');
});