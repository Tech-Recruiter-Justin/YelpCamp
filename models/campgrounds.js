// requiring all npm packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defined a new schema for campgrounds
const CampgroundSchema = new mongoose.Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

// export the schema so it can be used elsewhere
module.exports = mongoose.model('Campground', CampgroundSchema);


