import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../http-common";

const Register = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/user/register", inputs);
          navigate("/login");
        } catch (err) {
          setError(err.response.data);
        }
      };
    
  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={handleSubmit} className="box">
                <h1 className="title is-2">Sign Up</h1>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      name="name"
                      onChange={handleChange}
                      placeholder="username"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="email"
                      className="input"
                      name="email"
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      name="password"
                      onChange={handleChange}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                     Sign Up
                  </button>
                  {err && <p>{err}</p>}
                </div>
                <p>Do you have an account?{" "}<a href="/login">Login</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
