import React,{ useState } from 'react'

import { useAuthState } from "react-firebase-hooks/auth";
import { WebcamCapture } from '../Webcam/Webcam.jsx' 

import {
    registerWithEmailAndPassword,
  } from "../../firebase.js";   

import './loginStyles.css'   
const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');

    const login = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    
    const submitForm = () =>
    {
        alert("Form submitted");
        setName('');
        setPassword('');
        setEmail('');
    }
    return (
    <div className="home-container">
        <div className="container">
            <div className="text">
                <h1>Fill up this form!</h1>
                <form className="form">
                    <WebcamCapture/>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    
                    <button type="submit" id="login-button" onClick={(e)=>submitForm(e)}>Submit</button>
                    
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login