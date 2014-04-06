var express = require('express'),
	Paperpress = require('paperpress').Paperpress;

var server = express();

var blog = new Paperpress({
	directory : 'static',
	basePath  : '/blog',
	articlesPerPage : 15,
	pagesPath : ''
});

blog.attach(server);

server.get('/', function (req, res) {
	res.redirect('/blog');
});

server.listen(3000);
console.log('Server running at http://localhost:3000');