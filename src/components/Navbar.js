import React, {Component} from 'react';
import {Outlet, Link} from "react-router-dom";
import Footer from "./Footer";


class Navbar extends Component {

    render() {
        return (
            <>
                <header>
                    <nav>
                        <Link to="/"><a href="">HOME</a></Link>
                        <a href="">BOOKS</a>
                        <a href="">MY BOOKS</a>
                        {}
                        <a href="/login">PROFILE</a>
                    </nav>
                </header>
                <Outlet/>
                <Footer/>
            </>
        );
    }

}

export default Navbar;