// src/pages/NotFound.js
import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go Back Home</a>
    </div>
  );
};

export default NotFound;
