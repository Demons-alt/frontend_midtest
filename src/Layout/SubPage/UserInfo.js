import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "../homePage.css";
import axios from "axios";
import { Slidebar } from "../../Components/Slidebar";

export const UserInfo = () => {
    const [id, setId] = useState("");
    const [user, setUser] = useState([])
    const history = useNavigate();

    const Token = JSON.parse(sessionStorage.getItem("token"));

    const getUser = async () => {
        const response = await axios.get(`http://localhost:3001/users/profile/1`, {
          headers: {
            Authorization: `bearer ${Token}`,
          },
        });
        console.log(response.data.data);
        setUser(response);
      };

    //  console.log(id);
  
    function getToken(err) {
      try {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        const decode = jwtDecode(userToken);
        setId(decode.result[0].user_id);
      } catch (error) {
        history("/login");
      }
    }
    useEffect(() => {
      getToken();
      getUser();
    }, []);
    
  return (
    <div>
      <div>
        <div className="posision1">
          <div className="card1">
            <h1>Pending</h1>
            <h2></h2>
          </div>
        </div>
        <div className="card2">
          <h1>approve</h1>
          <h2></h2>
        </div>
        <div className="card3">
          <h1>reject</h1>
          <h2></h2>
        </div>
      </div>
    </div>
  )
}
