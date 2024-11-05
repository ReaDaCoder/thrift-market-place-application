import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
import '../../src/homepage.css';

export default function HomePage(){
    const navigate = useNavigate();
    const handleSwitchToSell = () => {
        navigate('./SellPage');
    };

    return(
        <div className="homepage-container">
            <header className="header">
                <Navbar/>
                <h1>The Thrift MarketPlace</h1>
                <div className="buttons-container">
                <button>Buy</button>
                <button  onClick={handleSwitchToSell}>Sell</button>
                </div>
            </header>
            <main>

            </main>
            <footer>
                
            </footer>
        </div>
    )
}