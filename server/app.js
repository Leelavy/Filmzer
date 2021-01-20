
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const cors = require('cors');
const movies = require('./routes/movies');

var app=express();
app.use(cors());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/movies', movies);

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