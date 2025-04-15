import React, {useEffect} from 'react';
import './galleryItem.css';
import GLightbox from 'glightbox';
import Image from 'next/image';

const GalleryItem = ({item}) => {

    useEffect(() => {
        new GLightbox({
            selector: '.gallery-lightbox'
        })
    }, []);
  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a 
            href={item.image}
            className="gallery-lightbox"
            data-gall="gallery-item"
            >
            <Image 
               width={500}
               height={300}
               style={{
                width: '100%',
                height: 'auto',
               }} 
               src={item.image}
               alt=""
               className="img-fluid"
            />
        </a>
      </div>
    </div>
  )
}

export default GalleryItem
