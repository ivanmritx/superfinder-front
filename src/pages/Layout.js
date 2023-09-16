import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import {CookieConsent,getCookieConsentValue } from "react-cookie-consent";
import Cookies from 'universal-cookie';
import About from '../components/About';
import background from '../images/opa.jpg';

ReactGA.initialize('G-D6FTBSGCW9');

const Layout = () => {

    useEffect(() => {
        //console.log(getCookieConsentValue("disclaimercookie"))
        if(!getCookieConsentValue(("disclaimercookie"))){
          const cookies = new Cookies();
              cookies.remove('_ga',{ path: '/' });
              cookies.remove('_ga_D6FTBSGCW9',{ path: '/' });
              cookies.remove('_gat',{ path: '/' });
              cookies.remove('_gid',{ path: '/' });
        }
      }, [])
      const location = useLocation();
      //console.log("location",location);
      const isBlog = location.pathname.includes('blog')
      //console.log("isBlog",isBlog);
  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${background})`, height: isBlog?'auto':'100vh'}}>
        <About></About>
        <Outlet />
      </div>
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
    </>
  )
};

export default Layout;