import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialShare from '../social/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterRowContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-6 footer-item mt-50">
                    <div className="f-item about">
                        <h4 className="widget-title">About Us</h4>
                        <p>
                            Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                        </p>
                        <ul className="footer-social">
                            <SocialShare />
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                    <div className="f-item link">
                        <h4 className="widget-title">Explore</h4>
                        <ul>
                            <li>
                                <Link to="/about-us#">Company Profile</Link>
                            </li>
                            <li>
                                <Link to="/about-us#">About</Link>
                            </li>
                            <li>
                                <Link to="/contact#">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/contact#">Career</Link>
                            </li>
                            <li>
                                <Link to="/about-us#">Features</Link>
                            </li>
                            <li>
                                <Link to="/contact#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-item  mt-50">
                    <div className="f-item contact">
                        <h4 className="widget-title">Contact Info</h4>
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="content">
                                    175 Street, Office
                                    
                                    Jordan
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="content">
                                    <a href="tel:2151234567">+9620968294</a> <br /> <a href="tel:2151234567">07968963207</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="content">
                                    <a href="mailto:name@email.com">fe-meal@.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-item mt-50">
                    <h4 className="widget-title">Newsletter</h4>
                    <p>
                        Join our subscribers list to get the latest news and special offers.
                    </p>
                    <div className="f-item newsletter">
                        <FooterNewsLetter />
                    </div>
                    <fieldset>
                        <input type="checkbox" id="privacy" name="privacy" />
                        <label htmlFor="privacy">I agree to the Privacy Policy</label>
                    </fieldset>
                </div>
            </div>
        </>
    );
};

export default FooterRowContent;