integrate swagger-ui to express framework, but the solution is also applied to other similar framework:
1. download swagger-ui souce from [git](https://github.com/swagger-api/swagger-ui);
2. create node project with ```npm init``` in express-swagger folder;
3. you install express package in the folder
4. create publish folder in the top floder;
5. copy the all files in dist folder of swagger-ui to the publish folder;
6. create your own swagger.json(APIs description file) and add it to publish folder, you can follow the guide of swagger api on swagger web site;
7. you need to modify content of url with swagger.json on index.html in publish folder;
8. you create your express main file with the following code
```
var express = require('express');
var app = express();

app.use('/v1/api', express.static('public'));

var server = app.listen(8002, function (){
    console.log('Example app listening on port 8002!');
});

server.setTimeout(0)
```
9. you can access your swagger ui page by http://localhost:8082/v1/api
