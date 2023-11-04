import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import image1 from "./1.jpg"
import "./Firstpage.css";

function Firstpage() {
    return (
        <>
            <>
                <div className="navbar">
                    <Link to="/" className="nav-item">홈</Link>
                    <Link to="/login" className="nav-item">소개</Link>
                </div>
            </>

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
