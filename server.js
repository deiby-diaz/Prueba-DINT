var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
	var port_number = server.listen(process.env.PORT || 8080);
	app.listen(port_number);
});