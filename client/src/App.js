// React module
import React from 'react';
// styles
import './App.scss'
// components
import Input from './components/Input/Input'
import Message from './components/Message/Message'
// io socket
import io from 'socket.io-client'
// socket 
const socekt = io('http://localhost:3001') //port specified in server

const App = props => {

 return <>
   <Input />
   <Message />
 </>
}

export default App