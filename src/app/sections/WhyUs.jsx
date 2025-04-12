import React from 'react'
import './whyUs.css'
import WhyUsCard from '../component/WhyUsCard';
import SectionTitle from '../component/SectionTitle';

async function getWhyUsData() {
    const res = await fetch('http://localhost:3000/whyus')
    return res.json();
}

const WhyUs = async function () {
    const items = await getWhyUsData();

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
