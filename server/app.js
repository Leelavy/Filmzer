
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const io = socketIo(server,

);

//connection check for react client
io.on('connection', (socket) => {
    if (socket.handshake.headers.origin === "http://localhost:3000") {
        console.log("React connected");
    }
});


server.listen(8080);
