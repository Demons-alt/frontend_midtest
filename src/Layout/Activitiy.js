import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Slidebar } from "../Components/Slidebar";
import "./homePage.css";
import { Link } from "react-router-dom";

export const Activitiy = () => {
  const [activitiy, setActivitiy] = useState([]);
  // const history = useNavigate();

  useEffect(() => {
    getActivity();
  }, []);

  const Token = JSON.parse(sessionStorage.getItem("token"));

  const getActivity = async () => {
    const response = await axios.get("http://localhost:3001/activity/all", {
      headers: {
        Authorization: `bearer ${Token}`,
      },
    });
    console.log(response.data.data.data);
    setActivitiy(response.data.data.data);
  };

  console.log(activitiy);
  return (
    <div className="layout">
      <div className="sidebar">
        <Slidebar />
      </div>
      <div className="body">
        <h1 className="title">Activitiy </h1>
        <button className="button is-success" to="/">
          Add Activitiy
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>id ticket</th>
              <th>description</th>
              <th>nominal</th>
            </tr>
          </thead>
          <tbody>
            {activitiy.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id_ticket}</td>
                <td>{item.description}</td>
                <td>RP.{item.total_claim}.00-,</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
