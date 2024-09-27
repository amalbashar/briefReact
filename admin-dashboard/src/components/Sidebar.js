import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  // Get the current location
  const location = useLocation();

  // Check if a path is active
  const isActive = (path) => location.pathname === path;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <img src="./assets/img/illustrations/logo.png" alt="logo"></img>
        </a>

        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Dashboards */}
        <li className={`menu-item ${isActive("/") ? "active" : ""}`}>
          <Link to="/" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-home-alt"></i>{" "}
            {/* Updated icon */}
            <div className="text-truncate" data-i18n="Dashboards">
              Dashboards
            </div>
          </Link>
        </li>

        {/* Subscription Dashboard */}
        <li
          className={`menu-item ${isActive("/subscription") ? "active" : ""}`}
        >
          <Link to="/subscription" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-credit-card"></i>{" "}
            {/* Updated icon */}
            <div className="text-truncate" data-i18n="Layouts">
              Subscription Center
            </div>
          </Link>
        </li>

        {/* User Center */}
        <li className={`menu-item ${isActive("/user_center") ? "active" : ""}`}>
          <Link to="/user_center" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-user"></i>{" "}
            {/* Updated icon */}
            <div className="text-truncate" data-i18n="Layouts">
              User Center
            </div>
          </Link>
        </li>

        {/* Contracts Center Dropdown */}
        <li className={`menu-item ${isDropdownOpen ? "active open" : ""}`}>
          <a
            href="javascript:void(0);"
            className="menu-link menu-toggle"
            onClick={toggleDropdown}
          >
            <i className="menu-icon tf-icons bx bx-file"></i>{" "}
            {/* Updated icon */}
            <div className="text-truncate" data-i18n="Contracts">
              Contracts Center
            </div>
          </a>
          <ul className={`menu-sub ${isDropdownOpen ? "show" : ""}`}>
            {/* Classes */}
            <li className="menu-item">
              <Link to="/admin/meal_classes" className="menu-link">
                <i className="menu-icon tf-icons bx bx-grid-alt"></i>{" "}
                {/* Icon for classes */}
                <div className="text-truncate" data-i18n="Classes">
                  Classes
                </div>
              </Link>
            </li>

            {/* Types */}
            <li className="menu-item">
              <Link to="/admin/meal_types" className="menu-link">
                <i className="menu-icon tf-icons bx bx-category"></i>{" "}
                {/* Icon for types */}
                <div className="text-truncate" data-i18n="Types">
                  Types
                </div>
              </Link>
            </li>

            {/* Meals */}
            <li className="menu-item">
              <Link to="/admin/meals" className="menu-link">
                <i className="menu-icon tf-icons bx bx-dish"></i>{" "}
                {/* Icon for meals */}
                <div className="text-truncate" data-i18n="Meals">
                  Meals
                </div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Profile */}
        <li
          className={`menu-item ${isActive("/admin/profile") ? "active" : ""}`}
        >
          <Link to="/admin/profile" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-user-circle"></i>{" "}
            {/* Updated icon */}
            <div className="text-truncate" data-i18n="Layouts">
              Profile
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
