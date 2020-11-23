import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}>
        <Redirect to={{
          pathname: '/login'
        }} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  )
}

export default App