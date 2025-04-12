'use client'

import React, {useState, useEffect} from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination, pagination} from 'swiper/modules'

import './events.css';
import { data } from 'react-router';
import SectionTitle from '../component/SectionTitle';
import EventsItems from '../component/EventsItems';

const Events = () => {
    const [slide, setSlide] = useState([]);

    const getEventsData = () => {
        fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(data => setSlide(data))
        .catch(e => console.log(e.message));
    };
    useEffect(() => {
        getEventsData();
    }, [])
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <SectionTitle 
          title="Events"
          subtitle="Organize Your Events In Our Restuarant"
        />

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper 
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="events-slider swiper-container"
          >
            {slide &&
              slide.length > 0 &&
              slide.map((slides) => (
                <SwiperSlide key={slides.id}>
                  <EventsItems item={slides}/>

                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>

    </section>
  )
}

export default Events
