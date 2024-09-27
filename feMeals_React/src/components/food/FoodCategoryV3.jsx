import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleFoodCategoryV3 from './SingleFoodCategoryV3';

const FoodCategoryV3 = () => {
    const [foodCartData, setFoodCartData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Keto'); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/food-menu`, {
            params: {
                category: selectedCategory 
            }
        })
        .then(response => {
            setFoodCartData(response.data); 
        })
        .catch(error => {
            console.error('Error fetching the food data:', error);
        });
    }, [selectedCategory]); 
    return (
        <>
            <div className="food-menu-style-three-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Food Menu</h4>
                                <h2 className="title">Our Specials Menu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="food-menu-three-two-items">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="nav nav-tabs food-menu-nav style-three" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${selectedCategory === 'Keto' ? 'active' : ''}`} 
                                        onClick={() => setSelectedCategory('Keto')} 
                                        type="button" role="tab">
                                        Keto
                                    </button>
                                    <button className={`nav-link ${selectedCategory === 'Vegan' ? 'active' : ''}`} 
                                        onClick={() => setSelectedCategory('Vegan')} 
                                        type="button" role="tab">
                                        Vegan
                                    </button>
                                    <button className={`nav-link ${selectedCategory === 'Healthy' ? 'active' : ''}`} 
                                        onClick={() => setSelectedCategory('Healthy')} 
                                        type="button" role="tab">
                                        Healthy
                                    </button>
                                    <button className={`nav-link ${selectedCategory === 'Diabetes' ? 'active' : ''}`} 
                                        onClick={() => setSelectedCategory('Diabetes')} 
                                        type="button" role="tab">
                                        Diabetes
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content food-style-two-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active">
                                        <div className="row">
                                            {foodCartData.map(cart => (
                                                <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={cart.id}>
                                                    <SingleFoodCategoryV3 data={cart} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCategoryV3;
