import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  )
}

export default App