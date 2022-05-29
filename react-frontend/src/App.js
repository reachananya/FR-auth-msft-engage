import logo from './logo.svg';
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home.jsx'
import Login from './components/Home/Login.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
