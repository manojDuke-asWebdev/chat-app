import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Setting from './pages/setting'

const App = props => {
  return <>
   <Routes>
    <Route path='/' element={< Home />} exact />
    <Route path='login' element={< Login />} />
    <Route path='register' element={< Register />} />
    <Route path='setting' element={< Setting />} />
   </Routes>
  </>
}

export default App;