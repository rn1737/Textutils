import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about'; // Correct capitalization
import Alert from './components/alert';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.title = `Textutils - ${mode === 'dark' ? 'Dark' : 'Light'} Mode`;
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  function removeBodyClasses() {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
}

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls) 
    document.body.classList.add('bg-'+cls) 
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <div className={`App ${mode}`}> 
      <Router>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
          <Route path="/about">
          <About mode={mode} />
          </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;   
