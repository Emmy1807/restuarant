'use client'

import React, {useState, useEffect} from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination, pagination} from 'swiper/modules'

import './testimonials.css';
import SectionTitle from '../component/SectionTitle';
import TestimonyItem from '../component/TestimonialItem';

const Testimonials = () => {
  const [slide, setSlide] = useState([]);
  
      const getTestimonialsData = () => {
          fetch('http://localhost:3000/testimonials')
          .then(res => res.json())
          .then(data => setSlide(data))
          .catch(e => console.log(e.message));
      };

      useEffect(() => {
        getTestimonialsData();
      }, [])

  return (
    <section id="testimonials" className="testimonials section-bg">
    <div className="container" data-aos="fade-up">
      <SectionTitle 
      title="Testimonials"
      subtitle="What they're saying about us"
      />

      <div data-aos="fade-up" data-aos-delay="100">
        <Swiper
        slidePerView={'auto'}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.testimonials-swiper-pagination',
          type: 'bullets',
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}
        className="testimonials-slider swiper-container"
        >
          {slide &&
              slide.length > 0 &&
              slide.map((slides) => (
                <SwiperSlide key={slides.id}>
                  <TestimonyItem item={slides}/>

                </SwiperSlide>
              ))
            }
        </Swiper>
        <div className="testimonials-swiper-pagination"></div>
      </div>
    </div>  
    </section>
  )
}

export default Testimonials
