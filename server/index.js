const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server , { cors: { origin: "*"}})

app.set('view engine', 'ejs')
app.get('/home', (req, res)=> {
   res.render('home')
})

server.listen(3001, ()=>{
   console.log("server running")
})

var logBook = [
   {
      id:"",
      username:"",
      name:""
   }
]

io.on('connection', (socket)=>{
   console.log(`user connected ${socket.id}`)
   
   socket.on('userlogin', (data)=>{
      logBook.push({
         id: socket.id,
         username: data.username,
         name: data.name
      })
      console.log(logBook)
   })


   socket.on('message', (data)=>{
      console.log(data)
      socket.broadcast.emit("message",data)
      socket.emit('sender',(data))
   })
})