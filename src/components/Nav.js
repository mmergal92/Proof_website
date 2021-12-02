import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from '../pages/home';

const Nav = () => {
    return (
        <>
        <div className="navbar">
        <div className="centernav">
            <Link to="/" className="homenav">
                <h6>proof</h6>
            </Link>
        </div>
        </div>
    </>
    )
}
export default Nav;