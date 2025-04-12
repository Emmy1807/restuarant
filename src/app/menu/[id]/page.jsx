// import React from 'react'

// async function getFoodData() {
//     const res = await fetch('http://localhost:3000/menu')
//     return res.json();    
// }



// const page = async function () {
//     const food = await getFoodData();
//   return (
//     <div>
//         {
//             food.map((foods) => (
//                 <h1>{foods.name}</h1>
//             ))
//         }
      
//     </div>
//   )
// }

// export default page

import React from "react";
import BreadCrumb from "@/app/component/BreadCrumb";
import Image from "next/image";
    

async function getFoodData(id) {
    const res = await fetch(`http://localhost:3000/menu/${id}`)
    return res.json();
}

export default async function MenuSingle({params}) {
    const id = await params.id;

    const food = await getFoodData(id) 
  return (
    <main id="main">
        <BreadCrumb page="Menu"/>   

        <section className="inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Image
                        src={food.preview}
                        alt=""
                        height={500}
                        width={500}
                        className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mt-3">{food.name}</h2>
                        <h4 className="mt-2">
                            <i>{food.ingredients}</i>
                        </h4>
                        <p>{food.description}</p>

                    </div>

                </div>
            </div>
        </section>

    </main>
  )
}
