var express = require('express'),
autocomplete=require('./routes/autocomplete');


var app = express();

app.configure(function () {
 app.use(express.logger('dev')); 
 app.use(express.bodyParser());
});

var names = ['Musa Damu','Aliyu Sanusi','Uzlash Murtala','Awesome Mubixy'];

app.get('/', function(req, res) {
    res.sendFile(__dirname + "index.html" );
 })
app.get('/autocomplete/:search',autocomplete.find);

app.listen(9000);
console.log('Listening on port 9000...');