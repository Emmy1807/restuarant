"use client"

import React, {useState, useEffect} from 'react';
import './Header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';

const Header = () => {

    const [scroll, setScroll] = useState(0);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

  return (
    <header 
    id="header" 
    className={`fixed-top d-flex align-items-center ${
        scroll > 100 ? 'header-scrolled' : undefined
    }`}
    >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
            <h1 className="Logo me-auto me-lg-0">
                <a href="/">E-Classy Restuarant</a>
            </h1>
            <Nav/>
            <AppBtn name="BOOK A TABLE"/>
        </div>
    </header>
  );
}

export default Header
