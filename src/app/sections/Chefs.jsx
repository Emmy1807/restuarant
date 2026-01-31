import React from 'react'
import SectionTitle from '../component/SectionTitle';
import ChefItem from '../component/ChefItem';
import { chefs } from '../data/Data';

const Chefs = () => {
  const items = chefs;
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
