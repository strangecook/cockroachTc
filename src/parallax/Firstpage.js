import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import image1 from "./1.jpg"
import "./Firstpage.css";
import Navigation from '../Navigation';

function Firstpage() {
    return (
        <>
        <Navigation />

            <section >
                <div className="outer">
                    <div className="inner">
                        <div
                            className="bg one"
                            style={{ backgroundImage: `url(${image1})` }}
                        >
                            <div>안녕</div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Firstpage;
