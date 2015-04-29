var http = require('http'),
	url = require('url'),
	path = require('path'),
	fs = require('fs'),
	graphlib = require("graphlib");

var mimeTypes = {
	"html": "text/html",
	"jpeg": "image/jpeg",
	"jpg":  "image/jpeg",
	"png":  "image/png",
	"js":   "text/javascript",
	"css":  "text/css"
};

http.createServer(function (req, res)
                  {
	                  var uri = url.parse(req.url).pathname;
	                  var filename = path.join(process.cwd(), uri);
	                  path.exists(filename, function (exists)
	                  {
		                  //test
		                  var Graph = graphlib.Graph;
		                  var g = new Graph();
		                  g.setNode("a");
		                  g.hasNode("a");
		                  //fin test

		                  if (!exists)
		                  {
			                  console.log("not exists: " + filename);
			                  res.writeHead(200, {'Content-Type': 'text/plain'});
			                  res.write('404 Not Found\n' + g.hasNode("a"));
			                  res.end();
			                  return; // <- Don't forget to return here !!
		                  }
		                  var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
		                  res.writeHead(200, {'Content-Type': mimeType});

		                  var fileStream = fs.createReadStream(filename);
		                  fileStream.pipe(res);

	                  }); //end path.exists
                  }).listen(1337);

