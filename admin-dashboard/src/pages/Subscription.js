import React, { useState, useEffect } from "react";
import axios from "axios";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch all subscriptions with related mealClass, mealType, and user
    axios
      .get("http://localhost:8000/api/admin/subscriptions")
      .then((response) => {
        setSubscriptions(response.data); // Set the fetched subscriptions
      })
      .catch((error) => {
        console.error("Error fetching subscriptions", error);
      });
  }, []);

const handleStatusChange = (id, newStatus) => {
  const confirmChange = window.confirm(
    `Are you sure you want to ${newStatus} this subscription?`
  );

  if (confirmChange) {
    axios
      .post(`http://localhost:8000/api/admin/subscriptions/${id}/status`, {
        status: newStatus,
      })
      .then((response) => {
        // Update the local state with the new status and approved_by value
        const updatedSubscription = response.data.subscription;
        setSubscriptions((prevSubscriptions) =>
          prevSubscriptions.map((sub) =>
            sub.id === id
              ? {
                  ...sub,
                  status: updatedSubscription.status,
                  approved_by: updatedSubscription.approved_by,
                }
              : sub
          )
        );
      })
      .catch((error) => {
        console.error("Error updating subscription status", error);
      });
  }
};

  return (
    <div class="container-xxl flex-grow-1 container-p-y aseelContainer">
      <div className="card">
        <h5 className="card-header">Table Basic</h5>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Subscriptions Class</th>
                <th>User Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Approved by</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {subscriptions.map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.id}</td>
                  {/* Combine mealClass.name and mealType.name */}
                  <td>{`${subscription.meal_class?.name || "N/A"} ${
                    subscription.meal_class?.meal_type?.name || ""
                  }`}</td>
                  <td>{subscription.user?.name || "N/A"}</td>
                  <td>{subscription.start_date}</td>
                  <td>{subscription.end_date}</td>

                  <td>
                    <span
                      className={`badge bg-label-${
                        subscription.status === "active"
                          ? "primary"
                          : "secondary"
                      } me-1`}
                    >
                      {subscription.status}
                    </span>
                  </td>
                  <td>{subscription.approved_by}</td>

                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() =>
                        handleStatusChange(subscription.id, "Activate")
                      }
                    >
                      Activate
                    </button>
                    <button
                      className="btn btn-success me-2"
                      onClick={() =>
                        handleStatusChange(subscription.id, "Complete")
                      }
                    >
                      Complete
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleStatusChange(subscription.id, "Cancel")
                      }
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
