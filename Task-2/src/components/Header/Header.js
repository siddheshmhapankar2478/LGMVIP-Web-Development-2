import './Header.css';
import React from 'react';
import logo from "../images/logo1.JPG"

export default function Header({ fetchUsers }) {
    return (
        <>
            <header>
                <nav className="navbar h-nav-resp">
                    <div className="nav-list v-class-resp">
                        <div class="logo">
                            <img src={logo} alt="logoImage" /><a href="#"> ZIPPY</a>
                        </div>
                        <div className="nav-right">
                            <button onClick={fetchUsers} className="btn-class btn-blue">Get Users <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}
