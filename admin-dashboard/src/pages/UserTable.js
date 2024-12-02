import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCenter = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    // Fetch all users
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: "", // Optionally update password
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/api/admin/users/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/admin/users/${editUser.id}`, formData)
      .then((response) => {
        const updatedUser = response.data.user;
        setUsers(
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        setEditUser(null); // Close the edit form
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="aseelContainer container-xxl flex-grow-1 container-p-y">
      <div class="card p-3">
        {/* Edit User Modal or Form */}
        {editUser && (
          <div className="edit-form">
            <h5>Edit User: {editUser.name}</h5>
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
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Leave blank to keep current password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditUser(null)}
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
        <h5 className="card-header">User Table</h5>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(user)}
                    >
                      <i className="bx bx-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
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
      <br />
    </div>
  );
};

export default UserCenter;
