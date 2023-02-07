const http = require('https');
const fs = require('fs');


http.createServer(function (request, response)
{

		if(request.utl == '/character.jpeg')
		{
			fs.readFile("img/character.jpeg", function (err,data) 
			{	
					if(err)
					{
							console.error(err);
							return;
							}

							response.writeHead(200, {"Content-Type": "img/jpeg"});
							response.write(data);

						});

					}

					fs.readFile("index.html", function(err,data)
					{

						if(err) 
						{ 
							console.error(err);
							return,

							}

							response.writeHead(200, {"Content-Type": "text/html"});
							response.write(data);

							response.end();

							});

							}).listen(6969);
