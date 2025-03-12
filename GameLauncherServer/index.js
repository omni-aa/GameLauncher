require('dotenv').config();
const WebSocket = require('ws'); // ✅ Make sure this is included
const { spawn } = require("cross-spawn")

const wsPort = process.env.WS_PORT || 8080;
const wss = new WebSocket.Server({ port: wsPort }); // ✅ This should now work

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send(JSON.stringify({ message: 'Connected to WebSocket Server' }));

    ws.on('message', (data) => {
        console.log('Received:', data);
    });

    ws.on('close', () => console.log('Client disconnected'));
});

console.log(`WebSocket server running on ws://localhost:${wsPort}`);
