const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  
  if (err) throw err;
  
  const object = new ObjectId();
  
  console.log(object);
  
  console.log('CONNECTED');
  
  const db = client.db('animals');
  
  // CREATING DATA
  db.collection('mammals').insertOne({
    _id: object,
    name: 'unicorn',
    legs: 4,
    horn: 1,
  }, (err, result) => {
    
    if (err) { return console.log(err); }
    
    console.log('INSERTED');
    
  });

// READING DATA
  db.collection('mammals').findOne({
    _id: object,
  }).then(result => {
    
    console.log(result);
    
  }).catch(err => {
    
    console.log(err);
  });

// UPDATING
  
  db.collection('mammals').findOneAndUpdate({
        
        _id: new ObjectId("6261615bb2b21064fa2c2a49"),
        
      },
      
      {$set: {name: 'unicornOfAlice'}},
  ).then(result => {
    
    console.log(result);
    
  }).catch(err => {
    
    console.log(err);
  });

// DELETING

// db.collection('mammals').deleteMany({name: 'Edwin Diaz'});
//
//
// db.collection('mammals').deleteOne({name: 'Edwin Diaz'});
//

db.collection('mammals').findOneAndDelete({

  _id: new ObjectId('6261615bb2b21064fa2c2a49'),

}).then(result => {

  console.log(result);

});

});


