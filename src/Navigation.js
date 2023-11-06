import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
    return (
        <>
                <div className="navbar">
                    <Link to="/" className="nav-item">홈</Link>
                    <Link to="/login" className="nav-item">소개</Link>
                </div>
        </>
    );
};

export default Navigation;
