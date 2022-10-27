import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./homePage.css";

import GetSummary from './SubPage/Getsummary'
import AllTickets from "./SubPage/AllTickets";
import { Slidebar } from "../Components/Slidebar";


export const Homepage = () => {
  const [email, setEmail] = useState("");
  const history = useNavigate();

  function getToken(err) {
    try {
      const tokenString = sessionStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      const decode = jwtDecode(userToken);
      setEmail(decode.result[0].email);
    } catch (error) {
      history("/login");
    }
  }
  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="layout">
      <div className="sidebar">
        <Slidebar/>
      </div>
      <div className="body">
      <h1 className="title">Welcome <Link to='/user'>{email}</Link></h1>
        <GetSummary/>
      </div>
    </div>
  );
};
