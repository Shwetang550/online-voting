import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// routes
import statusRoutes from './routes/status.js';

const app = express();
dotenv.config();

// setting up the middlewares
app.use(bodyParser.json({ limit: '20mb', extended: true })); //extended: true for accepting different format files from req.body
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true })); //urlencoded for accepting requests in strings as well
app.use(cors());

// express api routes
app.use('/api', statusRoutes);

// mongoDB connection
const port = process.env.PORT || 5000;

// 'mongodb://localhost/social-media'
mongoose.connect('mongodb://localhost/online-vote')
    .then(() => app.listen(port, () => console.log(`Listening at port ${port}...`)))
    .catch(err => console.error(err.message));