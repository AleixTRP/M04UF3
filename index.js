const http = require('https');
const fs = require('fs');




function send_index(response)
{
 fs.readFile("index.html", function(err,data)
 {
 if(err)
 {		
 console.error(err);
 return;
 }				  
 response.writeHead(200, {"Content-Type": "text/html"})
 response.write(data);
						
response.end();
		
		});
}

http.createServer(function (request, response)
{

		console.log(request.url);

		let url = request.url.split("/");

		switch (url[1])
		{
			case "player.png":
				send_index(response);

				break;

				default:
						send_index(response);
				}

				}).listen(6969);
