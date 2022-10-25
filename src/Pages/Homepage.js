import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import GetSummary from './SubPage/Getsummary'
import AllTickets from "./SubPage/AllTickets";

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
    <div className="container mt-5">
      <h1 className="title">Welcome {email}</h1>
      <div>
        <GetSummary/>
      </div>
      <div>
        <AllTickets/>
      </div>
    </div>
  );
};
