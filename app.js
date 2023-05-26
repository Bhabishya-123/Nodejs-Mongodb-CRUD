// Importing packages

require('dotenv').config(); // reading env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const connectDB = require('./db');
const errorMiddleware = require('./middlewares/Error');
const userRoutes = require('./routes/User');
const aboutRoutes = require('./routes/About');

// Creating express app
const app = express();

// Registering app level middlewares
app.use(methodOverride('_method'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// configure view engine
app.set('view engine', 'ejs');

// Connecting to db
connectDB();

// Registering routes
app.get('/', (req, res) => res.redirect('/users'));
app.use('/users', userRoutes);
app.use('/about', aboutRoutes);

// Registering Error middleware
app.use(errorMiddleware);

// Listening to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server is listening on:', PORT));
