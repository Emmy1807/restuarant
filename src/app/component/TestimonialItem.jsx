import React from 'react';
import './testimonialItem.css';

const TestimonyItem = ({item}) => {
  return (
    <div className="testimonial-item">
        <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {item.content}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img src={item.avatar} className="testimonial-img" alt="" />
        <h3>{item.client}</h3>
        <h4>{item.position}</h4>
    </div>
  )
}

export default TestimonyItem
