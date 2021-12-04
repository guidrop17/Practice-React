import "./Footer.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../assets/img/f1_logo.svg'

const Footer = () => {
    return (
        <>
            <footer class="text-center text-lg-start bg-dark text-muted" > 

                <div className="footer">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>
                                </h6>
                                <p>
                                    <img src={Logo}/>
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    OPTIONS
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>


                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    CONTACT US
                                </h6>
                                <p>Americana - SP</p>
                                <p>info@example.com</p>
                                <p>99 9999-9999</p>
                                <p>99 9999-9999</p>
                            </div>
                        </div>
                    </div>
                </div>    



                <div className="text-center">
                © 2003-2021 Formula One World Championship Limited
                </div>
            </footer >
        </>
    );
}
export default Footer