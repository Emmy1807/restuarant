import React from 'react';
import './about.css';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="about">
        <div className="container" data-oas="fade-up">
            <div className="row">
                <div
                    className="col-lg-6 order-1 order-lg-2"
                    data-oas="zoom-in"
                    data-oas-delay="100"
                >
                    <div className="about-img">
                        <img src="/assets/images/1.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>
                        The most deserving pleasure of the body, the pleasures are to be taken
                    </h3>
                    <p className="">
                        Pain itself is a pain, therefore, let refined pleasures be conceived, but let the pain of temporal circumstances occur, so that great labor and pain may be endured.
                    </p>
                    <ul>
                        <li>Hard work doesn't happen without benefit.</li>
                        <li>We condemn those who are swayed by pleasure.</li>
                        <li>On the other hand, we denounce with righteous indignation.</li>
                        <li>And dislike anyone who are so beguiled and demoralized by the charm of pleasure.</li>
                    </ul>
                </div>

            </div>

        </div>

    </section>
  )
}

export default About
