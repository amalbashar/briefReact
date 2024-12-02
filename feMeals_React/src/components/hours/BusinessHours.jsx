import React from 'react';
import shape4 from "/assets/img/shape/4.png"
import icon6 from "/assets/img/icon/6.png"
import ReactPlayer from 'react-player';
import ReactWOW from 'react-wow';

const BusinessHours = () => {
    return (
        <>
            <div className="opening-hours-area default-padding overflow-hidden">
                <div className="container">
                    <div className="opening-hour-items">
                        <h6 className="text-fixed">FEMEALs</h6>
                        <div className="shape">
                            <img src={shape4} alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="opening-hours-thumb video-bg-live">
                                    <div className="player">
                                        <ReactPlayer url='https://vimeo.com/63729905' width="100%" height="506px" playing={true} muted={true} loop={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ReactWOW animation='fadeInLeft'>
                                    <div className="opening-hours-info animate">
                                        <h3>About US</h3>
                                        <p>
                                            A healthy food website offers expertly curated recipes, meal plans, and nutrition tips to promote balanced eating. Focused on fresh, nutrient-rich ingredients, it empowers users to make informed dietary choices for improved health and wellness, while providing a seamless, user-friendly experience.
                                        </p>
                                        <ul className="opening-hours-table">

                                        </ul>
                                        <div className="call">
                                            <div className="icon">

                                            </div>
                                            <div className="info">

                                            </div>
                                        </div>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessHours;