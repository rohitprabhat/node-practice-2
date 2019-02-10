//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }

    console.log('Succeed');

    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     done: false
    // }, (err, results) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // })
    db.close();
});