
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 

var app=express();
app.use(cors());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const server=http.createServer(app);

const io = socketIo(server, {
   
});

var count = 0;
io.on('connection', (socket) => {        
    if (socket.handshake.headers.origin === "http://localhost:3000") {
        count++;        
        socket.broadcast.emit('count', count); 
        
        console.log(count);

        socket.on('disconnect', () => {
            count--;                   
            socket.broadcast.emit('count', count);    
            console.log(count);        
        });
    }   
}); 


server.listen(8080);