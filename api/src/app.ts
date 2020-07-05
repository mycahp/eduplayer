import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import professors from './routes/professors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/professors', professors);

module.exports = app;


app.listen(3000, () => {
    console.log('Started API on port 3000.');
} );