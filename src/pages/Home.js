import React from 'react';
import shoeLogo from "../assets/shoe-logo.jpg"


const Home = () => {
    return (
        <div className='banner-section'>
            <h1>HOME PAGE</h1>
            <img
                src={shoeLogo}
                alt="Shoe logo"
                className="shoe-logo"
            />
        </div>
    )
}
export default Home 