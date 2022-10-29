const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')( server, {cors: {origin: "*"}})

//view engine
app.set('view engine','ejs')

app.get('/home', (req, res)=> {
 res.render('home')
})

// server port 

server.listen( 3001, ()=>{
 console.log('server running')
})

// socket connection
io.on( 'connection', (socket)=> {
 console.log(socket.id);
})