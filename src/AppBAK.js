import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';


function App() {
  const adminUser = {
    idno: "2018115526",
    password: "12345"
  }

  const [user, setUser] = useState({ idno: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.idno == adminUser.idno && details.password == adminUser.password) {

      console.log("Logged in");
      setUser({
        idno: details.idno,
      })
    }
    else {
      console.log("Details do not match");
      setError("Details do not match!")
    }
  }
  const Logout = () => {
    setUser({idno:""})
  }
  return (
    <div className="App">
      {(user.idno != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.idno}</span></h2>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )
      }
    </div>
  );
}

export default App;
