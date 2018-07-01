var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://hackerdata-shard-00-01-gktww.gcp.mongodb.net";
MongoClient.connect(uri, function(err, client) {
   var collection = client.db("framewrk").collection("users");
   // perform actions on the collection object
   client.close();
});
