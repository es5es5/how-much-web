import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import AppRouter from './Router'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'
import Preview from './components/Preview'

import './App.scss'

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}>
        <Redirect to={{
          pathname: '/login'
        }} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/preview" component={Preview} />
    </BrowserRouter>
  )
}

export default Router