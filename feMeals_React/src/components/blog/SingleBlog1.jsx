import React from 'react';
import ReactWOW from 'react-wow';

const SingleBlogV1 = ({ blog }) => {
    const { thumb, date, animationDelay, title, description } = blog;

    return (
        <>
            <ReactWOW animation="fadeInUp" delay={animationDelay}>
                <div className="blog-style-one">
                    <div className="thumb">
                        <img src={`/assets/img/blog/${thumb}`} alt={title} />
                    </div>
                    <div className="info">
                        <div className="blog-meta">
                            <ul>
                                <li>{date}</li>
                            </ul>
                        </div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        {/* Remove or comment out the arrow icon if it exists */}
                        {/* <i className="fas fa-angle-right"></i> */}
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleBlogV1;
