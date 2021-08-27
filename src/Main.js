import React from 'react'
import './Main.css'

function Main(props) {
    return (
        <div className="main-container">
            <img src={props.image}/>
            <h1 className="welcome">{props.text}</h1>
            <div className="btn-container">
                <button className="btn-start"                     
                >LEARN ABOUT ITSOL</button>
            </div>

            
        </div>
    )
}

export default Main
