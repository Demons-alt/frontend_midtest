import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Slidebar.css";

export const Slidebar = () => {
  const history = useNavigate();
  async function removeToken() {
    try {
      await sessionStorage.removeItem("token");
      console.log("removed");
      history("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="main-menu">
      <h3>Welcome</h3>
      <ul>
        <li>
          <a className=" fa"><Link to='/'>Home Page</Link></a>
          <a className=" fa"><Link to='/ticket'>Ticket</Link></a>
          <a className=" fa"><Link to='/activity'>activity</Link></a>
          <p />
          <a className="button is-danger" onClick={removeToken}>
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};
