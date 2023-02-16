const http = require("http");
//const fs = require("fs");
const filesStatic = require("node-static");

let files = new filesStatic.Server("./public");

/*
function send_index(response)
{
	
	fs.readFile("index.html", function(err, data){
			if (err){
				
				console.error(err);
						return;
											}
        response.writeHead(200, {"Content-Type":"text/html"});
					
					response.write(data);

					response.end();
});
}

function send_player(response)
{
 fs.readFile("player.png", function(err,data)
 {
 		if(err)
 	{		
 		console.error(err);
 	return;
 	}				  
 response.writeHead(200, {"Content-Type":"image/png"})
 response.write(data);
						
response.end();
		
		});
}
*/

http.createServer(function(request, response)
{

	request.addListener('end',function()
		{
			files.serve(request,response);

		}).resume();
/*
let url = request.url.split("/");
let fileName = url[1];

 
 if (fileName.endsWith(".png")) 
 {
   send_image(response, fileName)						 
} else 
	{
   send_index(response);
}
*/

}).listen(6969);
