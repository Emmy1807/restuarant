'use client'

import React, { useState, useEffect } from 'react';
import './specials.css'
import SectionTitle from '../component/SectionTitle';
import { specialFilters } from '../data/Data';
import Preloader from '../component/Preloader';
import SpecialItems from '../component/SpecialItems';

const Specials = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState(1); // Default to first filter

    useEffect(() => {
        const getSpecialData = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3000/specials'); // Changed to relative path
                if (!response.ok) {
                    throw new Error('Failed to fetch specials');
                }
                const data = await response.json();
                // Initialize active state
                const initializedData = data.map(item => ({
                    ...item,
                    active: item.id === activeFilter
                }));
                setItems(initializedData);
            } catch (err) {
                setError(err.message);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getSpecialData();
    }, [activeFilter]);

    const handleSpecialChange = (id) => {
        setActiveFilter(id);
        // Update active state immutably
        setItems(prevItems => 
            prevItems.map(item => ({
                ...item,
                active: item.id === id
            }))
        );
    };

    return (
    
        <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Specials" subtitle="Check Our Specials" />

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column" role="tablist">
                            {specialFilters.map(filter => (
                                <li className="nav-item" key={filter.id} role="presentation">
                                    <a
                                        className={`nav-link ${filter.id === activeFilter ? 'active show' : ''}`}
                                        onClick={() => handleSpecialChange(filter.id)}
                                        role="tab"
                                        aria-selected={filter.id === activeFilter}
                                        aria-controls={`tab-${filter.id}`}
                                    >
                                        {filter.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            {loading ? (
                                <Preloader />
                            ) : error ? (
                                <div className="alert alert-danger">{error}</div>
                            ) : items.length > 0 ? (
                                items.map((item) => (
                                    <SpecialItems 
                                        key={item.id} 
                                        item={item} 
                                        id={`tab-${item.id}`}
                                        aria-labelledby={`tab-${item.id}`}
                                        role="tabpanel"
                                        hidden={!item.active}
                                    />
                                ))
                            ) : (
                                <div className="alert alert-info">No special items found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specials;



// 'use client'

// import React, {useState, useEffect} from 'react';
// import './specials.css'
// import SectionTitle from '../component/SectionTitle';
// import { filters, specialFilters } from '../data/Data';
// import Preloader from '../component/Preloader';
// import SpecialItems from '../component/SpecialItems';

// const Specials = () => {
//     const [data, setData] = useState([]);
//     const [items, setItems] = useState([]);

//     const getSpecialData = () => {
//         fetch('http://localhost:3000/specials')
//             .then(res => res.json())
//             .then(data => setData(data))
//             .catch(e => console.log(e.message));
//     };

//     useEffect(() => {
//         getSpecialData();
//     }, []);

//     useEffect(() => {
//         setItems(data);
//     }, [data]);

//     const handleSpecialChange = (id) => {
//         const updatedItems = items.map((item) => {
//             item.active = false;
//             if(item.id === id) item.active = true;
//             return item;
//         });
//         setItems(updatedItems);
//     }

//   return (
    // <section id="specials" className="specials">
    //     <div className="container" data-aos="fade-up">
    //         <SectionTitle title="Specials" subtitle="Check Our Specials"/>

    //         <div className="row" data-aos="fade-up" data-aos-delay="100">
    //             <div className="col-lg-3">
    //                 <ul className="nav nav-tabs flex-column">
    //                     {
    //                         specialFilters.map(filter => (
    //                             <li className="nav-item" key={filter.id}>
    //                                 <a 
    //                                     className={`nav-link ${filter.active ? 'active show' : ''}`}
    //                                     onClick={() => handleSpecialChange(filter.id)}
    //                                 >
    //                                     {filter.name}
    //                                 </a>
    //                             </li>
    //                         ))
    //                     }
    //                 </ul>
    //             </div>

    //             <div className="col-lg-9 mt-4 mt-lg-0">
    //                 <div className="tab-content">
    //           {!items ? (
    //             <Preloader />
    //           ) : items.length > 0 ? (
    //             items.map((item) => <SpecialItems key={item.id} item={item} />)
    //           ) : (
    //             <Preloader/>
    //           )}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </section>
//   )
// }

// export default Specials
