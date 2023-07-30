// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
      showAlert("Dark mode is Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enabled", "success")
    }
  }


  return (
    <>
  <Router>
      <Routes>
      <Navbar titleText="TextUtils" mode={mode} toggleMode={toggleMode} aboutText='About us' />
      <Alert alert={alert} />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
      </Routes>
      </Router>
      {/* <button className="btn btn-primary" data-bs-toggle="offcanvasWithBothOptions" href="offcanvasWithBothOptions" role="button" aria-controls="offcanvasWithBothOptions">
        Link with href
      </button> */}
      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}


    </>
  );
}

export default App;
