const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath;
  let contentType = "text/html";

  switch (req.url) {
    case "/":
      filePath = path.join(__dirname, "index.html");
      break;
    case "/about":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/contact":
      filePath = path.join(__dirname, "contact.html");
      break;
    default:
      filePath = path.join(__dirname, "404.html");
      res.statusCode = 404;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(res.statusCode || 200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
