import React from 'react';
import './breadcrumb.css'
import Link from 'next/link';

const BreadCrumb = ({page}) => {
  return (
    <section className="breadcrumbs">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h2>{page}</h2>
                <ol>
                    <li>
                        <Link href="/">
                            <i className="bi bi-house-door-fill"></i>
                        </Link>
                    </li>
                    <li>{page}</li>
                </ol>
            </div>
        </div>
    </section>
  )
}

export default BreadCrumb
