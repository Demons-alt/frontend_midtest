import React from 'react'
import { BrowserRouter as Touter, Routes, Route } from "react-router-dom";

import {LoginPage }from '../Pages/LoginPage'
import {RegisterPage }from '../Pages/RegisterPage'
import {Homepage }from '../Pages/Homepage'
import {Navbar} from '../Components/Navbar'

const ContenA = () => {
  return (
    <Touter>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/' element={<><Navbar /><Homepage /></>}/>
        </Routes>
    </Touter>
  )
}

export default ContenA
