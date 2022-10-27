import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Summary.css";

const GetSummary = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    //   getAuth()
    getSummary();
  }, []);
  function getToken(userToken) {
    try {
      const tokenString = sessionStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
    } catch (error) {
      //   history("/login");
    }
  }
  const Token = JSON.parse(sessionStorage.getItem("token"));

  const getSummary = async () => {
    const response = await axios.get("http://localhost:3001/ticket/summary", {
      headers: {
        Authorization: `bearer ${Token}`,
      },
    });
    console.log(response.data.data[0]);
    setTickets(response.data.data[0]);
  };

  return (
    <div>
      <div>
        <div className="posision1">
          <div className="card1">
            <h1>Pending</h1>
            <h2>{tickets.pending}</h2>
          </div>
        </div>
        <div className="card2">
          <h1>approve</h1>
          <h2>{tickets.approve}</h2>
        </div>
        <div className="card3">
          <h1>reject</h1>
          <h2>{tickets.reject}</h2>
        </div>
      </div>
    </div>
  );
};

export default GetSummary;
