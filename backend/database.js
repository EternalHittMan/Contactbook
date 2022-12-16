const mongoose = require('mongoose');
const schema = require('./Schema.js')


class Database {

    constructor() {
        mongoose.connect("mongodb://mongo:27017/test", { useNewUrlParser: true }, function (err) {
            if (err) throw err; console.log('Database successfully connected'); })
    }

    insertData(data) {
    return new Promise((resolve, reject) => {
        const schem = new schema(data)

        schem.save().then((result) => resolve(result))
            .catch((result) => reject(result))
    })
    }

    getAll() {
     return new Promise((resolve, reject) => {

         schema.find().then((result) => resolve(result))
             .catch((result) => reject(result))

     })
    }

    getOne(filter) {
        return new Promise((resolve, reject) => {

            schema.findOne(filter).then((result) => resolve(result))
                .catch((result) => reject(result))

        })
    }

    searchByName(filter) {
        return new Promise((resolve, reject) => {

            schema.find({name: {$regex : "^" + filter, $options : 'i'}}).then((result) => resolve(result))
                .catch((result) => reject(result))

        })
    }


    updateData(data, filter) {
        return new Promise((resolve, reject) => {

            schema.findOneAndUpdate(filter, data).then((result) => resolve(result))
                .catch((result) => reject(result))


        })
    }


    setFavorite(filter, bool) {
        return new Promise((resolve, reject) => {


            schema.findOneAndUpdate({_id: filter}, {favorite: bool}).then((result) => resolve(result))
                .catch((result) => reject(result))


        })
    }

    removeData(filter) {
        return new Promise((resolve, reject) => {

            schema.findOneAndDelete(filter).then((result) => resolve(result))
                .catch((result) => reject(result))


        })
    }

}

module.exports = new Database();
