import React, { useState, useEffect } from "react";
import axios from "axios";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [editMeal, setEditMeal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    meal_time: "",
    calories: "",
    meal_type_id: "",
    meal_class_id: "",
    image: "",
  });

  // Fetch all meals with related mealType and mealClass on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/meals")
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
      });
  }, []);

  // Handle Edit button click
  const handleEdit = (meal) => {
    setEditMeal(meal);
    setFormData({
      name: meal.name,
      meal_time: meal.meal_time,
      calories: meal.calories,
      meal_type_id: meal.meal_type_id,
      meal_class_id: meal.meal_class_id,
      image: meal.image,
    });
  };

  // Handle Delete button click
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/api/admin/meals/${id}`)
        .then(() => {
          setMeals(meals.filter((meal) => meal.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting meal:", error);
        });
    }
  };

  // Handle form submission for editing
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/admin/meals/${editMeal.id}`, formData)
      .then((response) => {
        const updatedMeal = response.data.meal;
        setMeals(
          meals.map((meal) => (meal.id === updatedMeal.id ? updatedMeal : meal))
        );
        setEditMeal(null); // Close the edit form
      })
      .catch((error) => {
        console.error("Error updating meal:", error);
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Meals Table</h5>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Meal Time</th>
                <th>Calories</th>
                <th>Meal Type</th>
                <th>Meal Class</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal) => (
                <tr key={meal.id}>
                  <td>{meal.id}</td>
                  <td>{meal.name}</td>
                  <td>{meal.meal_time}</td>
                  <td>{meal.calories}</td>
                  <td>{meal.meal_type?.name || "N/A"}</td>{" "}
                  {/* Display meal type name */}
                  <td>{meal.meal_class?.name || "N/A"}</td>{" "}
                  {/* Display meal class name */}
                  <td>
                    {meal.image ? (
                      <img
                        src={`http://localhost:8000/storage/meals/${meal.image}`}
                        alt={meal.image}
                        width="50"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(meal)}
                    >
                      <i className="bx bx-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(meal.id)}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Meal Form */}
      {editMeal && (
        <div className="edit-form">
          <h5>Edit Meal: {editMeal.name}</h5>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Meal Time</label>
              <input
                type="text"
                className="form-control"
                value={formData.meal_time}
                onChange={(e) =>
                  setFormData({ ...formData, meal_time: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Calories</label>
              <input
                type="number"
                className="form-control"
                value={formData.calories}
                onChange={(e) =>
                  setFormData({ ...formData, calories: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEditMeal(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Meals;
