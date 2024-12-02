import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV1 = ({ blog }) => {
    const { id, thumb, day, month, author, title, btnText } = blog

    return (
        <>
            <div className="home-blog-style-one-item">
                <Link to={`/blog-single-with-sidebar/${id}#`}>
                    <img src={`assets/img/blog/${thumb}`} alt="Image not Found" />
                </Link>
                <div className="content">
                    <div className="info">
                        <div className="date"><strong>{day}</strong> {month}</div>
                        
                        <h4 className="title">
                            <Link to={`/blog-single-with-sidebar/${id}#`}>{title}</Link>
                        </h4>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;