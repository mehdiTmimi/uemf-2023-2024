const http = require("http") // importation
const PORT = 3000
const server = http.createServer((req,res)=>{
   // console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.socket.remoteAddress);
    //10.12.227.36
    /*console.log("request recu");
    res.setHeader("Content-Type","text/html")
    res.statusCode="200"
    res.statusMessage="OK"
    res.write('<h1 style="color:blue">salut</h1>')

    res.end(); // un envoi de response au client*/
    let users = [
        {nom:"tmimi",age:31},
        {nom:"alaoui",age:20}
    ]
    res.statusCode=200
    res.statusMessage="OK"
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify(users))
    res.end()
}) // configuration

server.listen(PORT,()=>console.log("server started at",PORT))