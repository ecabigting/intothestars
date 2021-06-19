import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div className="home">
            <Link to="/Photo" className="home-link">Look into the stars!</Link>
        </div>
    );
}