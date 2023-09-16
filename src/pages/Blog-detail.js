import React,{useEffect, useState} from 'react';
import ReactGA from "react-ga4";
import {useParams} from "react-router-dom";
import {getCookieConsentValue } from "react-cookie-consent";
import parse from 'html-react-parser';
import './Blog-detail.css';

const BlogDetail = () => {
    const {id} = useParams();
    const [html, setHtml] = useState("");

    useEffect(() => {
        //console.log(getCookieConsentValue("disclaimercookie"))
        if(getCookieConsentValue(("disclaimercookie"))){
          ReactGA.send({ hitType: "pageview", page: `/blog/details/${id}`, title: `blog - ${id}`});
          //console.log('Analitycs ', window.location.pathname + window.location.search);
        } 
      }, [])

    useEffect(() => {
        import(`../blog/details/${id}.json`)
          .then((res) => {setHtml(res.data)})
          .catch(_ => null);
      }, []);

    return (
        <>
            <div className='body-blog'>
            {parse(html)}
            </div>
        </>
    );
};

export default BlogDetail;