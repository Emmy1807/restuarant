'use client'

import React, {useState, useEffect} from 'react'
import SectionTitle from '../component/SectionTitle';
import Preloader from '../component/Preloader';
import GalleryItem from '../component/GalleryItem';

const Gallery = () => {
    const [images, setImage] = useState([]);

    const getGalleryData = () => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setImage(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <section id="gallery" className="gallery">
    <div className="container" data-aos="fade-up">
        <SectionTitle 
            title="Gallery"
            subtitle="Some photos from our Restuarant"
        />
    </div>

    <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
      <div className="row g-0">
        {!images ? (
            <Preloader />
        ) : images.length > 0 ? (
          images.map((image) => (
            <GalleryItem key={image.id} item={image}/>
          ))
        ) : (
            <Preloader />
        )}
      </div>
    </div>
    </section>
  )
}

export default Gallery
