const http = require("http"); // importation
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
  let { method, url } = req;
  console.log(method, url);
  if (method == "GET" && (url == "/" || url == "/index.html")) {
    res.statusCode = 200;
    fs.promises.readFile("./public/index.html").then((data) => {
      res.setHeader("Content-Type", "text/html");
      res.write(data.toString());
      res.end();
    });
  } else if (method == "GET" && url == "/css/main.css") {
    res.statusCode = 200;
    fs.promises.readFile("./public/css/main.css").then((data) => {
      res.setHeader("Content-Type", "text/css");
      res.write(data.toString());
      res.end();
    });
  } else if (method == "GET" && url == "/users") {
    let users = [
      { nom: "tmimi", age: 31 },
      { nom: "alaoui", age: 20 },
    ];
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = "NOT FOUND";
    res.write("sm7lna /sorry");
    res.end();
  }
});

server.listen(PORT, () => console.log("server started at", PORT));
