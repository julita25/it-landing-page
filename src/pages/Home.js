import React from 'react'
import Navbar from "../Navbar";
import { product_data } from "../data/product_data";
import Services from "../Services";
import Main from "../Main"
import Products1 from "../Products1";
import Companies from "../Companies";
import Footer from "../Footer";

function Home() {
    return (
        <>
            
            <Main image="../../images/background.gif" text="You are our most important costumer"/>
            <Services/>
            <Products1 products={product_data}/>
            <Companies/>
            <Footer/>

            
        </>
    )
}

export default Home
