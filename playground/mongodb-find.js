//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server');
    } 

    console.log('Connected to mongodb server');

    /*
    db.collection('Todos').find({
        _id: ObjectID('5a6d7a784de0a213da9d4945')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });
    */

   /* db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count:' + count);
        
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });
  */

  db.collection('Users').find({
    name: 'suryansh'
}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
},(err)=>{
    console.log('Unable to fetch todos',err);
});


   // db.close();
}); 