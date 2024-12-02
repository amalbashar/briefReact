import React, { useState, useEffect } from "react";
import axios from "axios";

const MealTypes = () => {
  const [mealTypes, setMealTypes] = useState([]);
  const [editMealType, setEditMealType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
  });

  // Fetch all meal types on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/meal-types")
      .then((response) => {
        setMealTypes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching meal types:", error);
      });
  }, []);

  // Handle Edit button click
  const handleEdit = (mealType) => {
    setEditMealType(mealType);
    setFormData({
      name: mealType.name,
    });
  };

  // Handle Delete button click
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal type?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/api/admin/meal-types/${id}`)
        .then(() => {
          setMealTypes(mealTypes.filter((mealType) => mealType.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting meal type:", error);
        });
    }
  };

  // Handle form submission for editing
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/admin/meal-types/${editMealType.id}`, formData)
      .then((response) => {
        const updatedMealType = response.data.mealType;
        setMealTypes(
          mealTypes.map((mealType) =>
            mealType.id === updatedMealType.id ? updatedMealType : mealType
          )
        );
        setEditMealType(null); // Close the edit form
      })
      .catch((error) => {
        console.error("Error updating meal type:", error);
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y aseelContainer">
      <div class="card">
        {/* Edit Meal Type Modal or Form */}
        {editMealType && (
          <div className="edit-form">
            <h5>Edit Meal Type: {editMealType.name}</h5>
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
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditMealType(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
      <br />
      <br />

      <div className="card">
        <h5 className="card-header">Meal Type Table</h5>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Number of Meals</th> {/* New column */}
                <th>Number of Meal Classes</th> {/* New column */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mealTypes.map((mealType) => (
                <tr key={mealType.id}>
                  <td>{mealType.id}</td>
                  <td>{mealType.name}</td>
                  <td>{mealType.meals_count}</td> {/* Count of meals */}
                  <td>{mealType.meal_classes_count}</td>{" "}
                  {/* Count of meal classes */}
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(mealType)}
                    >
                      <i className="bx bx-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(mealType.id)}
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
    </div>
  );
};

export default MealTypes;
