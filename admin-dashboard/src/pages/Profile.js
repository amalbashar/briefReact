import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",

    image: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/admin/user/2"
        ); // Assuming user id is 1
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle form submit to update user profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("phone", profile.phone);


    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      await axios.post(`http://localhost:8000/api/admin/user/2/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y aseelContainer">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-start align-items-sm-center gap-4 pb-4 border-bottom">
            <img
              src={`http://localhost:8000/storage/user_image/${profile.image}`}
              alt="user-avatar"
              className="d-block w-px-100 h-px-100 rounded"
              id="uploadedAvatar"
            />
            <div className="button-wrapper">
              <label
                htmlFor="upload"
                className="btn btn-primary me-3 mb-4"
                tabIndex="0"
              >
                <span className="d-none d-sm-block">Upload new photo</span>
                <i className="bx bx-upload d-block d-sm-none"></i>
                <input
                  type="file"
                  id="upload"
                  className="account-file-input"
                  hidden
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
              </label>
              <div>Allowed JPG, GIF or PNG. Max size of 800K</div>
            </div>
          </div>
          <div className="card-body pt-4">
            <form id="formAccountSettings" onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </div>

              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-primary me-3">
                  Save changes
                </button>
                <button type="reset" className="btn btn-outline-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
