var express = require('express');
var app = express();
var http = require ('http');

app.use(express.static(__dirname + '/src/client'));
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.send(app);
});

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});
