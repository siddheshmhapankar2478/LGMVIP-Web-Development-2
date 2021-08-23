import './Home.css';
import React from 'react';

export default function Home() {
    return (
        <>
            <div class="background background1">
                <div className="home-heading">
                    <h1>Welcome to ZIPPY</h1>
                </div>
                <div className="home-para">
                    <h2>Click on "<span className="colorchange">Get Users</span>" to fetch all users data</h2>
                </div>
            </div>
        </>
    )
}