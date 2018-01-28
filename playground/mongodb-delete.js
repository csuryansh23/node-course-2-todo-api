//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server');
    } 

    console.log('Connected to mongodb server');

    //delete many 
    //db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
        //console.log(result);
    

    //delete one 
   // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
   //     console.log(result);
   // });

    //find one and delete 
   // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
     //   console.log(result);
    //});

    //db.collection('Users').deleteMany({name:'suryansh'});
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a6d86ba960c48179a04bff4")
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    });


   // db.close();
});  