import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {getCookieConsentValue } from "react-cookie-consent";
import blogListData from '../blog/list.json';
import './Blog.css';

const Blog = () => {

    useEffect(() => {
        //console.log(getCookieConsentValue("disclaimercookie"))
        if(getCookieConsentValue(("disclaimercookie"))){
          ReactGA.send({ hitType: "pageview", page: "/blog", title: "Blog" });
          //console.log('Analitycs ', window.location.pathname + window.location.search);
        } 
      }, [])

    return (
        <>
            <Header title="Blog de Super más barato" subtitle=""></Header>
            <div className='blog-list-container'>
            {blogListData.map((blogItem, index) => (

                <li key={index} className='blog-list-li'>
                    <Link to={'/blog/' + blogItem.id} style={{ color: "#000000" }}>{blogItem.date} - {blogItem.text}</Link>
                </li>

            ))}
            </div>
        </>
    );
};

export default Blog;