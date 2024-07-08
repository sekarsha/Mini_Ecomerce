import React, { Fragment, useEffect, useState } from 'react'
import Prduct from '../Component/Prduct'
import dotenv from "dotenv"
import { useSearchParams } from 'react-router-dom';


const Home = () => {
     const [product,setproduct]=useState([]);
     const [searchparams,setsearch]=useSearchParams()
     console.log(searchparams);

     useEffect(()=>{

        fetch(`http://localhost:3000/api/v1/product?`+searchparams)

        .then(res=>res.json())
        .then(res=>setproduct(res.products))

     },[searchparams])


    return (
        <Fragment>

            <h1 id="products_heading "  className=' text-black fw-bold text-center    mt-4'>Latest Products</h1>

            <section id="products" className="container mt-5 bg">
                <div className="row">

             
                    {
                        product.map((product ,index)=>(<Prduct product={product} key={index} />))
                    }  
                 
                  

                </div>
            </section>
        </Fragment>
    )
}

export default Home