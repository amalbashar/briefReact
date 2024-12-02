import React, { useState, useEffect } from "react";
import axios from "axios";

const MealClasses = () => {
  const [mealClasses, setMealClasses] = useState([]);
  const [editMealClass, setEditMealClass] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    meal_num: "",
    description: "",
    meal_type_id: "",
  });

  useEffect(() => {
    // Fetch all meal classes with related meal type
    axios
      .get("http://localhost:8000/api/admin/meal-classes")
      .then((response) => {
        setMealClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching meal classes:", error);
      });
  }, []);

  const handleEdit = (mealClass) => {
    setEditMealClass(mealClass);
    setFormData({
      name: mealClass.name,
      price: mealClass.price,
      meal_num: mealClass.meal_num,
      description: mealClass.description,
      meal_type_id: mealClass.meal_type_id,
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal class?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/api/admin/meal-classes/${id}`)
        .then(() => {
          setMealClasses(
            mealClasses.filter((mealClass) => mealClass.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting meal class:", error);
        });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/api/admin/meal-classes/${editMealClass.id}`,
        formData
      )
      .then((response) => {
        const updatedMealClass = response.data.mealClass;
        setMealClasses(
          mealClasses.map((mealClass) =>
            mealClass.id === updatedMealClass.id ? updatedMealClass : mealClass
          )
        );
        setEditMealClass(null); // Close the edit form
      })
      .catch((error) => {
        console.error("Error updating meal class:", error);
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y aseelContainer">
      <div class="card p-3">
        {/* Edit Meal Class Modal or Form */}
        {editMealClass && (
          <div className="edit-form">
            <h5>Edit Meal Class: {editMealClass.name}</h5>
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
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Meal Number</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.meal_num}
                  onChange={(e) =>
                    setFormData({ ...formData, meal_num: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Meal Type</label>
                <select
                  className="form-control"
                  value={formData.meal_type_id}
                  onChange={(e) =>
                    setFormData({ ...formData, meal_type_id: e.target.value })
                  }
                >
                  {/* Assuming you're fetching and mapping meal types elsewhere */}
                  {/* Example option format: */}
                  {/* <option value={mealType.id}>{mealType.name}</option> */}
                </select>
              </div>
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditMealClass(null)}
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
        <h5 className="card-header">Meal Class Table</h5>
        <div className="table-responsive text-nowrap">
          <table className="table meal-class-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Meal Number</th>
                <th className="description">Description</th>
                <th>Meal Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mealClasses.map((mealClass) => (
                <tr key={mealClass.id}>
                  <td>{mealClass.id}</td>
                  <td>{mealClass.name}</td>
                  <td>{mealClass.price}</td>
                  <td>{mealClass.meal_num}</td>
                  <td className="description">{mealClass.description}</td>
                  <td>{mealClass.meal_type?.name || "N/A"}</td>{" "}
                  {/* Display meal type name */}
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(mealClass)}
                    >
                      <i className="bx bx-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(mealClass.id)}
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


export default MealClasses;
