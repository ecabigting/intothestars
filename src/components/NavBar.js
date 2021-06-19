import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <div className="navbar" >
            <ul>
                <Link to="/" className="link">Today's photo from NASA APOD</Link>
            </ul>
        </div>
    );
}