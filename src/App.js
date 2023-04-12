import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import './App.css';
import Form from './components/Form';

ReactGA.initialize('G-ZTF2ECSQBS');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    console.log('Analitycs ',window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
