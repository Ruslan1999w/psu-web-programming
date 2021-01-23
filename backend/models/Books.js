const {Schema, model} = require('mongoose');

const BookSchema = new Schema({
    bookName: String,
    description: String,
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
});

BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
    });

module.exports = model("Book", BookSchema);