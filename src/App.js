import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import './App.css';
import Form from './components/Form';
import {CookieConsent,getCookieConsentValue } from "react-cookie-consent";
import Cookies from 'universal-cookie';

ReactGA.initialize('G-D6FTBSGCW9');

function App() {

  useEffect(() => {
    //console.log(getCookieConsentValue("disclaimercookie"))
    if(getCookieConsentValue(("disclaimercookie"))){
      ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
      //console.log('Analitycs ', window.location.pathname + window.location.search);
    } else {
      const cookies = new Cookies();
          cookies.remove('_ga',{ path: '/' });
          cookies.remove('_ga_D6FTBSGCW9',{ path: '/' });
          cookies.remove('_gat',{ path: '/' });
          cookies.remove('_gid',{ path: '/' });
    }
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
        overlay="true"
        onAccept={() => {
          ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
        }}
        enableDeclineButton="true"
        declineButtonText="RECHAZAR"
        onDecline={()=>{
          const cookies = new Cookies();
          cookies.remove('_ga',{ path: '/' });
          cookies.remove('_ga_D6FTBSGCW9',{ path: '/' });
          cookies.remove('_gat',{ path: '/' });
          cookies.remove('_gid',{ path: '/' });
        }}
      >
        Esta web utiliza cookies propias y de terceros para ofrecer un mejor servicio. Si continúa navegando consideramos que acepta su uso.
      </CookieConsent>
    </div>
  );
}

export default App;
