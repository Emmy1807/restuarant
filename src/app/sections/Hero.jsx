"use client";

import React, { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import "./Hero.css";
import HeroBtn from "../component/HeroBtn";

const Hero = () => {
    useEffect(() => {
        let lightbox;

        import("glightbox").then(({ default: GLightbox }) => {
            lightbox = GLightbox({
                selector: ".glightbox",
            });
        });

        return () => {
            if (lightbox) {
                lightbox.destroy();
            }
        };
    }, []);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div
                className="container position-relative text-center text-lg-start"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
                <div className="row">
                    <div className="col-lg-8">
                        <h1>
                            Welcome to E-Classy <span>Restaurant</span>
                        </h1>
                        <h2>Delivering great food for more decades!</h2>

                        <div className="btns">
                            <HeroBtn name="our menu" target="menu" />
                            <HeroBtn name="book a table" target="book-a-table" />
                        </div>
                    </div>

                    <div
                        className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <a
                            href="https://www.youtube.com/watch?v=xPPLbEFbCAo"
                            className="glightbox play-btn"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;



// "use client"

// import React, {useEffect} from 'react'
// import GLightbox from 'glightbox'
// import './Hero.css'
// import HeroBtn from '../component/HeroBtn'

// const Hero = () => {
//     useEffect(() => {
//         new GLightbox({
//             selector: '.glightbox',
//         });
//     }, []);

//   return (
//     <section id="hero" className="d-flex align-items-center">
//         <div
//             className="container position-relative text-center text-lg-start"
//             data-aos="zoom-in"
//             data-aos-delay="100"
//         >
//             <div className="row">
//                 <div className="col-lg-8">
//                     <h1>
//                         Welcome to E-Classy <span>Restuarant</span>
//                     </h1>
//                     <h2>Delivering great food for more decades!</h2>

//                     <div className="btns">
//                         <HeroBtn name="our menu" target="menu"/>
//                         <HeroBtn name="book a table" target="book-a-table"/>
//                     </div>
//                 </div>
//                 <div
//                     className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
//                     data-aos="zoom-in"
//                     data-aos-delay="200"
//                 >
//                     <a
//                     href="https://www.youtube.com/watch?v=xPPLbEFbCAo"
//                     className="glightbox play-btn"
//                     ></a>
//                 </div>

//             </div>

//         </div>

//     </section>
//   )
// }

// export default Hero
