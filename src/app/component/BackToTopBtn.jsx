"use client"

import React, { useState, useEffect } from 'react';
import './backToTopBtn.css';

const BackToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 100px
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling
        });
    };

    return (
        <button 
            onClick={backToTop}
            aria-label="Back to top"
            className={`back-to-top ${isVisible ? 'active' : ''}`}
        >
            <i className="bi bi-arrow-up-short"></i>
        </button>
    )
}

export default BackToTopBtn;


// "use client"

// import React, {useState, useEffect} from 'react';
// import './backToTopBtn.css';

// const BackToTopBtn = () => {

//     const [scroll, setScroll] = useState(0);

//     useEffect(() => {
//         window.addEventListener('scroll', () => {
//             setScroll(window.scrollY);
//         });
//         return () => {
//             window.removeEventListener('scroll', () => {
//                 setScroll(window.scrollY);
//             });
//         };
//     }, [scroll]);

//     const backToTop = () => {
//         window.scrollTo(0, 0);
//     };

//   return (
//     <a 
//         onClick={backToTop}
//         className={`back-to-top d-flex align-items-center justify-items-center
//         ${scroll > 100 ? 'active' : undefined}`}
//     >
//         <i className="bi bi-arrow-up-short"></i>
//     </a>
//   )
// }

// export default BackToTopBtn
