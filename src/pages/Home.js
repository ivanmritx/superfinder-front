import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import './Home.css';
import Form from '../components/Form';
import {getCookieConsentValue } from "react-cookie-consent";

function Home() {

    useEffect(() => {
        //console.log(getCookieConsentValue("disclaimercookie"))
        if(getCookieConsentValue(("disclaimercookie"))){
          ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
          //console.log('Analitycs ', window.location.pathname + window.location.search);
        } 
      }, [])

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default Home;