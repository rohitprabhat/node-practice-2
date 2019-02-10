//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Succeed');
    db.collection('Todos').find({completed:false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log(err);
    });


    db.close();
});