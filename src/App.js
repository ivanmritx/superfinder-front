import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import './App.css';
import Form from './components/Form';
import CookieConsent from "react-cookie-consent";

ReactGA.initialize('G-D6FTBSGCW9');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    console.log('Analitycs ', window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      <Form />
      <CookieConsent
        location="bottom"
        buttonText="ACEPTAR"
        cookieName="disclaimercookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Esta web utiliza cookies propias y de terceros para ofrecer un mejor servicio. Si continúa navegando consideramos que acepta su uso.
      </CookieConsent>
    </div>
  );
}

export default App;
