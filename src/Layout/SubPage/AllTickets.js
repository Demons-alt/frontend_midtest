import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slidebar } from "../../Components/Slidebar";
import "../homePage.css";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    //   getAuth()
    getTicket();
  }, []);

  const Token = JSON.parse(sessionStorage.getItem("token"));

  const getTicket = async () => {
    const response = await axios.get("http://localhost:3001/ticket/all", {
      headers: {
        Authorization: `bearer ${Token}`,
      },
    });
    console.log(response.data.data);
    setTickets(response.data.data);
  };

  console.log(tickets);
  return (
    <div className="layout">
      <div className="sidebar">
        <Slidebar />
      </div>
      <div className="body">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Type Ticket</th>
              <th>Creator</th>
              <th>Status</th>
              <th>creator</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ticket_type}</td>
                <td>{item.created_by}</td>
                <td>{item.status}</td>
                <td>{item.created_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;
