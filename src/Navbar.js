import React, {useState} from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'//fa times represents the x

//items are taken from react-icons

function Navbar() {
    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
    }
   

    return (
        <>
            <div className= "navbar">
                <h5>ITSOl</h5>
                <div className= "menu-icon" onClick={handleClick}> 
                    <i>{click ? <FaTimes /> : <FaBars/>}</i></div>
                     
                    <ul className = {click ? "nav-menu active" : "nav-menu"}>

                        <li className = "list-item">
                            <Link to='/' className="nav-links">Shop</Link>
                        </li>
                        <li className = "list-item">
                            <Link to='/' className="nav-links">Gallery</Link>
                        </li>
                        <li className = "list-item">
                            <Link to='/' className="nav-links">About us</Link>
                        </li>
                        <li className= "list-item">
                            <Link to= '/sign-up'className="btn-link">
                            <button>Sign up</button>
                        </Link>

                        </li>

                    </ul>
     
            
             </div>
        </>
    )
}

export default Navbar
