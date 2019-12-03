var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser')
//var mongo = require('mongodb')
var mongoose = require('mongoose')


var db, uri = "mongodb+srv://admin:123456zxyw@cluster0-diyix.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri, 
    {useNewUrlParser:true, useUnifiedTopology: true })
mongoose.connection.on('error', function(err){
    console.log('Could not connect to MongoDB')
})
var postSchema = new Schema({
    reviewer_name: { type: String, required: true},
    rating: { type: String, required: true},
    comment: { type: Number, min: 1, required: true},
});
var postModel = mongoose.model('Post', postSchema);

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});




app.get('/', function(request, response){
    response.sendFile(__dirname+'/views/formView.html')
})

app.get('/submit', function(request, response){
    response.sendFile(__dirname+'/views/singleView.html')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});