const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8010);
const host = "0.0.0.0";

function logFatal(error) {
  fs.writeFileSync(path.join(root, "server-error.log"), `${error.stack || error.message || error}\n`);
}

process.on("uncaughtException", (error) => {
  logFatal(error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  logFatal(error);
  process.exit(1);
});

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

fs.writeFileSync(path.join(root, "server-started.log"), `started ${new Date().toISOString()} on ${host}:${port}\n`);

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${port}`);
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(root, requested));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    response.end(content);
  });
});

server.on("error", (error) => {
  logFatal(error);
  process.exit(1);
});

server.listen(port, host);
