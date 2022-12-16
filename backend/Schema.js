const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {type: String, required : true, unique: false},
    job: {type: String, required : true, unique: false },
    photo: {type: String, required : true, unique: false},
    favorite: {type: Boolean, required : true, unique: false },
    items : [
        {
            type: {type: String, unique: false},
            icon: {type: String, unique: false},
            value: {type: String, unique: false}
        }]
})

const data = mongoose.model("contact", dataSchema);

module.exports = data;
