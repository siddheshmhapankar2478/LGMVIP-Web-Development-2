import './Footer.css';
import React from 'react';

export default function Footer() {
    return (
        <>
            <section class="followus-section">
                <div class="footer-container">
                    <div class="office-addr-card">
                        <div class="h4-main">
                            <h4>OFFICE ADDRESS</h4>
                        </div>
                        <div class="center-para">
                            <p>9, Dhal St, Raj Talkies</p>
                            <p>near, City Hospital</p>
                            <p>Vile Parle (E) 400057</p>
                        </div>
                    </div>
                    <div class="office-addr-card">
                        <div class="h4-main">
                            <h4>FOLLOW US</h4>
                        </div>
                        <div class="center-para">
                            <div class="icons">
                                <a href=""><i class="fab fa-behance"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <div class="icons">
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-google-plus-g"></i></a>
                                <a href=""><i class="fab fa-tumblr"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="office-addr-card">
                        <div class="h4-main">
                            <h4>CONTACT US</h4>
                        </div>
                        <div class="center-para contact-para">
                            <p><a href="#">+ 123 456 789</a></p>
                            <p><a href="#">zippy@skype</a></p>
                            <p><a href="#">enquiry@zippy.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}