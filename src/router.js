import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'
import Preview from './components/Preview'
import PayCreate from './components/PayCreate'

import './App.scss'

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}>
        <Redirect to={{
          pathname: 'Login'
        }} />
      </Route>
      <Route path="/login" name="Login" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/preview" component={Preview} />
      <Route path="/create" component={PayCreate} />
    </BrowserRouter>
  )
}

export default Router