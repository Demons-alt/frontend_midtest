import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "../homePage.css";
import axios from "axios";
import { Slidebar } from "../../Components/Slidebar";

export const UserInfo = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState([]);
  const history = useNavigate();

  const Token = JSON.parse(sessionStorage.getItem("token"));

  const getUser = async () => {
    const response = await axios.get(`http://localhost:3001/users/profile/1`, {
      headers: {
        Authorization: `bearer ${Token}`,
      },
    });
    console.log(response.data.data);
    setUser(response.data.data[0]);
  };

  const update = async(e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/users/register',{
        // name : nama,
        // email : email,
        // password : pasword,
        // nik : nik,
        // address : address,
        // phone : phone,
        // role : role

      })
      history('/login')
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      
    }
  }


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
    <div className="layout">
      <div className="sidebar">
        <Slidebar />
      </div>
      <form className="box" >
                <h1 className="title has-text-centered">User inpo</h1>
                <div className="field mt-5">
                  <label className="label">Nama</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="fulan bin fulan"
                      value={user.name}
                      required

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Emails</label>
                  <div className="controls">
                    <input
                      type="email"
                      className="input"
                      placeholder="nanana@gmail.com"
                      value={user.email}

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">pasword</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="*********"
                      value={user.password}

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">NIK</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="3792469236496294"
                      disabled
                      value={user.nik}

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Address</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="jl.ajain dulu"
                      required
                      value={user.address}

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Phone</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="0812 sisanya nanti dulu"
                      required
                      value={user.phone}

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Role</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Admin adman Admun"
                      required
                      value={user.role}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Update
                  </button>
                </div>
              </form>
      </div>
  );
};
