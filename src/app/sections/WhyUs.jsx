import React from 'react'
import './whyUs.css'
import WhyUsCard from '../component/WhyUsCard';
import SectionTitle from '../component/SectionTitle';
import { whyUs } from '../data/Data';

const WhyUs = function () {
    const items = whyUs;

  return (
    <section id="why-us" className="why-us">
        <div className="container">
            <SectionTitle title="why us" subtitle="Why Choose Our Restuarant"/>
            <div className="row">
                {items &&
                    items.length > 0 &&
                    items.map((item) => (
                        <WhyUsCard key={item.id} item={item} />
                    ))

                }
            </div>
        </div>
    </section>
  )
}

export default WhyUs
