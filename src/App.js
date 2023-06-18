import { useState } from "react";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode has been enabled", "Success")
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "Success")
    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">


        <TestForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
      </div>
    </>
  );
}

export default App;
