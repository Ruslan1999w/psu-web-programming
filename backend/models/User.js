const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    login: String,
    password: String,
    username: String,
    role: String,
});
module.exports = model("User", userSchema);