import React from 'react';
import ReactWOW from 'react-wow';
import SingleBlogV1 from './SingleBlogV1';

const BlogV1 = () => {
    const comingSoonItems = [
        {
            id: 1,
            thumb: 'diet0.png', // Image name for "New Diet"
            date: 'Coming Soon',
            title: 'New Diet Plan',
            description: 'Stay tuned for our upcoming diet plan that will help you achieve your health goals.',
            animationDelay: '0.3s',
        },
        {
            id: 2,
            thumb: 'meaal.png', // Image name for "New Meals"
            date: 'Coming Soon',
            title: 'New Meals',
            description: 'Enjoy a variety of new and innovative meals that cater to all tastes.',
            animationDelay: '0.5s',
        },
    ];

    return (
        <>
            <div className="blog-area home-blog default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="title">Coming Soon</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {comingSoonItems.map((blog) => (
                            <div className="col-lg-6" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;
