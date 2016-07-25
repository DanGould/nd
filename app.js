// NS
// A collaborative project between DG + NS
// Who knows what this will turn into.

var express		= require('express');
var app			= express();	
var bodyParser	= require('body-parser');

var morgan		= require('morgan');

var server		= require('http').createServer(app);
var port		= process.env.port || 8080

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static(__dirname + '/fe'));

server.listen(8080);
console.log('Magic happens on port %s', port);

