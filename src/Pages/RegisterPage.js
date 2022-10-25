import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [pasword, setPassword] = useState("");
    const [nik, setNik] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const history = useNavigate();

    const Register = async(e) => {
      e.preventDefault()
      try {
        await axios.post('http://localhost:3001/users/register',{
          email : email,
          password : pasword,
          nik : nik,
          address : address,
          phone : phone,
          role : role

        })
        history('/login')
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        }
        
      }
    }
  return (
    <section class="hero has-background-dark is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box" onSubmit={Register}>
                <h1 className="title has-text-centered">Register</h1>
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
                  <label className="label">NIK</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="3792469236496294"
                      required
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
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
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Register
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
