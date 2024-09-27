import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Make API call to retrieve static user with id 2
    axios
      .get("http://localhost:8000/api/admin/dashboard")
      .then((response) => {
        setUser(response.data.user); // Set the user data
        setTotalProfit(response.data.totalProfit); // Set the total profit
        setSubscriptionCount(response.data.subscriptionCount); // Set the subscription count
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  }, []);

  const [totalProfit, setTotalProfit] = useState(0);

  const [subscriptionCount, setSubscriptionCount] = useState(0);


  return (
    // <div className="content-wrapper">
    <div className="container-xxl flex-grow-1 container-p-y aseelContainer">
      <div className="row">
        <div className="col-xxl-8 mb-6 order-0">
          <div className="card">
            <div className="d-flex align-items-start row">
              <div className="col-sm-7">
                <div className="card-body">
                  <br />
                  <h3 className="card-title aseeltext-primary mb-3">
                    {" "}
                    {user ? `Hi ${user.name}! 🎉` : "Loading..."}
                  </h3>
                  <h5> {user ? `Email : ${user.email}` : "Loading..."} </h5>
                  <h5> {user ? `Phone : ${user.phone}` : "Loading..."} </h5>
                </div>
              </div>
              <div className="col-sm-5 text-center text-sm-left">
                <div className="card-body pb-0 px-0 px-md-6">
                  <img
                    src="../assets/img/illustrations/man-with-laptop.png"
                    height="175"
                    className="scaleX-n1-rtl"
                    alt="View Badge User"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 order-1">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-6 mb-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between mb-4">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="../assets/img/icons/unicons/chart-success.png"
                        alt="chart success"
                        className="rounded"
                      />
                    </div>
                  </div>
                  <h4 className="mb-1">Profit</h4>
                  <h2 className="card-title mb-3">${totalProfit}</h2>
                  <small className="text-success fw-medium">
                    {/* <i className="bx bx-up-arrow-alt"></i>this month */}
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-6 mb-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between mb-4">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="../assets/img/icons/unicons/wallet-info.png"
                        alt="wallet info"
                        className="rounded"
                      />
                    </div>
                  </div>
                  <h4 className="mb-1">Subscription</h4>
                  <h2 className="card-title mb-3">{subscriptionCount}</h2>
                  <small className="text-success fw-medium">
                    {/* <i className="bx bx-up-arrow-alt"></i> this month */}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;
