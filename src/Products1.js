import React, {useState, useEffect} from 'react'
import { product_data } from './data/product_data'
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi'
import "./products.css"



function Products1({products}) {
   const [picture, setPicture]= useState(0)
   const length= product_data.length

    function nextPicture () {
        //if picture length equals to the slider lenght start from picture 0
        setPicture (picture === length - 1 ? 0 :picture + 1)

    }

    function prevtPicture () {
        //if picture length equals to the slider lenght start from picture 0
        setPicture (picture === 0 ? length - 1 :picture - 1)

    }


    return (
        
        <div>
        {products.map((product, index) => {
            return(
                <div  key={index}>
                 {index === picture && (
                     <div className="product-container">
                        <img  className="product-img "src={product.image}></img>
                        <div className="info-container">
                            <div className="arrow-container">
                                <FiArrowLeftCircle className="arrow" onClick={nextPicture}/>
                            </div>
                            
                                
                            <div className="info">
                                <h1>{product.title}</h1>
                                <p>{product.text}</p>
                                <button>Find out more</button>
                            </div>
                             
                            <div className="arrow-container">
                            <FiArrowRightCircle className="arrow" onClick={prevtPicture} />                                 
                            </div>
                            
                        </div>  
                         </div>   
                    
                    )}      
                    </div>
                )
                 

            })}
            </div>   
          
            
      
    )
}

export default Products1;