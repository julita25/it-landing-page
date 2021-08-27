import React from 'react'
import "./services.css"
import {services_data} from "./data/product_data"



function Fashion() {
    return (
        <div className="main-wrap">
            <div className = "wrapper">
            <h1>Explore some of our solutions</h1>
                <div className="fashion-wrapper">
                    <div className="long-wrap">
                        <div className="pic-wrapper">
                           <img className="gallery-items" src="../../images/digital_mark.jpg" ></img>
                        </div>
                        <p>DIGITAL MARKETING</p>
                    </div>
                    
                    <div className="short-wrap">
                        <div className="wrap2">
                            <div className="pic-wrapper">
                                <img className="gallery-items" src="../../images/cloud.jpg"></img>
                            </div>
                            <p>Cloud computing</p>
                        </div>
                        <div className="wrap2">
                            <div className="pic-wrapper">
                                <img className="gallery-items" src="../../images/infra.jpg"></img>
                            </div>
                            <p>IT INFRASTRUCTURE</p>

                        </div>
                        <div className="wrap2">
                            <div className="pic-wrapper">
                                <img className="support-item" src="../../images/support.png"></img>
                            </div>
                            <p>IT SUPPORT</p>

                        </div>
                    </div>
                    <div className="long-wrap">
                        <div className="pic-wrapper">
                            <img className="gallery-items" src="../../images/security.jpg"></img>
                        </div>
                        <p>SECURITY AND SURVEILLANCE</p>
                    </div>


                </div>
                
            </div>
        </div>
    )
}

export default Fashion
