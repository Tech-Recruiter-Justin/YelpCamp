// requiring all npm packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campgrounds')

// set up mongo and mongoose connection path
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// initiate mongodb connection, throws an error when fail
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// initiate express app
const app = express();

// enable ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// testing if ejs is working
app.get('/', (req, res) => {
    res.render('home')
})

// to create a new campground
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
})

// open express on port 3000
app.listen(3000, () => {
    console.log('Serving on port 3000')
})