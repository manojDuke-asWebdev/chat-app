import React from 'react'
import io from 'socket.io-client'

// socket 
const socket = io.connect('http://localhost:3001')

const App = props => {
 const sendMsg = () => {
  socket.emit('veify', "hey here I am")
 }
 return <>
   <button onClick={sendMsg}> hello  </button>
 </>
}

export default App;