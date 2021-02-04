
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cors = require('cors');
const movies = require('./routes/movies');
const users = require('./routes/users');
const reviews = require('./routes/reviews');

const connectionString = "mongodb+srv://daniel:daniel11@cluster0.hyprf.mongodb.net/Filmzer?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

var app=express();
app.use(cors());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/movies', movies);
app.use('/users', users);
app.use('/reviews', reviews);

const server=http.createServer(app);
const io = socketIo(server, {
   
});

var count = 0;
io.on('connection', (socket) => {        
    if (socket.handshake.headers.origin === "http://localhost:3000") {
        count++;        
        socket.broadcast.emit('count', count); 

        socket.on('disconnect', () => {
            count--;                   
            socket.broadcast.emit('count', count);    
                
        });
    }   
}); 


server.listen(8080);