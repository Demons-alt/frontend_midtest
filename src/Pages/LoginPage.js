import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useNavigate();

  const credentials = {
    email: email,
    password: pasword,
  }
  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/Login", credentials);
      console.log(response.data)
      console.log(response.data.Token)
      if (response.data.Token != null) {
        await sessionStorage.setItem('token', JSON.stringify(response.data.Token));
        history("/");
        
        
      }setMessage('worng Email Or Password')
      
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <section class="hero has-background-dark is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box" onSubmit={Login}>
              <p className="has-text-centered">{message}</p>
                <h1 className="title has-text-centered">Login</h1>
                <div className="field mt-5">
                  <label className="label">Emails</label>
                  <div className="controls">
                    <input
                      type="email"
                      className="input"
                      placeholder="nanana@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">pasword</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="*********"
                      required
                      value={pasword}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Logan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
