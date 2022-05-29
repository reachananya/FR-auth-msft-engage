import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { WebcamCapture } from "../Webcam/Webcam.jsx";
import "./homeStyles.css";
const Home = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = () => {
    alert("Form submitted");
    setName("");
    setPassword("");
    setEmail("");
  };
  return (
    <div className="home-container">
      <div className="container">
        <div className="text">
          <h1>Fill up this form!</h1>
          <form className="form">
            <WebcamCapture />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              id="login-button"
              onClick={(e) => submitForm(e)}
            >
              Submit
            </button>
            <div>
              Already have an account? <Link to="/">Bla</Link> now.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
