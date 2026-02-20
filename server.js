const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const routes = {
    '/api/health': { status: 'ok' },
    '/api/info': { app: 'DevOps Demo App', version: '1.0.0', environment: 'production' },
  };

  const body = routes[req.url] || { error: 'not found' };
  res.end(JSON.stringify(body));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});