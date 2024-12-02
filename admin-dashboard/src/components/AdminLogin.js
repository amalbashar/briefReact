import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/admin/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      setError("are u sure ?");
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card px-sm-6 px-0">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="/" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-heading fw-bold">
                    sneat
                  </span>
                </a>
              </div>
              <h4 className="mb-1">Welcome to sneat! 👋</h4>
              <p className="mb-6">Please sign in to your account</p>

              {error && <p className="text-danger">{error}</p>}

              <form onSubmit={handleLogin} className="mb-6">
                <div className="mb-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-6 form-password-toggle">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
