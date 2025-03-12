require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.API_PORT || 3001;

app.get('/api/version', (req, res) => {
    res.json({ version: '1.2.3', downloadUrl: 'https://game.com/update' });
});

app.listen(port, () => {
    console.log(`Express API running on http://localhost:${port}`);
});
