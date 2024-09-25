import React from 'react';
import ProductReviewForm from '../form/ProductReviewForm';
import { Link } from 'react-router-dom';

const ShopProductTab = () => {
    return (
        <>
            <div className="single-product-bottom-info">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                            <button className="nav-link active" id="description-tab-control" data-bs-toggle="tab" data-bs-target="#description-tab" type="button" role="tab" aria-controls="description-tab" aria-selected="true">
                                Description
                            </button>

                            <button className="nav-link" id="information-tab-control" data-bs-toggle="tab" data-bs-target="#information-tab" type="button" role="tab" aria-controls="information-tab" aria-selected="false">
                                Additional Information
                            </button>

                            <button className="nav-link" id="review-tab-control" data-bs-toggle="tab" data-bs-target="#review-tab" type="button" role="tab" aria-controls="review-tab" aria-selected="false">
                                Review
                            </button>

                        </div>

                        <div className="tab-content tab-content-info" id="myTabContent">

                            <div className="tab-pane fade show active" id="description-tab" role="tabpanel" aria-labelledby="description-tab-control">
                                <p>
                                    There is immense scope for organic production of vegetable crops in India since the agricultural sector has enormous organic resources like crop residues, livestock and other bio-products from agro industries. Organic farming is growing at a rapid pace among Indian farmers and entrepreneurs, particularly in rainfed and hilly areas where fertilizer consumption is less than 25 kg/ha/year [13].
                                </p>
                                <ul>
                                    <li>Status of organic vegetable production</li>
                                    <li>Feasibility of organic practices</li>
                                    <li>Sustainability of organic farming</li>
                                    <li>Organic certification</li>
                                    <li>Prospects and constraints of organic vegetable production</li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="information-tab" role="tabpanel" aria-labelledby="information-tab-control">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Weight</td>
                                                <td>240 Ton</td>
                                            </tr>
                                            <tr>
                                                <td>Dimensions</td>
                                                <td>20 × 30 × 40 cm</td>
                                            </tr>
                                            <tr>
                                                <td>Colors</td>
                                                <td>Black, Blue, Green</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="review-tab" role="tabpanel" aria-labelledby="review-tab-control">
                                <h4>1 review for “Fresh Red Seedless”</h4>
                                <div className="review-items">
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="/assets/img/team/1.jpg" alt="Thumb" />
                                        </div>
                                        <div className="info">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <div className="review-date">April 8, 2021</div>
                                            <div className="review-authro"><h5>Aleesha Brown
                                            </h5></div>
                                            <p>
                                                Highly recommended. Will purchase more in future.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="/assets/img/team/2.jpg" alt="Thumb" />
                                        </div>
                                        <div className="info">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <div className="review-date">April 8, 2021</div>
                                            <div className="review-authro"><h5>Sarah Albert</h5></div>
                                            <p>
                                                Great product quality!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-form">
                                    <h4>Add a review</h4>
                                    <div className="rating-select">
                                        <div className="stars">
                                            <span>
                                                <Link className="star-1" to="#"><i className="fas fa-star"></i></Link>
                                                <Link className="star-2" to="#"><i className="fas fa-star"></i></Link>
                                                <Link className="star-3" to="#"><i className="fas fa-star"></i></Link>
                                                <Link className="star-4" to="#"><i className="fas fa-star"></i></Link>
                                                <Link className="star-5" to="#"><i className="fas fa-star"></i></Link>
                                            </span>
                                        </div>
                                    </div>
                                    <ProductReviewForm />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopProductTab;