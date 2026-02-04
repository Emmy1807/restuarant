"use client"

import React, {useState, useEffect} from 'react'
import { filters } from '../data/Data'
import './menu.css'
import SectionTitle from '../component/SectionTitle'
import MenuItem from '../component/MenuItem'
import Preloader from '../component/Preloader'

const Menu = () => {
  const [data, setData] = useState([]);  
  const [items, setItems] = useState([]);

  const getMenuData = () => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(menu => setData(menu))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]); 

  const handleFilterActive = (id) => {
    filters.map(filter => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = ({id, category}) => {
    handleFilterActive(id);
  if (category === 'all') {
    setItems(data);
  } else {
    const result = data.filter((item) => item.category === category);
    setItems(result);
  }
}
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our-Menu" subtitle="Check Our Tasty Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={filter.active ? "filter-active" : undefined}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter.name} 
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div 
        className="row menu-container"
        data-aos="fade-up"
        data-aos-delay="200"
        >
          {!items ? (
    <Preloader />
    ) : items.length > 0 ? (
        items.map((item) => (
            <MenuItem 
                key={item.id} 
                item={item}
            />
        ))
    ) : (
      <Preloader />
    )}
        </div>
      </div>

    </section>
  )
}

export default Menu
