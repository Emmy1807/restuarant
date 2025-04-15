import React from 'react'
import SectionTitle from '../component/SectionTitle';
import ChefItem from '../component/ChefItem';

async function getChefsData () {
  const res = await fetch('http://localhost:3000/chef')
  return res.json();
} 

const Chefs = async () => {
  const items = await getChefsData();
  return (
    <section id="chefs" className="chefs">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Chefs" subtitle="Our Profesional Chef"/>

        <div className="row">
          {items && 
            items.length > 0 &&
            items.map((item) => (
              <ChefItem key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Chefs
