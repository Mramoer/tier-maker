import React from 'react'
import { LoginForm } from './widgets/LoginForm'
import RegisterForm from './widgets/RegisterForm'
import {BrowserRouter, Route} from 'react-router-dom'


const Layout = () => {
  return (
    <div className='layout'>
        <BrowserRouter basename='/'>
            <Route></Route>
        </BrowserRouter>
    </div>
  )
}

export default Layout