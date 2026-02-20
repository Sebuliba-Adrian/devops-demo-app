const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development', timestamp: new Date().toISOString(), version: '1.0.0' });
});

app.get('/api/info', (req, res) => {
  res.json({ app: 'DevOps Demo App', database: process.env.DATABASE_URL ? 'connected' : 'not configured', uptime: process.uptime(), node_version: process.version });
});

app.get('/api/environments', (req, res) => {
  res.json({ current: process.env.NODE_ENV || 'development', available: ['canary','staging','demo','trial','production'] });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
