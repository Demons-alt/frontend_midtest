import React from 'react'
import { BrowserRouter as Touter, Routes, Route } from "react-router-dom";

import {LoginPage }from '../Layout/LoginPage'
import {RegisterPage }from '../Layout/RegisterPage'
import {Homepage }from '../Layout/Homepage'
import {Navbar} from '../Components/Navbar'
import { Login } from "../Layout/Auth/Page/Login";
import { Activitiy } from '../Layout/Activitiy';
import AllTickets from '../Layout/SubPage/AllTickets';
import { UserInfo } from '../Layout/SubPage/UserInfo';

const ContenA = () => {
  return (
    <Touter>
        <Routes>
            {/* <Route path='/Logan' element={<Login/>}/> */}
            <Route path='/user' element={<UserInfo/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/ticket' element={<AllTickets/>}/>
            <Route path='/activity' element={<Activitiy/>}/>
            <Route path='/' element={<><Navbar /><Homepage /></>}/>
        </Routes>
    </Touter>
  )
}

export default ContenA
