import http from 'node:http';

const db = {};
const server = http.createServer((req, res) => {
  const path = req.url.substring(1);
  if (path === "") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("URL Shortener active. POST a URL to shorten.");
  } else if (db[path]) {
    res.writeHead(302, { 'Location': db[path] });
    res.end();
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(5000, () => {
  console.log("Shortener server running on port 5000...");
});
