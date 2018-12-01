const http = require('http');
const express = require('express');

const port = process.env['PORT'] || 8000;

const app = express();
app.get('*', express.static(__dirname));
http.createServer(app)
  .listen(port);
