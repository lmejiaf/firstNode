const express= require("express");
const server= express();

server.get("/",function (peticion, respuesta) {
    respuesta.send("<h1>Hola Mundo Con NodeJS y Express</h1>");
    respuesta.end();
    console.log("nuevo usuario conectado");
    
});
server.listen(3000, function (params) {
    console.log("Server on port 3000");
});


