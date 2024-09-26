import React from 'react';
import { Link } from 'react-router-dom'; // Changed from HashLink to standard Link

const SingleFoodCategoryV3 = ({ data }) => {
    const { thumb, name, meal_type_id } = data;

    return (
        <>
            <div className="food-menu-style-three">
                <div className="thumb">
                    <img src={`assets/img/menu/${thumb}`} alt="Image Not Found" />
                </div>
                <div className="info">
                    <h4><Link to="/shop-single#">{name}</Link></h4>
                    <Link 
                        to={`/subscription-details/${meal_type_id}`} 
                        className="btn btn-primary mt-3">
                        Subscribe on This Diet
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleFoodCategoryV3;
