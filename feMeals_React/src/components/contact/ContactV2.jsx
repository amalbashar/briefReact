// export default ContactV1;
import React, { useState } from "react";
import Home1 from "../../pages/homePages/Home1";
const ContactV2 = () => {
  // State for login data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // State for handling success or error messages
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle form input changes for login
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Submit login form
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        // Use the login API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        setMessage("Login successful! Redirecting...");
        setIsError(false);

        // Redirect to the provided URL after 2 seconds
        setTimeout(() => {
          window.location.href = data.redirect_url; // Redirect to React home page
        }, 2000);
      } else {
        console.log("Login error:", data.message);
        setMessage(
          "Login failed. Please check your credentials and try again."
        );
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred during login. Please try again later.");
      setIsError(true);
    }
  };

  return (
    <>
      <div className="contact-style-one-area default-padding overflow-hidden">
        <div className="container">
          <div className="row align-center">
            {/* Column for the image */}
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1582735685072-1009a15ac321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHNhbGFkfGVufDB8fHx8MTY1NzUyODk2NA&ixlib=rb-1.2.1&q=80&w=1080"
                alt="Salad with Guacamole"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>

            {/* Column for the login form */}
            <div className="col-lg-6">
              <div className="contact-form-style-one">
                <h2 className="form-heading">Login to Your Account</h2>

                {/* Display success or error message */}
                {message && (
                  <div
                    style={{
                      color: isError ? "red" : "green",
                      fontSize: "1.2rem",
                      marginBottom: "15px",
                    }}
                  >
                    {message}
                  </div>
                )}

                <form className="form" onSubmit={handleLogin}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-input"
                    required
                    value={loginData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      marginBottom: "15px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-input"
                    required
                    value={loginData.password}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      marginBottom: "15px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <br />
                  <button
                    type="submit"
                    className="form-button"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#b28b53",
                      color: "white",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV2;
