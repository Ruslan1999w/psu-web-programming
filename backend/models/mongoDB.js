const mongoose = require('mongoose');
require('./User');
const mongoDB = 'mongodb://localhost:27017/web-programming';

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => console.log('connected ' + mongoDB));
db.on('disconnected', () => console.log('disconnected'));