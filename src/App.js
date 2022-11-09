import React from 'react'
import io from 'socket.io-client'
import { RouterProvider } from 'react-router-dom'
import router from "./Router"

const App = props => {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;