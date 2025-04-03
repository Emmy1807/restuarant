import React from 'react'
import './whyUs.css'
import WhyUsCard from '../component/WhyUsCard';

async function getWhyUsData() {
    const res = await fetch('http://localhost:3000/api/WhyUs')
    return res.json();
}

const WhyUs = async function () {
    const items = getWhyUsData();

  return (
    <section id="why-us" className="why-us">
        <div className="container">
            <div className="row">
                {items &&
                    items.length > 0 &&
                    items.map((item) => {
                        <WhyUsCard key={item.id} item={item} />
                    })

                }
            </div>
        </div>
    </section>
  )
}

export default WhyUs
