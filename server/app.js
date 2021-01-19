
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

server.listen(8080);
