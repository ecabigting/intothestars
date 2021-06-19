import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <div className="navbar" >
            <ul>
                <Link to="/" className="link">Take me home</Link>
            </ul>
        </div>
    );
}