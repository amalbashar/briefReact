import React from 'react';
import BookingTableForm from '../form/BookingTableForm';
import styled from 'styled-components';

// Using styled-components to style the card and image
const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    max-width: 300px;
    margin: 0 auto;
    text-align: center; /* Center content */

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const CardTitle = styled.h3`
    font-size: 28px;
    font-weight: bold;
    color: #333;
`;

const CardSubtitle = styled.p`
    font-size: 18px;
    color: #777;
    margin-top: 10px;
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export default function FeatureV3() {
  return (
    <>
      <div className="feature-style-three-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-80 pr-md-15 pr-xs-15">
              <div className="reservation-form light">
                <i className="fas fa-utensils"></i>
                <h3>Book a table</h3>
                <BookingTableForm />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="relative default-padding-top">
                <div className="food-cat-items">
                  <h2 className="flex-title mb-35">
                    Our Subscriptions
                  </h2>

                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <Card>

                        <CardImage src="https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_640.jpg" alt="Premium" />
                        <CardTitle>Basic</CardTitle>
                        <CardSubtitle>1 meal in week</CardSubtitle>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>

                        <CardImage src="https://cdn.pixabay.com/photo/2021/04/01/15/39/copyright-6142611_640.jpg" alt="Basic" />
                        <CardTitle>Premium</CardTitle>
                        <CardSubtitle>2 meal in week</CardSubtitle>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>

                        <CardImage src="https://cdn.pixabay.com/photo/2023/07/23/20/44/pastry-shop-8145805_1280.jpg" alt="VIP" />
                        <CardTitle>VIP</CardTitle>
                        <CardSubtitle>4 meal in week</CardSubtitle>
                      </Card>
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
}
