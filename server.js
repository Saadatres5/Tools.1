const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> QuantixTools ready on http://localhost:${port}`);
    console.log(`> Environment: ${process.env.NODE_ENV || "development"}`);
  });
}).catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
