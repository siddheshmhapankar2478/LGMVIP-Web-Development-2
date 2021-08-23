import React from 'react';
import './Cards.css';
import Footer from '../Footer/Footer.js'
export default function Cards(props) {
    return (
        <>
            <section className="card-section background-card background2">
                <div className='card-container'>
                    {props.users.map((user, id) => {
                        const { avatar, first_name, last_name, email } = user;
                        return (
                            <div className='card' key={id}>
                                <img src={avatar} alt='image' className='avatar' />
                                <div className='card-name'>
                                    <h2>{first_name} {last_name}</h2>
                                </div>
                                <div className="user-id">
                                    <p>User Id: {id}</p>
                                </div>
                                <div className="email-id">
                                    <a>{email}</a>
                                </div>
                                <div className="center-button">
                                    <button className='btn-card btn-blue'>
                                        <i class="fas fa-envelope"></i>  Contact Me
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
}