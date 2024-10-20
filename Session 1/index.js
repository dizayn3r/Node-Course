const http = require("http");
const currenciesJson = require("./currency.json");
const PORT = 8082;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>Currency Database</h1>");
      break;
    case "/currencies":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(currenciesJson));
      break;
    default:
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: `Route: '${req.url}' was not found` }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});